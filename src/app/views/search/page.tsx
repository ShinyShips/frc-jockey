import { NavigationPage } from '../../../components/navigation/NavigationPage';
import { Combobox } from '@/components/ui/combobox';
import { DataTable } from '@/components/ui/table-datatable';
import { useQuery } from '@powersync/react';
import { ScoutingDataRecord } from '../../../library/powersync/AppSchema';
import { useSupabase } from '../../../components/providers/SystemProvider';
import { usePowerSync } from '@powersync/react';
import React from 'react'
import Logger from 'js-logger';


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

    // Log messages will be written to the window's console.
    Logger.useDefaults();

    Logger.setLevel(Logger.DEBUG);
    const powersync = usePowerSync();
    const supabase = useSupabase();

    const createNew = async() => {
      const session = await supabase?.client.auth.getSession();
      const userID = session?.data.session?.user?.id;
      if (!userID) {
        throw new Error(`Could not create new lists, no userID found`);
      }

      const res = await powersync.execute(
        `INSERT INTO scouting_data (
    user_id, match_number, alliance, scouter_initials, select_team, event, 
    start_poses0, start_poses1, start_poses2, start_poses3, start_poses4, start_poses5,
    auto_coral_place_l1_count, auto_coral_place_l2_count, auto_coral_place_l3_count, auto_coral_place_l4_count, auto_coral_place_drop_miss_count,
    auto_coral_pick_station_count, auto_coral_pick_mark1_count, auto_coral_pick_mark2_count, auto_coral_pick_mark3_count,
    auto_algae_place_net_shot, auto_algae_place_processor, auto_algae_place_drop_miss,
    auto_algae_pick_reef_count, auto_algae_pick_mark1_count, auto_algae_pick_mark2_count, auto_algae_pick_mark3_count,
    auto_passed_start_line, teleop_coral_place_l1_count, teleop_coral_place_l2_count, teleop_coral_place_l3_count, teleop_coral_place_l4_count,
    teleop_coral_place_drop_miss_count, teleop_coral_pick_station_count, teleop_coral_pick_carpet_count,
    teleop_algae_place_net_shot, teleop_algae_place_processor, teleop_algae_place_drop_miss,
    teleop_algae_pick_reef_count, teleop_algae_pick_carpet_count,
    shallow_climb_attempted, deep_climb_attempted, park_attempted, climb_failed,
    played_defense, broke_down, comment
) VALUES (
    '85d9f6bc-e2c4-4f2a-be7d-7de807563695', 2, 'red', 'AN', 1676, '2025njrob',
    FALSE, TRUE, FALSE, FALSE, FALSE, FALSE,
    5, 1, 0, 0, 1,
    1, 1, 0, 0,
    1, 0, 1,
    2, 0, 1, 0,
    TRUE, 3, 2, 1, 0,
    1, 1, 1,
    0, 1, 1,
    2, 1,
    TRUE, FALSE, TRUE, FALSE,
    TRUE, FALSE, 'Good test'
);`,
        [userID]
      );


      console.log("response: " + res)
      const resultRecord = res.rows?.item(0);
      if (!resultRecord) {
        throw new Error('Could not create list');
      }
    }



    const [hasSynced, setHasSynced] = React.useState(powersync.currentStatus?.hasSynced || false);

    React.useEffect(() => {
      // Register listener for changes made to the powersync status
      return powersync.registerListener({
        statusChanged: (status) => {
          setHasSynced(!!status.hasSynced);
          console.log("hassynced: " + status.hasSynced + " " +  hasSynced)
        }
      });
    }, [powersync]);

    // Tap into connected
    const [connected, setConnected] = React.useState(powersync.connected);

    React.useEffect(() => {
    // Register listener for changes made to the powersync status
      return powersync.registerListener({
        statusChanged: (status) => {
          setConnected(status.connected);
          console.log("powersync status: " + status.connected)
        }
      });
    }, [powersync]);


    const getSelectTeams = async () => {
      const res = await powersync.execute(
        `
        SELECT distinct select_team
        FROM scouting_data 
        `
      );

      return res;
    }

    console.log(getSelectTeams())

    const { data: selectTeamNumbers } = useQuery<Number>(`
          SELECT distinct select_team
          FROM scouting_data 
        `);
  
      console.log("teams: " + selectTeamNumbers)

      // const { data: scoutingData } = useQuery<ScoutingDataRecord>(`
      //   SELECT *
      //   FROM scouting_data 
      // `);

      const { data: scoutingData } = useQuery<ScoutingDataRecord>(`
        SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
      `);
    
      console.log("scouting data: " + scoutingData)


    return (
      
        <NavigationPage title="Team Search">
          {
            connected? <div></div>: <div></div>

          }
            <div className='h-full bg-zinc-950 text-zinc-50 px-5'>
                <div className="flex w-full justify-between h-10 items-center mt-4">
                    <h1 className='text-xl font-semibold'>Team Stats</h1>
                    <Combobox />


                </div>
                <form 
                  onSubmit={async (event) => {
                    event.preventDefault();
                    await createNew()
                  }}
                >
                  <input 
                    type="text" 
                    value={"button"} 
                    onChange={ () => console.log('hello')
                    } 
                    placeholder="Type something" 
                  />
                  <button type="submit">Submit</button>
                </form>
                <div className='grid grid-cols-1'>

                  
          <DataTable>
                        
          </DataTable>
        </div>

            </div>
        </NavigationPage>


    );
  }