module.exports = {
  extends: ["next", "turbo","plugin:tailwindcss/recommended","prettier"],
  settings: {
    react: {
      version: "detect",
    },
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
    "tailwindcss/no-arbitrary-value": "warn",
    "tailwindcss/classnames-order": "off",
    "tailwindcss/no-custom-classname": "off",
  },
};
