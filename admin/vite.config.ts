import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@components",
        replacement: path.resolve(__dirname, path.join("src", "components")),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, path.join("src", "pages")),
      },
      {
        find: "@router",
        replacement: path.resolve(__dirname, path.join("src", "router")),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, path.join("src", "store")),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, path.join("src", "utils")),
      },
    ],
  },
});
