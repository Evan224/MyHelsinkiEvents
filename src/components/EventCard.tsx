import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { height } from '@mui/system'
import { getStandardDate,getMonthShortName } from '@/utils'


export default function EventCard (props: Event.IEvent): JSX.Element {
  const navigate = useNavigate()
  const {startTime, endTime, name, description,thumbnailUrl, id,location} = props
  const date=getStandardDate(startTime)
  const {
    year,
    month,
    day,
    hour,
  } = date
  return (
    <div className='w-1/3'>
    <Card sx={{
      borderRadius: '5%',
      width: '90%',
      marginRight: '1.5rem',
      marginY: '1rem',
    }}>
      <CardMedia
        component="img"
        sx={{
          height: '10rem',
          objectFit: 'cover'
        }}
        image={thumbnailUrl}
        alt="Not Found"
      />
      <CardContent className='flex flex-col hover:bg-gray-100' sx={{
        height: '10rem',
        padding: '1rem'
      }} onClick={e => { navigate('/eventdetail',{
        state:props.id,
      }) }}>
        <div className='flex justify-between'>
          <Typography gutterBottom variant="h6" component="div">
            {name}
          </Typography>
          <div className='flex flex-col'>
          <Typography gutterBottom variant="body1" component="div">
            {getMonthShortName(Number(month))} 
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {day}
          </Typography>
          </div>
        </div>
        <Typography gutterBottom variant="body2" component="div" sx={{
          height: '3rem',
        }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}
