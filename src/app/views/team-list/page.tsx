import { usePowerSync, useStatus } from '@powersync/react';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  styled
} from '@mui/material';
import Fab from '@mui/material/Fab';
import React, { useEffect } from 'react';

import { useSupabase } from '../../../components/providers/SystemProvider';
import { LISTS_TABLE } from '../../../library/powersync/AppSchema';
import { NavigationPage } from '../../../components/navigation/NavigationPage';
import { TodoListsWidget } from '../../../components/widgets/TodoListsWidget';

async function login() {
  const supabase = useSupabase();


  await supabase?.login(import.meta.env.VITE_SUPABASE_EMAIL, import.meta.env.VITE_SUPABASE_PASSWORD);

}

export default function TodoListsPage() {

  login();
  const powerSync = usePowerSync();
  const supabase = useSupabase();
  const status = useStatus();


  // console.log("status: " + status)
  // console.log(status)

  // console.log(powerSync)
  // console.log(supabase)

  const [showPrompt, setShowPrompt] = React.useState(false);
  const nameInputRef = React.createRef<HTMLInputElement>();

  const createNewList = async (name: string) => {
    const session = await supabase?.client.auth.getSession();
    // console.log("session: " + JSON.stringify(session))
    const userID = session?.data.session?.user?.id;
    if (!userID) {
      throw new Error(`Could not create new lists, no userID found`);
    }

    const res = await powerSync.execute(
      `INSERT INTO ${LISTS_TABLE} (id, created_at, name, owner_id) VALUES (uuid(), datetime(), ?, ?) RETURNING *`,
      [name, userID]
    );

    const resultRecord = res.rows?.item(0);
    if (!resultRecord) {
      throw new Error('Could not create list');
    }
  };

  return (
    <NavigationPage title="Team List">
      
    </NavigationPage>
  );
}