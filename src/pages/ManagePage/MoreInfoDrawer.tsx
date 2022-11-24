import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useReducer } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardMedia from '@mui/material/CardMedia';

interface MoreInfoDrawerProps {
    title: string
    founder: string
    founderDescription: string
    duration: string
    Location: string
    image: string
    // Date: any
    description: string
    picture: string
    tags: any[]
}
// Date, duration, location, picture, description, title, tags, FounderName, FounderDescription
export default function MoreInfoDrawer(props: MoreInfoDrawerProps) {
    const {title, founder, founderDescription, duration, Location:location, description, picture, tags} = props
  const [value, setValue] = useState<Dayjs | null>(null)

    return(
        <div className='fle flex-col '>
            <div className="overflow-hidden w-[400px] flex justify-center items-center">

            <CardMedia
                component="img"
                sx={{
                    width: '100%',
                    padding: '1rem',
                    alignSelf: 'center'
                }}
                image={picture}
                alt="Not Found"
                 />
            </div>
            
            <div className="p-4">
                {tags.map((tag) => {
                    return <Chip label={tag.Name} />
                })}
            </div>
            <div className='flex p-4 justify-between'>
              <TextField
                id="outlined-name"
                label="title"
                value={title}
                disabled
              />
             <TextField
                id="outlined-name"
                label="location"
                value={location}
                disabled
                />
            </div>
             <div className='flex p-4 justify-between'>
                <TextField
                    id="outlined-name"
                    label="Duration"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">h</InputAdornment>
                    }}
                    sx={{width: '50%'}}
                    value={duration}
                    disabled
                />
                <TextField
                    id="outlined-name"
                    label="Founder"
                    value={founder}
                    disabled
                />
            </div>

            
           
            <div className='flex flex-col p-4'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Search by date"
                        value={value}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
               </LocalizationProvider>
            <TextField
                id="outlined-name"
                label="founder details"
                multiline={true}
                rows={4}
                sx={{paddingY: '10px'}}
                value={founderDescription}
                disabled
            />
             
             <TextField
                id="outlined-name"
                label="Description"
                multiline={true}
                rows={10}
                sx={{paddingY: '10px'}}
                value={description}
                disabled
            />
            </div>
             <div className="p-4 flex flex-row-reverse">
                <Button variant="contained" color="primary" className="w-1/2 p-4">Delete</Button>
             </div>
        </div>
    )
}