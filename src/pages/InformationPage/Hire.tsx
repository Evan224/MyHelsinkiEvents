import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
export default function Hire (): JSX.Element {
  return (
        <div className="flex justify-center w-4/5 p-5 pt-20 flex-col items-center
            min-h-[40vh] ">
             <Typography variant="h3" component="div" className='p-5'>
                Build software with us!
            </Typography>
            <Typography variant="h6" component="div" sx={{
              color: 'text.secondary'
            }} className="flex justify-center items-center text-center" >
            Work hard with highly motivated team of talented people to launch
                perfectly crafted products we will love.
            </Typography>
            <Typography variant="h6" component="div" sx={{
              color: 'text.secondary'
            }} className="flex justify-center items-center" >
            
            </Typography>
            <Button variant="contained" color="primary" sx={{
              marginTop: '2rem'
            }}>
                Apply Now!
            </Button>
        </div>
  )
}
