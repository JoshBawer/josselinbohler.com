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
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});

