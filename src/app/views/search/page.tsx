import { NavigationPage } from '../../../components/navigation/NavigationPage';
import { Combobox } from '@/components/ui/combobox';
import { DataTable } from '@/components/ui/table-datatable';
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
    return (
        <NavigationPage title="Team Search">
            <div className='h-full bg-zinc-950 text-zinc-50 px-5'>
                <div className="flex w-full justify-between h-10 items-center mt-4">
                    <h1 className='text-xl font-semibold'>Team Stats</h1>
                    <Combobox />
                </div>

                <div className='grid grid-cols-1'>
          <DataTable>
                        
          </DataTable>
        </div>

            </div>
        </NavigationPage>


    );
  }