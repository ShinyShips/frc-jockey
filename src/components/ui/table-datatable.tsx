"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
//points added
//auto points
//teleop points
// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   {
//     id: "m5gr84i9",
//     teamNumber: "3314",
//     pointsAdded: 100,
//     autoPoints: 50,
//     teleopPoints: 15,
//   },
//   {
//     id: "3u1reuv4",
//     teamNumber: "1234",
//     pointsAdded: 10,
//     autoPoints: 2,
//     teleopPoints: 8,
//   },
//   {
//     id: "derv1ws0",
//     teamNumber: "5678",
//     pointsAdded: 25,
//     autoPoints: 10,
//     teleopPoints: 15,
//   },
//   // {
//   //   amount: 837,
//   //   teamNumber: "5678",
//   //   email: "Monserrat44@gmail.com",
//   // },
//   // {
//   //   id: "5kma53ae",
//   //   amount: 874,
//   //   teamNumber: "9012",
//   //   email: "Silas22@gmail.com",
//   // },
//   // {
//   //   id: "bhqecj4p",
//   //   amount: 721,
//   //   teamNumber: "9999",
//   //   email: "carmella@hotmail.com",
//   // },
// ]

export type teams = {
  id: string
  teamNumber: string
  pointsAdded: number
  autoPoints: number
  teleopPoints: number
}

export const columns: ColumnDef<teams>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     // <Checkbox
  //     //   checked={
  //     //     table.getIsAllPageRowsSelected() ||
  //     //     (table.getIsSomePageRowsSelected() && "indeterminate")
  //     //   }
  //     //   onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //     //   aria-label="Select all"
  //     // />
  //     <p></p>
  //   ),
  //   cell: ({ row }) => (
  //     // <Checkbox
  //     //   checked={row.getIsSelected()}
  //     //   onCheckedChange={(value) => row.toggleSelected(!!value)}
  //     //   aria-label="Select row"
  //     // />
  //     <p></p>

  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "teamNumber",
    // header: "Team Number",
    enableHiding: false,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="bg-transparent px-0"
        >
          <p className="text-wrap text-white" >Team Number</p>
          <ArrowUpDown className="text-white" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize" >{row.getValue("teamNumber")}</div>
    ),
  },
  {
    accessorKey: "pointsAdded",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="bg-transparent px-0"
        >
          <p className="text-wrap text-white" >Points Added</p>
          <ArrowUpDown className="text-white" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("pointsAdded")}</div>,
  },
  {
    accessorKey: "autoPoints",
    // header: () => <div className="text-right">Auto Points</div>,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="bg-transparent px-0"
        >
          <p className="text-wrap text-white" >Auto Points</p>
          <ArrowUpDown className="text-white" />
        </Button>
      )
    },
    cell: ({ row }) => {

      return <div className="text-left font-medium">{row.getValue("autoPoints")}</div>
    },
  },
  {
    accessorKey: "teleopPoints",
    header: ({ column }) => {
      return (
        <Button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="bg-transparent px-0"
        >
          <p className="text-wrap text-white" >Teleop Points</p>
          <ArrowUpDown className="text-white" />
        </Button>
      )
    },    cell: ({ row }) => {


      return <div className="text-left font-medium">{row.getValue("teleopPoints")}</div>
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original
  //     //actions to put
  //     //view team
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     )
  //   },
  // },
]

export function DataTable(data: {teams: any}) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const { teams } = data

  const table = useReactTable({
    data: teams,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter teams..."
          value={(table.getColumn("teamNumber")?.getFilterValue() as string) ?? ""}
          onChange={(event) => 
            table.getColumn("teamNumber")?.setFilterValue(event.target.value) 
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border border-zinc-700">
        <Table>
          <TableHeader >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-zinc-700"> 
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-zinc-700"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} align="left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {/* {table.getFilteredSelectedRowModel().rows.length} of{" "} */}
          {/* {table.getFilteredRowModel().rows.length} row(s) selected. */}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
