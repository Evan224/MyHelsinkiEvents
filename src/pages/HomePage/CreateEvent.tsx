import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function CreateEvent (): JSX.Element {
    const navigate = useNavigate()

  return (
        <div className='flex flex-col mx-auto items-center text-cyan-800 justify-center items-center
         bg-cyan-100 min-h-[20vh] w-full p-20'>
            <div >
                <h1 className='text-4xl font-bold text-center p-5'>Want to hold an event?</h1>
                <div className="text-4xl font-bold text-center "> Come and Post an event in 1 Minutes</div>
                <div className="flex justify-around mt-10">
                    <Button variant="outlined" color="primary" className="w-2/5" onClick={()=>{
                        navigate('/managepage')
                    }}>
                        Create Event</Button>
                </div>
            </div>
        </div>
  )
}
