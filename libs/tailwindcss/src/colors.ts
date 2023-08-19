import type { Config } from "tailwindcss"

export default {
  content: [],

  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: { DEFAULT: colors.purple[500], foreground: colors.purple[300] },
      }),
    },
  },
} satisfies Config
