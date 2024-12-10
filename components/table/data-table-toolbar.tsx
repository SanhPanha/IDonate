"use client"

import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/table/data-table-view-options"
import transactions from "@/data/transactions.json";
// import { priorities, statuses } from "@/data/data"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { CalendarDateRangePicker } from "./date-range-picker"
import { useState } from "react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
  const [resetSignal, setResetSignal] = useState(0);
  // Map transactions to filter options
  const eventOptions = Array.from(
    new Set(transactions.map((transaction) => transaction.event))
  ).map((event) => ({
    label: event, // Display name
    value: event, // Value used for filtering
  }))

  const amountOptions = Array.from(
    new Set(transactions.map((transaction) => transaction.amount))
  ).map((amount) => ({
    label: amount, // Display name
    value: amount, // Value used for filtering
  }))


  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">

        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("donor")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("donor")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {/* Filter */}
        {/* {table.getColumn("event") && (
          <DataTableFacetedFilter
            column={table.getColumn("event")}
            title="Events"
            options={"events"}
          />
        )} */}

        {/* {table.getColumn("amount") && (
          <DataTableFacetedFilter
            column={table.getColumn("amount")}
            title="Amount Range"
            options={"amounts"}
          />
        )} */}

      {table.getColumn("event") && (
        <DataTableFacetedFilter
          column={table.getColumn("event")}
          title="Events"
          options={eventOptions} // Pass event options
        />
      )}

      {/* Amount Range Filter */}
      {table.getColumn("amount") && (
        <DataTableFacetedFilter
          column={table.getColumn("amount")}
          title="Amount Range"
          options={amountOptions} // Pass amount range options
        />
      )}

        {table.getColumn("date") && (
          <CalendarDateRangePicker 
            column={table.getColumn("date")} 
            resetSignal={resetSignal}
          />
        )}

        {isFiltered && (
      <Button
        variant="ghost"
        onClick={() => {
          table.resetColumnFilters();
          setResetSignal((prev) => prev + 1); // Increment reset signal
        }}
        className="h-8 px-2 lg:px-3"
      >
        Reset
        <X />
      </Button>
        )}

      </div>

        <DataTableViewOptions table={table} />
      
    </div>
  )
}
