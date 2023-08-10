import { defineConfig, sharpImageService } from "astro/config";

export default defineConfig({
  site: "https://kelmacgroup.com",
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
