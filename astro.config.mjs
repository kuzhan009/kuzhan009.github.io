// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site adresi: GitHub Pages "kullaniciadi.github.io" deposu
export default defineConfig({
  site: 'https://kuzhan009.github.io',
  integrations: [sitemap()],
});
