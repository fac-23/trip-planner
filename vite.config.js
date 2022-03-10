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
    }),
  ],
  server: { port: 3000 },
});
