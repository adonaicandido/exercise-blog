import type { Config } from "tailwindcss"

export default {
  content: [],

  theme: {
    extend: {
      maxWidth: {
        320: "20rem",
        512: "32rem",
      },
    },
  },
} satisfies Config
