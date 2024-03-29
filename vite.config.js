// vite.config.js
import { defineConfig } from "vite";
import cssnano from "cssnano";
import imagemin from "vite-plugin-imagemin";
import purgecss from "@fullhuman/postcss-purgecss";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: ".",
  sourcemap: true,
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
  },
  css: {
    postcss: {
      plugins: [
        purgecss({
          content: ["./index.html", "./public/**/*.html"],
        }),
        cssnano({
          preset: ["default", { discardComments: { removeAll: true } }],
        }),
      ],
    },
  },
  plugins: [
    imagemin({
      gifsicle: {},
      mozjpeg: {
        quality: 1,
      },
      optipng: {
        optimizationLevel: 1,
      },
      svgo: {},
    }),
    ViteImageOptimizer({
      webp: {
        quality: 75,
      },
    }),
  ],
});
