// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // DEPLOY_TARGET=production (set in Cloudflare Pages) -> real domain at root.
  // Default (GitHub Actions) -> github.io preview, unchanged.
  site: process.env.DEPLOY_TARGET === 'production'
    ? 'https://scottsseafoodsj.com'
    : 'https://squidly-inc.github.io',
  base: process.env.DEPLOY_TARGET === 'production' ? '/' : '/scotts-mockup',
  vite: {
    plugins: [tailwindcss()],
  },
});
