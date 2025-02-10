import { NavigationPage } from '../../../components/navigation/NavigationPage';
import {   
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Combobox } from '@/components/ui/combobox';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import { LineChartCard } from '@/components/ui/line-chart';
import { BarChartCard } from '@/components/ui/bar-chart';

const matches = [
  {
    match: 1,
    pointsScored: 76,
  },
  {
    match: 2,
    pointsScored: 76,
  },
  {
    match: 3,
    pointsScored: 76,
  }
]

export default function StatsPage() {
  return (
    <NavigationPage title="Team Stats">
      <div className='h-full bg-zinc-950 text-zinc-50 px-5'>
        <div className="flex w-full justify-between h-10 items-center mt-4">
          <h1 className='text-xl font-semibold'>Team Stats</h1>
          <Combobox />
        </div>
        <Tabs defaultValue='Overview' className='h-14 py-4'>
          <TabsList className="grid grid-cols-4">
            <TabsTrigger value='Overview'>Overview</TabsTrigger>
            <TabsTrigger value='Auto'>Auto</TabsTrigger>
            <TabsTrigger value='Teleop'>Teleop</TabsTrigger>
            <TabsTrigger value='Endgame'>Endgame</TabsTrigger>
          </TabsList>
          <TabsContent value='Overview'>
            <section className="flex flex-col gap-8">
              <div className='flex flex-col gap-4 w-full mt-4'>
                <h2 className='items-start text-2xl font-semibold'>Points Added</h2>
                <LineChartCard/>
              </div>
              <div className='flex flex-col w-full items-center gap-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Average points added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Avg auto coral</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>76</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Avg teleop coral</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>76</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Average algae scored</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Times played Defense</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Total Breakdowns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
              </div>
              <div className='flex flex-col w-full gap-y-2'>
                <h2 className='items-start text-xl font-semibold'>Comments</h2>
                {/* Map that goes through all of the comments written on a given team and creates a card */}
                <Card className='w-full border-zinc-700 bg-accent'>
                  <CardHeader>
                    <CardTitle>Scouter Initials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-xl'>This is a comment</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Scouter Initials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-xl'>76</p>
                  </CardContent>
                </Card>
              </div>
              <div className='flex flex-col w-full mb-12'>
                <h2 className='items-start text-xl font-semibold'>Matches</h2>
                <Table>
                  <TableCaption>A list of recent matches.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Match Number</TableHead>
                      <TableHead>Points Scored</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {matches.map((match) => (
                      <TableRow key={match.match}>
                        <TableCell>{match.match}</TableCell>
                        <TableCell>{match.pointsScored}</TableCell>
                        <TableCell>
                          <Button>View Match</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </section>
          </TabsContent>
          <TabsContent value='Auto'>
            <section className="flex flex-col gap-8">
              <div className='flex flex-col gap-4 w-full mt-4'>
                <h2 className='items-start text-2xl font-semibold'>Auto Start Location</h2>
                <BarChartCard />
              </div>
              <div className='flex flex-col gap-4 w-full mt-4'>
                <h2 className='items-start text-2xl font-semibold'>Auto Points</h2>
                <LineChartCard/>
              </div>
              <div className='flex flex-col w-full items-center gap-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Average Auto points added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Best Auto points added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Percent Crossed Start Line</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>100%</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Coral Station</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Pre Placed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L4</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>3</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Coral Missed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Barge</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>3</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Processor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4 mb-12'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Algae Missed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Algae off Reef</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </TabsContent>
          <TabsContent value='Teleop'>
          <section className="flex flex-col gap-8">
              <div className='flex flex-col gap-4 w-full mt-4'>
                <h2 className='items-start text-2xl font-semibold'>Teleop Points</h2>
                <LineChartCard/>
              </div>
              <div className='flex flex-col w-full items-center gap-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Average Teleop points added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Best Teleop points added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Coral Station</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Pre Placed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L4</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>3</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Average L1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Coral Missed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>76</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Barge</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>3</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Processor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <div className='flex w-full gap-x-4'>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Algae off Floor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>2</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                  <Card className='w-full border-zinc-700'>
                    <CardHeader>
                      <CardTitle>Total Algae off Reef</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-4xl font-bold'>1</p>
                      <p className='text-zinc-400'>+20.1% from last event</p>
                    </CardContent>
                  </Card>
                </div>
                <Card className='w-full border-zinc-700 mb-12'>
                  <CardHeader>
                    <CardTitle>Total Algae Missed</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>2</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
          <TabsContent value='Endgame'>
            <section className="flex flex-col gap-8">
              <div className='flex w-full gap-x-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Shallow Attempts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>2</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Shallow Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>1</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
              </div>
              <div className='flex w-full gap-x-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Deep Attempts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>3</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Deep Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>1</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
              </div>
              <div className='flex w-full gap-x-4'>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Park Attempts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>2</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
                <Card className='w-full border-zinc-700'>
                  <CardHeader>
                    <CardTitle>Park Success</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-4xl font-bold'>1</p>
                    <p className='text-zinc-400'>+20.1% from last event</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>
    </NavigationPage>
  );
}