import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import { remarkModifiedTime } from './remark-modified-time.mjs';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: 'https://italia-personal-finance.netlify.app/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), mdx(), react(),
  partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
    },
  }),
  ],
  experimental: {
    devOverlay: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },
});