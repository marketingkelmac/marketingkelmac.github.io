import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://marketingkelmac.github.io",
  experimental: {
    assets: true
  },
  image: {
    service: sharpImageService()
  },
  integrations: [mdx()]
});