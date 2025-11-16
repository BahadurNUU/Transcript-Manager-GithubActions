// @ts-check



import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    ignores: [
      "jest.config.cjs",
      ".prettierrc.cjs",
    ],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    extends: ["js/recommended"],
    plugins: { js },
  },
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.recommended],
  },
]);
