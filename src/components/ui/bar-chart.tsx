"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { position: 1, numStart: 5 },
    { position: 2, numStart: 2 },
    { position: 3, numStart: 3 },
    { position: 4, numStart: 0 },
    { position: 5, numStart: 3 },
    { position: 6, numStart: 4 },
]

const chartConfig = {
    numStart: {
        label: "numStart",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function BarChartCard() {
    return (
        <Card className="border-zinc-700">
        <CardContent>
            <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                dataKey="position"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value}
                />
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="numStart" fill="var(--color-numStart)" radius={8} />
            </BarChart>
            </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="leading-none text-muted-foreground">
            Showing total starts per starting position
            </div>
        </CardFooter>
        </Card>
    )
}
