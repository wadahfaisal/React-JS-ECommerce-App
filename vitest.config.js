import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",
    globals: true,
    css: true,
    setupFiles: "./src/test/setup.ts",
    include: ["**/*.test.{js,ts,jsx,tsx}"],
    // include: ["**/*.{test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      provider: "v8", // or 'istanbul'
    },
    // browser: {
    //   enabled: false,
    //   name: "chromium",
    //   provider: "playwright",
    // },
  },
  // TODO: this is to make ecosystem work, remove when fixed
  // server: {
  //   fs: {
  //     strict: false,
  //   },
  // },
});
