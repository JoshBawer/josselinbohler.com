import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const failures = [];
const textExtensions = new Set(['.astro', '.ts', '.js', '.mjs', '.cjs', '.md', '.html', '.toml', '.json', '.svg', '.txt', '.css']);
const ignored = new Set(['node_modules', 'dist', '.git', '.astro', 'playwright-report', 'test-results']);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function fail(message) { failures.push(message); }

const files = walk(root);
const repoFiles = files.map((file) => relative(root, file).replaceAll('\\', '/'));

for (const file of repoFiles) {
  if (/(^|\/)\.env($|\.)/i.test(file)) fail(`Environment file must not be committed: ${file}`);
  if (/totalenergies|proposal|quotation/i.test(file)) fail(`Targeted or commercial filename found: ${file}`);
  if (/raw\.png$/i.test(file)) fail(`Unoptimised capture remains public: ${file}`);
}

const formerName = ['Rob', 'Reliability'].join(' ');
const formerSlug = ['rob', 'reliability'].join('-');
const serviceRoleMarker = ['SUPABASE', 'SERVICE', 'ROLE'].join('_');
const commercialIdPattern = new RegExp(`\\b(?:${['quotation', 'proposal'].join('|')})[-_ ]?(?:id|number|no\\.?)[-_ :]*[A-Z0-9-]+`, 'i');
const forbidden = [
  [new RegExp(formerName, 'i'), 'former public brand'],
  [new RegExp(formerSlug, 'i'), 'former public brand slug'],
  [/\bIBAN\b/i, 'banking identifier'],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key'],
  [/\b(?:sk|rk)-[A-Za-z0-9_-]{20,}\b/, 'API key'],
  [new RegExp(serviceRoleMarker, 'i'), 'service-role secret'],
  [commercialIdPattern, 'commercial reference']
];
const allowedEmails = new Set(['josselinbohler@hotmail.com']);

for (const absolute of files) {
  const name = relative(root, absolute).replaceAll('\\', '/');
  const extension = extname(absolute).toLowerCase();
  if (!textExtensions.has(extension) || name === 'package-lock.json') continue;
  const content = readFileSync(absolute, 'utf8');
  for (const [pattern, label] of forbidden) {
    if (pattern.test(content)) fail(`${label} found in ${name}`);
  }
  for (const email of content.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? []) {
    if (!allowedEmails.has(email.toLowerCase())) fail(`Unexpected email found in ${name}: ${email}`);
  }
}

function projectMeta(path) {
  const source = readFileSync(path, 'utf8');
  const frontmatter = source.match(/^---\s*([\s\S]*?)\s*---/);
  if (!frontmatter) return null;
  const get = (key) => frontmatter[1].match(new RegExp(`^${key}:\\s*["']?([^"'\\r\\n]+)`, 'm'))?.[1]?.trim();
  return { locale: get('locale'), slug: get('slug'), order: Number(get('order')), status: get('status'), cover: get('cover') };
}

const projectFiles = files.filter((file) => /src[\\/]content[\\/]projects[\\/].+\.md$/.test(file));
const projects = projectFiles.map((file) => ({ file, ...projectMeta(file) }));
const enProjects = projects.filter((item) => item.locale === 'en');
const frProjects = projects.filter((item) => item.locale === 'fr');
if (enProjects.length !== 6 || frProjects.length !== 6) fail(`Expected six case studies per locale, found EN ${enProjects.length} / FR ${frProjects.length}`);

const orders = (items) => items.map((item) => item.order).sort((a, b) => a - b).join(',');
if (orders(enProjects) !== orders(frProjects)) fail('EN/FR project order parity failed');
for (const project of projects) {
  if (!['Published', 'Prototype', 'Internal tool', 'Archived'].includes(project.status)) fail(`Invalid project status in ${relative(root, project.file)}`);
  if (!project.cover?.endsWith('.webp')) fail(`Project cover must be WebP in ${relative(root, project.file)}`);
  if (project.cover) {
    const webp = join(root, 'public', project.cover.replace(/^\//, ''));
    const avif = webp.replace(/\.webp$/, '.avif');
    if (!existsSync(webp) || statSync(webp).size < 1000) fail(`Missing WebP cover: ${project.cover}`);
    if (!existsSync(avif) || statSync(avif).size < 1000) fail(`Missing AVIF cover: ${project.cover.replace(/\.webp$/, '.avif')}`);
  }
}

const requiredPublic = [
  'public/images/josselin-bohler.webp', 'public/images/josselin-bohler.avif',
  'public/images/og-josselin-bohler.jpg',
  'public/downloads/josselin-bohler-cv-en.pdf', 'public/downloads/josselin-bohler-cv-fr.pdf',
  'public/fonts/geist-400.woff2', 'public/fonts/geist-600.woff2',
  'public/fonts/geist-mono-500.woff2', 'public/fonts/inter-800.woff2'
];
for (const file of requiredPublic) if (!existsSync(join(root, file))) fail(`Required public asset missing: ${file}`);

const pairedRoutes = [
  ['src/pages/index.astro', 'src/pages/fr/index.astro'],
  ['src/pages/work/index.astro', 'src/pages/fr/projets/index.astro'],
  ['src/pages/experience.astro', 'src/pages/fr/experience.astro'],
  ['src/pages/contact.astro', 'src/pages/fr/contact.astro'],
  ['src/pages/thanks.astro', 'src/pages/fr/merci.astro'],
  ['src/pages/privacy.astro', 'src/pages/fr/confidentialite.astro'],
  ['src/pages/legal.astro', 'src/pages/fr/mentions-legales.astro'],
  ['src/pages/insights/living-reliability.astro', 'src/pages/fr/idees/strategie-fiabilite-vivante.astro']
];
for (const [en, fr] of pairedRoutes) if (!existsSync(join(root, en)) || !existsSync(join(root, fr))) fail(`Bilingual route pair missing: ${en} / ${fr}`);

if (failures.length) {
  console.error(`Content audit failed with ${failures.length} issue(s):\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(`Content audit passed: ${projects.length} case studies, ${pairedRoutes.length} bilingual route pairs, no blocked identifiers or secrets.`);
