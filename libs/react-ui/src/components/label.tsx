"use client"

import { forwardRef } from "react"

import { cn } from "../utilities/misc"

export type LabelProps = React.ComponentPropsWithoutRef<"label">

export const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return (
    <label
      className={cn(
        "text-14 font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = "Label"
