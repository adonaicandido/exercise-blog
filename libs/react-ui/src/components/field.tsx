import React from "react"

import { cn } from "../utilities/misc"

type FieldProps = React.ComponentPropsWithoutRef<"div"> & { error?: boolean; message?: string }

export function Field({ className, children, error, message, ...props }: FieldProps) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
      {message && <p className={cn("text-14", error && "text-red-400")}>{message}</p>}
    </div>
  )
}
