import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // 👈 this makes Vite listen on your local IP as well
    port: 5173, // optional, you can change if needed
  },
});
