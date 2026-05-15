import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      gsap: fileURLToPath(new URL("./src/vendor/gsap/index.js", import.meta.url)),
      "gsap/ScrollTrigger": fileURLToPath(
        new URL("./src/vendor/gsap/ScrollTrigger.js", import.meta.url),
      ),
      lenis: fileURLToPath(new URL("./src/vendor/lenis/index.js", import.meta.url)),
    },
  },
});
