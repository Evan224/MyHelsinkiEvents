import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import MoreInfoDrawer from './MoreInfoDrawer';
import Button from '@mui/material/Button';
import CreateForm from '@/components/CreateEventForm/CreateForm';

interface MoreInfoDrawerProps {
    title: string
    founder: string
    founderDescription: string
    duration: string
    location: string
    image: string
    // Date: any
    description: string
    picture: string
    tags: any[]
}

export default function MoreInfoCard(props: MoreInfoDrawerProps) {
    const [state, setState] = useState(false);

    return (
        <>
         <div className="flex h-10 self-end m-4">
         <Button variant="contained" color="primary" className="w-2/5" onClick={()=>setState(true)}>
            More </Button>
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