import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

// Fall back to sane defaults instead of throwing: throwing at config-load time
// breaks `pnpm -r run build` and any CI environment where PORT / BASE_PATH
// are not set.
const rawPort = process.env.PORT ?? "5174";
const port = Number(rawPort);
const resolvedPort = Number.isNaN(port) || port <= 0 ? 5174 : port;

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [mockupPreviewPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: resolvedPort,
    host: "0.0.0.0",
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port: resolvedPort,
    host: "0.0.0.0",
  },
});
