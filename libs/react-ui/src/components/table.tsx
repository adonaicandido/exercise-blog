import { forwardRef } from "react"

import { cn } from "../utilities/misc"

const Table = forwardRef<HTMLTableElement, React.ComponentPropsWithoutRef<"table">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="w-full overflow-auto">
        <table ref={ref} className={cn("w-full text-14", className)} {...props} />
      </div>
    )
  },
)
Table.displayName = "Table"

const TableHeader = forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<"thead">>(
  ({ className, ...props }, ref) => {
    return <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
  },
)
TableHeader.displayName = "TableHeader"

const TableBody = forwardRef<HTMLTableSectionElement, React.ComponentPropsWithoutRef<"tbody">>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  },
)
TableBody.displayName = "TableBody"

const TableRow = forwardRef<HTMLTableRowElement, React.ComponentPropsWithoutRef<"tr">>(
  ({ className, ...props }, ref) => {
    return (
      <tr
        className={cn("hover:bg-muted/50 border-b transition-colors", className)}
        ref={ref}
        {...props}
      />
    )
  },
)
TableRow.displayName = "TableRow"

const TableHead = forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<"th">>(
  ({ className, ...props }, ref) => {
    return (
      <th
        className={cn(
          "text-muted-foreground h-40 px-8 text-left align-middle font-medium",
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
TableHead.displayName = "TableHead"

const TableCell = forwardRef<HTMLTableCellElement, React.ComponentPropsWithoutRef<"td">>(
  ({ className, ...props }, ref) => {
    return <td className={cn("p-8 align-middle", className)} ref={ref} {...props} />
  },
)
TableCell.displayName = "TableCell"

export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow }
