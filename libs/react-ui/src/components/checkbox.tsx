"use client"

import { Check as CheckIcon } from "@phosphor-icons/react"
import { Indicator, Root } from "@radix-ui/react-checkbox"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

export const Checkbox = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      className={cn(
        "peer h-16 w-16 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary data-checked:text-primary-foreground",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Indicator className={cn("flex items-center justify-center text-current")}>
        <CheckIcon className="h-16 w-16" weight="bold" />
      </Indicator>
    </Root>
  )
})
Checkbox.displayName = "Checkbox"
