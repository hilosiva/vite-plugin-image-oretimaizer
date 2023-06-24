import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import dts from "vite-plugin-dts";
import { viteImageOretimaizer } from "./src/index";
import path from "path";

export default defineConfig({
  plugins: [
    Inspect({
      build: true,
      outputDir: ".vite-inspect",
    }),
    dts({ insertTypesEntry: true }),
    viteImageOretimaizer({
      createFormat: {
        addExt: true,
      },
      jpg: {
        quality: 70,
        mozjpeg: true,
      },
      jpeg: {
        quality: 70,
        mozjpeg: true,
      },
      png: {
        quality: 70,
      },
      webp: {
        quality: 70,
        lossless: true,
      },
      avif: {
        quality: 60,
        lossless: true,
      },
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "ViteSharpOptimazer",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vite", "path", "sharp"], // バンドルしたくない依存関係を指定
      output: {
        globals: {
          path: "path",
          sharp: "sharp",
        },
      },
    },

    minify: false,
  },
});
