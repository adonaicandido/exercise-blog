"use client"

import { CaretUpDown as CaretUpDownIcon, Check as CheckIcon } from "@phosphor-icons/react"
import {
  Content,
  Group,
  Icon,
  Item,
  ItemIndicator,
  ItemText,
  Label,
  Portal,
  Root,
  Separator,
  Trigger,
  Value,
  Viewport,
} from "@radix-ui/react-select"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const Select = Root

const SelectGroup = Group

const SelectValue = Value

const SelectTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <Trigger
      className={cn(
        "border-input ring-offset-background placeholder:text-muted-foreground focus:ring-ring flex h-40 w-full items-center justify-between rounded-md border bg-transparent px-12 py-8 text-14 shadow-sm focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <Icon asChild>
        <CaretUpDownIcon className="h-16 w-16 opacity-50" />
      </Icon>
    </Trigger>
  )
})
SelectTrigger.displayName = Trigger.displayName

const SelectContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, position = "popper", ...props }, ref) => {
  return (
    <Portal>
      <Content
        className={cn(
          "text-popover-foreground relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className,
        )}
        position={position}
        ref={ref}
        {...props}
      >
        <Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
          )}
        >
          {children}
        </Viewport>
      </Content>
    </Portal>
  )
})
SelectContent.displayName = Content.displayName

const SelectLabel = forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
  return <Label ref={ref} className={cn("px-8 py-6 text-14 font-semibold", className)} {...props} />
})
SelectLabel.displayName = Label.displayName

const SelectItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => {
  return (
    <Item
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-6 pl-8 pr-32 text-14 outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    >
      <span className="absolute right-8 flex h-3.5 w-3.5 items-center justify-center">
        <ItemIndicator>
          <CheckIcon className="h-16 w-16" />
        </ItemIndicator>
      </span>
      <ItemText>{children}</ItemText>
    </Item>
  )
})
SelectItem.displayName = Item.displayName

const SelectSeparator = forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => {
  return <Separator className={cn("bg-muted -mx-1 my-1 h-px", className)} ref={ref} {...props} />
})
SelectSeparator.displayName = Separator.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
