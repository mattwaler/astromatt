// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import site from './src/site.config.ts'

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
  integrations: [alpinejs({ entrypoint: '/src/alpine.config.ts' }), sitemap()],
});
