import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH === "production" ? "/Valmart/tree/main/valmart_app/valmart_frontend" : "/",
  server: {
    proxy: {
      "/api": {
        target: "https://fakestoreapi.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    mimeTypes: {
      "application/javascript": ["js"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
