import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://carina-portfolio.vercel.app",
  output: "static",
  trailingSlash: "always",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover"
  }
});
