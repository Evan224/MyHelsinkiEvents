import Button from '@mui/material/Button'


export default function CreateEvent (): JSX.Element {
  return (
        <div className='flex flex-col mx-auto items-center text-cyan-800 justify-center
         bg-cyan-100 min-h-[20vh] w-full p-4'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Want to hold an event?</h1>
                <p> Come and Post an event in 5 Minutes</p>
                <div className="flex justify-around mt-10">
                    <Button variant="outlined" color="primary" className="w-2/5">
                        Create Event</Button>
                </div>
            </div>
        </div>
  )
}
