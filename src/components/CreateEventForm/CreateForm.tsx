import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useReducer } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import { Dayjs } from 'dayjs'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react';
import ImageUploader from './ImageUploader';
import TagBar from '../TagBar';
import Button from '@mui/material/Button';

// Date, duration, location, picture, description, title, tags, FounderName, FounderDescription
export default function CreateForm() {
  const [value, setValue] = useState<Dayjs | null>(null)

    return(
        <div className='fle flex-col'>
            <div className='flex p-4 justify-between'>
              <TextField
                id="outlined-name"
                label="title"
              />
             <TextField
                id="outlined-name"
                label="location"
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
                />
                <TextField
                    id="outlined-name"
                    label="Founder"
                />
            </div>

            
           
            <div className='flex flex-col p-4'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Search by date"
                        value={value}
                        onChange={(newValue) => {

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
            />
             
             <TextField
                id="outlined-name"
                label="Description"
                multiline={true}
                rows={10}
                sx={{paddingY: '10px'}}
            />
            </div>
             <TagBar callback={()=>{console.log(1)}} />
             <div className="w-1/2 p-4">
               <ImageUploader/>
             </div>
             <div className="p-4 flex flex-row-reverse">
                <Button variant="contained" color="primary" className="w-1/2 p-4">Create</Button>
             </div>
        </div>
    )
}