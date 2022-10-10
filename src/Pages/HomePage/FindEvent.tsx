import Button from '@mui/material/Button'

export default function FindEvent (): JSX.Element {
  return (
        <div className='flex flex-col mx-auto items-center text-cyan-800 justify-center
        bg-gradient-to-r from-cyan-100 to-blue-500 h-[20vh] w-full'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Find Events Near You</h1>
                <p> Are you interested in the upcoming vacation?</p>
                <div className="flex justify-around mt-10">
                    <Button variant="contained" color="primary" className="w-2/5 ">
                        Log In</Button>
                    <Button variant="outlined" color="primary" className="w-2/5">
                        Sign Up</Button>
                </div>
            </div>
        </div>
  )
}
