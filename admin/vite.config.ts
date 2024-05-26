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
        find: "@context",
        replacement: path.resolve(__dirname, path.join("src", "context")),
      },
      {
        find: "@hooks",
        replacement: path.resolve(__dirname, path.join("src", "hooks")),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, path.join("src", "pages")),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, path.join("src", "services")),
      },
      {
        find: "@store",
        replacement: path.resolve(__dirname, path.join("src", "store")),
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, path.join("src", "utils")),
      },
      {
        find: "@views",
        replacement: path.resolve(__dirname, path.join("src", "views")),
      },
    ],
  },
});
