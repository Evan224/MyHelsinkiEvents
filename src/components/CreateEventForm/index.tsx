import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import CreateForm from './CreateForm';
import Button from '@mui/material/Button';

export default function CreateEventForm() {
    const [state, setState] = useState(false);

    return (
        <>
         <div className="flex my-10">
         <Button variant="outlined" color="primary" className="w-2/5" onClick={()=>setState(true)}>
            Create New Event</Button>
         </div>
        <Drawer
            anchor="right"
            open={state}
            onClose={() => {setState(false)}}
            sx={{
                width: '50%',
            }}
        >
              <CreateForm />
        </Drawer>
        </>
        )
}