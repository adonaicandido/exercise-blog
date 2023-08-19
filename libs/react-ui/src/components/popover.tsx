"use client"

import { Content, Portal, Root, Trigger } from "@radix-ui/react-popover"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const Popover = Root

const PopoverTrigger = Trigger

const PopoverContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => {
  return (
    <Portal>
      <Content
        className={cn(
          "z-50 w-72 rounded-md border border-slate-200 bg-white p-16 text-slate-950 shadow-md outline-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className,
        )}
        align={align}
        sideOffset={sideOffset}
        ref={ref}
        {...props}
      />
    </Portal>
  )
})
PopoverContent.displayName = Content.displayName

export { Popover, PopoverContent, PopoverTrigger }
