import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["**/*.test.{js,ts,jsx,tsx}"],
    browser: {
      enabled: false,
      name: "chromium",
      provider: "playwright",
    },
  },
  // TODO: this is to make ecosystem work, remove when fixed
  server: {
    fs: {
      strict: false,
    },
  },
});
