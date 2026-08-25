import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const failures = [];

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function localTarget(url) {
  const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!pathname || pathname === '/') return join(dist, 'index.html');
  if (pathname === '/404') return join(dist, '404.html');
  const clean = pathname.replace(/^\//, '');
  if (extname(clean)) return join(dist, clean);
  return join(dist, clean, 'index.html');
}

if (!existsSync(dist)) {
  console.error('Built-site audit requires the dist directory. Run the production build first.');
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
for (const file of htmlFiles) {
  const name = relative(dist, file).replaceAll('\\', '/');
  const html = readFileSync(file, 'utf8');
  if (!/<html lang="(?:en|fr)">/.test(html)) failures.push(`${name}: missing valid document language`);
  if (!/<meta name="description" content="[^"]{30,}">/.test(html)) failures.push(`${name}: missing useful meta description`);
  if (!/<link rel="canonical" href="https:\/\/josselinbohler\.com\//.test(html)) failures.push(`${name}: missing canonical URL`);
  for (const locale of ['en', 'fr', 'x-default']) {
    if (!new RegExp(`<link rel="alternate" hreflang="${locale}"`).test(html)) failures.push(`${name}: missing ${locale} alternate`);
  }
  if (!/<meta property="og:image" content="https:\/\/josselinbohler\.com\//.test(html)) failures.push(`${name}: missing Open Graph image`);

  for (const match of html.matchAll(/(?:href|src|action)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//') || url.startsWith('/#')) continue;
    const target = localTarget(url);
    if (!existsSync(target)) failures.push(`${name}: broken local reference ${url}`);
  }
}

const sitemapPath = join(dist, 'sitemap-0.xml');
if (!existsSync(sitemapPath)) failures.push('sitemap-0.xml is missing');
else {
  const sitemap = readFileSync(sitemapPath, 'utf8');
  for (const blocked of ['/404', '/fr/404', '/thanks', '/fr/merci']) {
    if (sitemap.includes(`josselinbohler.com${blocked}`)) failures.push(`Noindex route found in sitemap: ${blocked}`);
  }
  for (const required of ['https://josselinbohler.com/', 'https://josselinbohler.com/fr', 'https://josselinbohler.com/work', 'https://josselinbohler.com/fr/projets']) {
    if (!sitemap.includes(required)) failures.push(`Expected sitemap route missing: ${required}`);
  }
}

if (failures.length) {
  console.error(`Built-site audit failed with ${failures.length} issue(s):\n- ${[...new Set(failures)].join('\n- ')}`);
  process.exit(1);
}

console.log(`Built-site audit passed: ${htmlFiles.length} HTML documents, local links, metadata and sitemap validated.`);
