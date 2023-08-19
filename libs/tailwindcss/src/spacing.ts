import type { Config } from "tailwindcss"

export default {
  content: [],

  theme: {
    extend: {
      spacing: {
        0: "0",
        1: "1px",
        4: ".25rem",
        6: ".375rem",
        8: ".5rem",
        12: ".75rem",
        16: "1rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        48: "3rem",
        56: "3.5rem",
        64: "4rem",
        144: "9rem",
      },
    },
  },
} satisfies Config
