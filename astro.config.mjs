import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import mdx from "@astrojs/mdx";
import { remarkModifiedTime } from './remark-modified-time.mjs';
import { remarkReadingTime } from './remark-reading-time.mjs';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // used to generate images
  site: 'https://www.italiapersonalfinance.it/',
  trailingSlash: 'ignore',
  integrations: [sitemap(), UnoCSS({
    injectReset: true
  }), mdx(), react(),
    /*
    TODO waiting for firefox bug resolution
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    */
  ],
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  markdown: {
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },
});