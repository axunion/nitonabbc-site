import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://nitonabbc.org",
  integrations: [mdx(), sitemap(), icon()],
  image: {
    service: passthroughImageService()
  },
});
