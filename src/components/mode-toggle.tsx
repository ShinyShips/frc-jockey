import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-12 w-12">
                <Sun className="h-10 w-10 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-10 w-10 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
                System
            </DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}