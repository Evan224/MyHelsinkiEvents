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
import { createEvent,editEvent} from '@/utils/http/eventRequest';
import SimpleBackdrop from '../SimpleBackdrop';
import messageService from '../Message';
import { imageUpload } from '@/utils/http/meRequest'

// Date, duration, location, picture, description, title, tags, FounderName, FounderDescription
export default function CreateForm(props:any) {
    const {handleCallback,ifCreate=true} = props;
    const [startValue, setValue] = useState<Dayjs | null>(null)
    const [endValue, setEndValue] = useState<Dayjs | null>(null)
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState(props.name||"");
    const [description, setDescription] = useState(props.description||"");
    const [location, setLocation] = useState(props.location||"");
    const [formData, setFormData] = useState("");

    const getTagFeedback=(tags:any)=>{
        console.log(tags,"tags")
        setTags(tags)
    }

    const handleSubmit=async (event:any)=>{
        event.preventDefault()
        console.log("submit",name,description,location,startValue,endValue,tags,formData)
        setLoading(true)
        const responseUrl=await imageUpload(formData);
        
        console.log(startValue?.toISOString() )
        const payload={
            name,
            location,
            description,
            startTime:startValue?.toISOString(),
            endTime:endValue?.toISOString(),
            Tags:tags,
            thumbnailUrl:responseUrl,
        }

        if(ifCreate){
            try{
                const response = await createEvent(payload)
                if(response.status===200){
                    messageService.success({
                        content:"Create event successfully",
                        duration:2000
                })}
            }catch(e){
                messageService.error({
                    content:"Create event failed!",
                    duration:2000
                })
            }
        }else{
            try{
                const response=await editEvent({
                    eventId:props.id,
                    data:payload
                })
                if(response.status===200){
                    messageService.success({
                        content:"Edit event successfully",
                        duration:2000
                })}
            }catch(e){
                messageService.error({
                    content:"Edit event failed!",
                    duration:2000
                })
            }
        }
        setLoading(false)
        handleCallback()
    }

    const handleDelete=async (event:any)=>{
        event.preventDefault()
        // delete event
    }

    return(
        <Box className='fle flex-col' onSubmit={handleSubmit} component="form" noValidate>
            <SimpleBackdrop open={loading} />
            <div className='flex p-4 justify-between'>
              <TextField
                id="outlined-name"
                label="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
             <TextField
                id="outlined-name"
                label="location"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                required
                />
            </div>    
           
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
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                multiline={true}
                rows={10}
                sx={{paddingY: '10px'}}
                required
            />
            </div>
             <TagBar callback={getTagFeedback} />
             <div className="w-1/2 p-4">
               <ImageUploader callback={(formData:any)=>{
                setFormData(formData)
               }}/>
             </div>
             <div className="p-4 flex flex-row-reverse justify-between">
                <Button variant="contained" color="primary" className="w-1/3 p-4" type="submit">
                   {ifCreate?"Create":"Save"}</Button>
                   {!ifCreate&&<Button variant="contained" color="primary" className="w-1/3 p-4" onClick={handleDelete} >
                   Delete</Button>}
             </div>
        </Box>
    )
}