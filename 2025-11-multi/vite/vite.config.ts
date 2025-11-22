import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5500,
    host: "127.0.0.1",
    open: false,
  },
  plugins: [react(), tailwindcss() as PluginOption],
});
