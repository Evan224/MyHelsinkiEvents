import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Button } from '@mui/material';

export default function CreateEventForm() {
    const [state, setState] = useState(false);

    return (
        <>
         <div className="flex justify-around mt-10">
         <Button variant="outlined" color="primary" className="w-2/5" onClick={()=>setState(true)}>
            Create Event</Button>
         </div>
        <Drawer
            anchor="right"
            open={state}
            onClose={() => {setState(false)}}
        >
            <div>
                <h1>hello</h1>
            </div>
        </Drawer>
        </>
        )
}