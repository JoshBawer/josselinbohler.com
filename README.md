# josselinbohler.com

Bilingual professional portfolio for Josselin Bohler: Lead Reliability Engineer, AI builder and founder of Reliability Factory.

The site is a static Astro project with no application backend, CMS, analytics or advertising cookies. English is served at `/` and French at `/fr`.

## Local development

Requirements: Node.js 22.19 or newer in the Node 22 line.

```bash
npm ci
npm run dev
```

Production validation:

```bash
npm run check
npm run build
npm run test:e2e
npm run audit:lighthouse
```

The production output is written to `dist`.

## Structure

- `src/content/projects`: six paired EN/FR case studies with explicit maturity status.
- `src/content/experience`: verified CV experience entries.
- `src/content/insights`: bilingual long-form thinking.
- `src/lib/contact-schema.ts`: typed, normalised shape of a contact submission.
- `src/pages`: static EN/FR routes, confirmation, privacy, legal and 404 pages.
- `public/images/work`: sanitised WebP and AVIF project media.
- `public/downloads`: reviewed, generically named CV PDFs.
- `scripts/audit-content.mjs`: pre-build parity, asset, secret and sensitive-data checks.
- `tests/site.spec.ts`: route, metadata, responsive, form, link, download and Axe tests.

## Content safeguards

The pre-build audit blocks the former public brand, common secrets, unexpected email addresses, financial identifiers, targeted CV filenames and unoptimised captures. It also verifies paired pages, project statuses and both media formats.

Project captures contain either synthetic data or a client-side interface with no uploaded workbook. Company names are used as factual experience context only; no client logos, recommendation quotes or confidential documents are included.

## Netlify deployment

The repository is ready for Netlify with:

- build command: `npm run build`
- publish directory: `dist`
- static form name: `professional-contact`
- apex canonical domain: `josselinbohler.com`
- `www` to apex redirect and security headers in `netlify.toml`

After the first site is created, enable a form-submission email notification in Netlify’s dashboard. The destination address must remain in Netlify settings and must not be added to repository secrets or source code beyond the public contact identity already shown on the site.

The domain can be attached only after it has been purchased and its DNS records are available.
