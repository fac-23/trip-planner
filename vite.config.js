import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Import Vite Progressive Web App module
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon-16x16.png",
        "favicon-32x32.png",
        "favicon.ico",
        "logo.png",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      workbox: {
        globPatterns: ["*.js", "*.css", "*.html", "*.jpg", "*.png"],
      },
    }),
  ],
  server: { port: 3000 },
});
