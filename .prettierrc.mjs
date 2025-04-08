import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

/** @type {import("prettier").Config} */
export default {
  plugins: [require.resolve("prettier-plugin-astro")],
  htmlWhitespaceSensitivity: "ignore",
  useTabs: false,
  tabWidth: 2,
  singleQuote: false,
  trailingComma: "none",
  semi: true,
  printWidth: 80,
  arrowParens: "always",
  endOfLine: "crlf"
};
