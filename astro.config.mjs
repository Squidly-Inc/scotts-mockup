// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://squidly-inc.github.io',
  base: '/scotts-mockup',
  vite: {
    plugins: [tailwindcss()],
  },
});
