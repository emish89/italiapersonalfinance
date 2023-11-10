import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: 'https://italia-personal-finance.netlify.app/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), mdx(), react()],
  experimental: {
    devOverlay: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  }
});