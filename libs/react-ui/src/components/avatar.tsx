"use client"

import { Fallback, Image, Root } from "@radix-ui/react-avatar"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const Avatar = forwardRef<
  React.ElementRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => {
  return (
    <Root
      className={cn("relative flex shrink-0 overflow-hidden rounded-full", className)}
      ref={ref}
      {...props}
    />
  )
})
Avatar.displayName = Root.displayName

const AvatarImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image>
>(({ className, ...props }, ref) => {
  return <Image className={cn("aspect-square h-full w-full", className)} ref={ref} {...props} />
})
AvatarImage.displayName = Image.displayName

const AvatarFallback = forwardRef<
  React.ElementRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback>
>(({ className, ...props }, ref) => {
  return (
    <Fallback
      className={cn(
        "flex h-full w-full items-center justify-center rounded-full bg-slate-100",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
AvatarFallback.displayName = Fallback.displayName

export { Avatar, AvatarFallback, AvatarImage }
