import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
export default function FindEvent ({show}): JSX.Element {

  const navigate = useNavigate()
  return (
        <div className='flex flex-col mx-auto items-center text-cyan-800 justify-center
        bg-gradient-to-r from-cyan-100 to-blue-700 h-min-[30vh] w-full p-20'>
            <div>
                <h1 className='text-4xl font-bold text-center'>Find Events Near You</h1>
                <p> Are you interested in the upcoming vacation?</p>
                {show?<div className="flex justify-around mt-10">
                    <Button variant="contained" color="primary" className="w-2/5" onClick={() => { navigate('/loginpage') }}>
                        Log In </Button>
                    <Button variant="outlined" color="primary" className="w-2/5" onClick={() => { navigate('/loginpage',{
                        state:{
                            formState:'sign'
                        }
                    }) }}>
                        Sign Up</Button>
                </div>:null}
            </div>
        </div>
  )
}
