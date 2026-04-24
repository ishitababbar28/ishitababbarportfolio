import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// Standalone static SPA build (for GitHub Pages / Vercel / any static host).
// Does NOT affect the main TanStack Start build used by Lovable.
// Run: `bunx vite build --config vite.static.config.ts`
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  base: process.env.STATIC_BASE || "/",
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
  },
});