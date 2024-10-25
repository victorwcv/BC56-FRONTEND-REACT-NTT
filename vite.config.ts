/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/data/**/*",
        "src/main.tsx",
        "src/vite-env.d.ts",
        "src/types/**/*",
        "**/*.test.ts",
        "**/*.test.tsx",
      ],
    },
  },
});
