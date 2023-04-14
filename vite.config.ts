/// <reference types="vitest" />
import solid from "solid-start/vite";
import eslint from "vite-plugin-eslint";
import vercel from "solid-start-vercel";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ adapter: vercel({}) }), eslint()],
  resolve: {
    conditions: ["development", "browser"],
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    deps: {
      inline: [/solid-js/],
    },
  },
});
