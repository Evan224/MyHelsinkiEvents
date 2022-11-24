import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MoreInfoDrawer from './MoreInfoDrawer';
import Button from '@mui/material/Button';
import CreateForm from '@/components/CreateEventForm/CreateForm';

// interface MoreInfoDrawerProps {
//     title: string
//     founder: string
//     founderDescription: string
//     duration: string
//     location: string
//     image: string
//     // Date: any
//     description: string
//     picture: string
//     tags: any[]
// }

export default function MoreInfoCard(props) {
    const [state, setState] = useState(false);
    const handleCallback = () => {
        setState(false);
    };

    const {event}=props;
    const EditProps={
        ifCreate:false,
        name: event.name,
        location: event.location,
        description: event.description,
        id: event.id,
    }
    return (
        <>
         <div className="flex h-10 self-end m-4">
         <Button variant="contained" color="primary" className="w-2/5" onClick={()=>setState(true)}>
            Edit </Button>
         </div>
        <Drawer
            anchor="right"
            open={state}
            onClose={() => {setState(false)}}
            sx={{
                width: '50%',
            }}
        >
            <CreateForm {...EditProps} handleCallback={handleCallback}/>
        </Drawer>
        </>
        )
}