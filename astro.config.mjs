// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://drfabio.github.io',
  base: '/fabiooliveiracosta',
  vite: {
    plugins: [tailwindcss()]
  }
});