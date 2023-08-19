"use client"

import { Root } from "@radix-ui/react-separator"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

export const Separator = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <Root
    className={cn(
      "bg-border shrink-0",
      orientation === "horizontal" ? "h-1 w-full" : "h-full w-1",
      className,
    )}
    decorative={decorative}
    orientation={orientation}
    ref={ref}
    {...props}
  />
))
Separator.displayName = "Separator"
