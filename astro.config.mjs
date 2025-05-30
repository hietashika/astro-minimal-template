// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  experimental: {
    svg: true
  },
  devToolbar: {
    enabled: false
  }
});
