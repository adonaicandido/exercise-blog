import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../../libs/react-ui/src/**/*.{ts,tsx}"],

  presets: [
    require("@unknown-co/tailwindcss/animation"),
    require("@unknown-co/tailwindcss/data"),
    require("@unknown-co/tailwindcss/spacing"),
    require("@unknown-co/tailwindcss/typography"),
  ],

  darkMode: ["class"],
  theme: {
    extend: {
      maxWidth: {
        320: "20rem",
        512: "32rem",
      },
    },
  },
}

export default config
