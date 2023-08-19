import type { Config } from "tailwindcss"

export default {
  content: ["./src/**/*.{ts,tsx}", "../../libs/react-ui/src/**/*.{ts,tsx}"],

  presets: [
    require("@unknown-co/tailwindcss/animation"),
    require("@unknown-co/tailwindcss/colors"),
    require("@unknown-co/tailwindcss/data"),
    require("@unknown-co/tailwindcss/sizing"),
    require("@unknown-co/tailwindcss/spacing"),
    require("@unknown-co/tailwindcss/typography"),
  ],

  darkMode: ["class"],
} satisfies Config
