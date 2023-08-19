import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const styles = cva(
  "inline-flex items-center justify-center rounded-md text-14 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-32 px-16 py-8",
        sm: "text-xs h-48 rounded-md px-12",
        lg: "h-56 rounded-md px-8",
      },

      variant: {
        default: "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90",
        destructive: "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-slate-200 bg-transparent shadow-sm hover:bg-slate-100 hover:text-slate-900",
        secondary: "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
        link: "text-slate-900 underline-offset-4 hover:underline",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return <Comp className={cn(styles({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

export { Button, styles as buttonStyles }
