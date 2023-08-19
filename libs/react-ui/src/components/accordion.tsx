"use client"

import { CaretDown } from "@phosphor-icons/react"
import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion"
import { cx } from "class-variance-authority"
import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const Accordion = Root

const AccordionItem = forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => {
  return <Item ref={ref} className={cn("border-b", className)} {...props} />
})
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => {
  const styles = {
    trigger: cx(
      "flex flex-1 items-center justify-between py-16 text-left text-14 font-medium transition-all hover:underline",
    ),
    icon: cx(
      "h-16 w-16 shrink-0 text-slate-500 transition-transform duration-200 group-data-open:rotate-180",
    ),
  }

  return (
    <Header className="group flex">
      <Trigger className={cn(styles.trigger, className)} ref={ref} {...props}>
        {children}
        <CaretDown className={styles.icon} />
      </Trigger>
    </Header>
  )
})
AccordionTrigger.displayName = Trigger.displayName

const AccordionContent = forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => {
  const styles = {
    root: cx(
      "overflow-hidden text-14 data-open:animate-accordion-down data-closed:animate-accordion-up",
    ),
    container: cx("pb-16 pt-0"),
  }

  return (
    <Content ref={ref} className={cn(styles.root, className)} {...props}>
      <div className={styles.container}>{children}</div>
    </Content>
  )
})
AccordionContent.displayName = Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
