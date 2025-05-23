// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import { site } from './src/content.config';

// https://astro.build/config
export default defineConfig({
  site: site.url,
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  integrations: [alpinejs(), sitemap()],
});
