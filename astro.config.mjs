import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://002solutions.com',
  output: "hybrid",
  integrations: [tailwind(), sitemap()],
  adapter: cloudflare()
});