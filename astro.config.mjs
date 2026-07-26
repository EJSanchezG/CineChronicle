import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ejsanchezg.github.io',
  base: '/CineChronicle/',
  devToolbar: {
    enabled: false
  }
});
