import type { Config } from "tailwindcss"

export default {
  content: [],

  theme: {
    extend: {
      data: {
        active: "state=active",
        inactive: "state=inactive",

        open: "state=open",
        closed: "state=closed",

        checked: "state=checked",
        unchecked: "state=unchecked",

        selected: "state=selected",
        unselected: "state=unselected",
      },
    },
  },
} satisfies Config
