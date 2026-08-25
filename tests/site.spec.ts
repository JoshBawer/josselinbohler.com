import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/', '/work', '/experience', '/insights/living-reliability', '/contact', '/thanks', '/privacy', '/legal',
  '/work/rca-copilot-factory-brain', '/work/ai-fmeca-maintenance-strategy', '/work/fmeca-qaqc-checker',
  '/work/reliability-factory-workspace', '/work/open-reliability-toolkits', '/work/keep-it-running',
  '/fr', '/fr/projets', '/fr/experience', '/fr/idees/strategie-fiabilite-vivante', '/fr/contact', '/fr/merci',
  '/fr/confidentialite', '/fr/mentions-legales', '/fr/projets/copilote-rca-factory-brain',
  '/fr/projets/amdec-ia-strategie-maintenance', '/fr/projets/controle-qualite-amdec',
  '/fr/projets/atelier-reliability-factory', '/fr/projets/outils-fiabilite-open-source', '/fr/projets/keep-it-running-jeu'
];

for (const route of routes) {
  test(`${route} renders with complete metadata and no mobile overflow`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('html')).toHaveAttribute('lang', route.startsWith('/fr') ? 'fr' : 'en');
    await expect(page).toHaveTitle(/Josselin Bohler/);
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description?.length).toBeGreaterThan(30);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="fr"]')).toHaveCount(1);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', /^https:\/\//);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(1);
    const failedImages = await page.locator('img:not([loading="lazy"])').evaluateAll((images) => images.filter((image) => !(image as HTMLImageElement).complete || (image as HTMLImageElement).naturalWidth === 0).length);
    expect(failedImages).toBe(0);
  });
}

test('language switch preserves the matching page', async ({ page }) => {
  const switchLanguage = async (label: 'FR' | 'EN') => {
    if (await page.locator('.desktop-nav').isVisible()) {
      await page.locator('.desktop-nav').getByRole('link', { name: label, exact: true }).click();
    } else {
      await page.locator('.mobile-menu summary').click();
      await page.locator('.mobile-menu').getByRole('link', { name: label, exact: true }).click();
    }
  };
  await page.goto('/work');
  await switchLanguage('FR');
  await expect(page).toHaveURL(/\/fr\/projets$/);
  await switchLanguage('EN');
  await expect(page).toHaveURL(/\/work$/);

  await page.goto('/work/rca-copilot-factory-brain');
  await switchLanguage('FR');
  await expect(page).toHaveURL(/\/fr\/projets\/copilote-rca-factory-brain$/);
});

test('mobile navigation is keyboard and touch accessible', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.locator('.mobile-menu');
  await menu.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('open', '');
  await menu.getByRole('link', { name: 'Experience', exact: true }).click();
  await expect(page).toHaveURL(/\/experience$/);
});

test('CV downloads are valid PDFs', async ({ request }) => {
  for (const path of ['/downloads/josselin-bohler-cv-en.pdf', '/downloads/josselin-bohler-cv-fr.pdf']) {
    const response = await request.get(path);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain('application/pdf');
    const body = await response.body();
    expect(body.subarray(0, 4).toString()).toBe('%PDF');
  }
});

test('external links are safely marked', async ({ page }) => {
  await page.goto('/');
  const external = page.locator('a[href^="https://"]');
  expect(await external.count()).toBeGreaterThanOrEqual(2);
  for (const anchor of await external.all()) {
    await expect(anchor).toHaveAttribute('target', '_blank');
    await expect(anchor).toHaveAttribute('rel', /noopener/);
  }
});

test('Netlify contact form has typed categories, consent, honeypot and confirmation', async ({ page }) => {
  await page.route('**/thanks', async (route) => {
    if (route.request().method() === 'POST') {
      await route.fulfill({ status: 200, contentType: 'text/html', body: '<h1>Message received.</h1>' });
    } else await route.continue();
  });
  await page.goto('/contact');
  const form = page.locator('form[name="professional-contact"]');
  await expect(form).toHaveAttribute('data-netlify', 'true');
  await expect(form.locator('input[name="bot-field"]')).toHaveCount(1);
  await expect(form.locator('option')).toHaveText(['Select one', 'A role or career opportunity', 'An industrial project', 'A partnership', 'Something else']);
  await form.locator('#name').fill('Test User');
  await form.locator('#email').fill(['test', 'example.com'].join('@'));
  await form.locator('#organization').fill('Example Organisation');
  await form.locator('#inquiryType').selectOption('Project');
  await form.locator('#message').fill('A sufficiently detailed test message about an industrial reliability project.');
  await form.locator('input[name="consent"]').check();
  await form.getByRole('button', { name: 'Send message' }).click();
  await expect(page.getByRole('heading', { name: 'Message received.' })).toBeVisible();
  await page.goto('/thanks');
  await expect(page.getByRole('heading').first()).toContainText('Message received');
});

for (const route of ['/', '/fr', '/work', '/fr/projets', '/experience', '/contact', '/insights/living-reliability']) {
  test(`${route} has no automatically detectable WCAG A/AA violations`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  });
}
