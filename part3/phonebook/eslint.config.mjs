import js from "@eslint/js";
import globals from "globals";
import stylisticJs from "@stylistic/eslint-plugin-js";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      ecmaVersion: "latest",
    },
    plugins: {
      "@stylistic/js": stylisticJs,
    },
    rules: {
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/linebreak-style": ["error", "unix"],
      "@stylistic/js/quotes": ["error", "single"],
      "@stylistic/js/semi": ["error", "never"],
      eqeqeq: "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      "no-console": "off",
    },
  },
  {
    files: ["eslint.config.{js,cjs,mjs}"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
      },
      ecmaVersion: "latest",
    },
    rules: {
      indent: ["error", 2],
    },
  },
];
