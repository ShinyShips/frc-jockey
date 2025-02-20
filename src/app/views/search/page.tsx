import { useEffect, useState } from 'react';
import { usePowerSync, useStatus } from '@powersync/react';
import { NavigationPage } from '../../../components/navigation/NavigationPage';
import { Combobox } from '@/components/ui/combobox';
import { DataTable, teams } from '@/components/ui/table-datatable';
// import {
//     Table,
//     TableBody,
//     TableCaption,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table"

//   import { Button } from '@/components/ui/button';

  // const matches = [
  //   {
  //     match: 1,
  //     pointsScored: 76,
  //   },
  //   {
  //     match: 2,
  //     pointsScored: 76,
  //   },
  //   {
  //     match: 3,
  //     pointsScored: 76,
  //   }
  // ]

export default function SearchPage() {
    const powersync = usePowerSync();
    const status = useStatus();
    const [teams, setTeams] = useState<teams[]>();

    const getSelectTeams = async () => {
        const res = await powersync.execute(
        `
            SELECT distinct select_team
            FROM scouting_data
        ` 
        );
        console.log(res)
        return res;
    }
    console.log(status)
    console.log(getSelectTeams())

    useEffect(() => {
        const fetchTeams = async () => {
            const data = await getSelectTeams();
            const transformedData = data.rows?._array.map((team: { select_team: number }) => ({
                id:"3u1reuv4",
                teamNumber: team.select_team.toString(),
                pointsAdded: 50,
                autoPoints: 50,
                teleopPoints: 50,
            }));
            setTeams(transformedData);
        };

        fetchTeams();
    }, []);

    return (
        <NavigationPage title="Team Search">
            <div className='h-full bg-zinc-950 text-zinc-50 px-5'>
                <div className="flex w-full justify-between h-10 items-center mt-4">
                    <h1 className='text-xl font-semibold'>Team Stats</h1>
                    <Combobox />
                </div>
                <div className='grid grid-cols-1'>
                    {teams !== undefined ? <DataTable teams={teams} /> : <p>Loading...</p>}
                </div>
            </div>
        </NavigationPage>
    );
}