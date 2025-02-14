import eslint from "@eslint/js"
import tseslint from "@typescript-eslint/eslint-plugin"
import tsparser from "@typescript-eslint/parser"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import jsxA11y from "eslint-plugin-jsx-a11y"

export default [
  // Configuración base
  eslint.configs.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx",],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react": react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          "varsIgnorePattern": "logger|ignore|_",
          "argsIgnorePattern": "logger|ignore|_",
          "args": "after-used",
          "ignoreRestSiblings": true
        }
      ],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",

      // JavaScript
      "no-console": [
        "error",
        { allow: ["warn", "error"] }
      ],
      "prefer-const": "error",
      "no-var": "error",
      "consistent-return": "warn",
      "eqeqeq": "off",

      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": ["error", { "extensions": [".tsx"] }],
      "react/prop-types": "off",
      "react/jsx-key": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // JSX A11y
      "jsx-a11y/label-has-for": [
        "error",
        {
          "required": {
            "some": ["nesting", "id"]
          }
        }
      ],

      // Otros ajustes
      "object-curly-spacing": ["error", "always"],
      "quotes": ["error", "single", { "avoidEscape": true }],
      "semi": ["error", "never"],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]