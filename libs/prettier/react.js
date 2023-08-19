const common = require("./common");

module.exports = {
  ...common,
  plugins: [...common.plugins, "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["cn", "cx", "cva", "twMerge"],
};
