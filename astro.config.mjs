import { defineConfig, sharpImageService } from "astro/config";

export default defineConfig({
  site: "https://marketingkelmac.github.io",
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
