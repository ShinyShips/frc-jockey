"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const events = [
    {
        value: "2025mefal",
        label: "Southern Maine",
    },
    {
        value: "2025njrob",
        label: "Robbinsville",
    },
    {
        value: "2025pawar",
        label: "Centennial",
    },
    {
        value: "2025mrcmp",
        label: "Mid-Atlantic District Championship",
    },
]

export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-fit h-10 justify-between"
            >
            {value
                ? events.find((event) => event.value === value)?.label
                : "Select event..."}
            <ChevronsUpDown className="opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
            <Command>
            <CommandInput placeholder="Search event..."/>
            <CommandList>
                <CommandEmpty>No event found.</CommandEmpty>
                <CommandGroup>
                {events.map((event) => (
                    <CommandItem
                    key={event.value}
                    value={event.value}
                    onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                    }}
                    >
                    {event.label}
                    <Check
                        className={cn(
                        "ml-auto",
                        value === event.value ? "opacity-100" : "opacity-0"
                        )}
                    />
                    </CommandItem>
                ))}
                </CommandGroup>
            </CommandList>
            </Command>
        </PopoverContent>
        </Popover>
    )
}
