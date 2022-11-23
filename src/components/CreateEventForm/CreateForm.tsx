import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useReducer } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useState } from 'react';
import ImageUploader from './ImageUploader';
import TagBar from '../TagBar';
import Button from '@mui/material/Button';
import { createEvent } from '@/utils/http/eventRequest';

// Date, duration, location, picture, description, title, tags, FounderName, FounderDescription
export default function CreateForm() {
    const [startValue, setValue] = useState<Dayjs | null>(null)
    const [endValue, setEndValue] = useState<Dayjs | null>(null)
    const [tags, setTags] = useState([]);

    const getTagFeedback=(tags: string[])=>{
        setTags(tags)
    }

    const handleSubmit=async (event)=>{
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        // console.log(firstnam)
        const name = data.get('name')?.toString()||""
        const location=data.get('location')?.toString()||""
        const description=data.get('description')?.toString()||""
        console.log(startValue?.toISOString() )
        //todo finish the request
        const payload={
            name,
            location,
            description,
        }

        const response = await createEvent(payload)
        
    }
    return(
        <Box className='fle flex-col' onSubmit={handleSubmit} component="form" noValidate>
            <div className='flex p-4 justify-between'>
              <TextField
                id="outlined-name"
                label="name"
                name="name"
                required
              />
             <TextField
                id="outlined-name"
                label="location"
                name="location"
                required
                />
            </div>
             {/* <div className='flex p-4 justify-between'>
                <TextField
                    id="outlined-name"
                    label="Duration"
                    InputProps={{
                        endAdornment:<InputAdornment position="end">h</InputAdornment>
                    }}
                    sx={{width: '50%'}}
                />
                <TextField
                    id="outlined-name"
                    label="Founder"
                />
            </div> */}

            
           
            <div className='flex flex-col p-4'>
            <LocalizationProvider dateAdapter={AdapterDayjs} className="my-2">
                    <DateTimePicker
                        label="start time"
                        value={startValue}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
               </LocalizationProvider>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                        label="end time"
                        value={endValue}
                        onChange={(newValue) => {
                        setEndValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
               </LocalizationProvider>
             <TextField
                id="outlined-name"
                label="description"
                name="description"
                multiline={true}
                rows={10}
                sx={{paddingY: '10px'}}
                required
            />
            </div>
             <TagBar callback={getTagFeedback} />
             <div className="w-1/2 p-4">
               <ImageUploader/>
             </div>
             <div className="p-4 flex flex-row-reverse">
                <Button variant="contained" color="primary" className="w-1/2 p-4" type="submit">Create</Button>
             </div>
        </Box>
    )
}