import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function LoadMore (): JSX.Element {
  const navigate = useNavigate()
  return (
          <div className='flex justify-center w-4/5 mx-auto text-cyan-800 h-[10vh] p-6 '>
            <Button size="large" variant="contained" sx={{
              padding: '1rem',
            }} onClick={()=>{
              navigate('/eventlist')
            }}>Load More ...</Button>
          </div>
  )
}
