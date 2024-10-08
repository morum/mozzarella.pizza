// Astro
import { defineConfig } from 'astro/config';

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://mozzarella.pizza",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), svelte()]
});
