import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import jest from 'eslint-plugin-jest';

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      ...js.configs.recommended.rules,
      "semi": ["error", "always"]
    },
    languageOptions: { globals: globals.browser }
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
]);
