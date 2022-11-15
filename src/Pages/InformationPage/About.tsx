import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
export default function Hire (): JSX.Element {
  return (
        <div className="flex justify-center w-4/5 p-5 flex-col items-center
            min-h-[40vh] ">
              <Typography variant="h6" component="div" sx={{
                color: 'text.secondary'
              }} className="flex justify-center items-center" >
             About
            </Typography>
             <Typography variant="h3" component="div" className='p-5'>
                About Our Company
            </Typography>

            <div className='flex justify-between '>
            <Typography variant="h6" component="div" sx={{
              color: 'text.secondary',
              width: '45%'
            }}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehende
            </Typography>
            <Typography variant="h6" component="div" sx={{
              color: 'text.secondary',
              width: '45%'
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

            </Typography>
            </div>
        </div>
  )
}
