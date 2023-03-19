import { defineConfig } from "astro/config";

// https://astro.build/config
import htmlBeautifier from "astro-html-beautifier";

// https://astro.build/config
export default defineConfig({
  site: "https://carbwire.pikesley.org",
  integrations: [
    htmlBeautifier({
      indent_size: 2,
      wrap_line_length: 88,
      jslint_happy: true,
      preserve_newlines: false,
    }),
  ],
});