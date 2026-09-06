import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://www.e-vision-service.com",
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          de: "de-DE",
          en: "en",
          zh: "zh-CN",
        },
      },
    }),
    icon(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
