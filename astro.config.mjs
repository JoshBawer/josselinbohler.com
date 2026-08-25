import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://josselinbohler.com',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'redirect'
    }
  },
  integrations: [sitemap({
    filter: (page) => !['/404', '/fr/404', '/thanks', '/fr/merci'].includes(new URL(page).pathname.replace(/\/$/, '') || '/')
  })],
  build: {
    format: 'directory'
  }
});
