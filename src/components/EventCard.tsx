import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import EventImage from '@/assets/img/party-event.jpg'


export default function EventCard (Props: EventCardProps): JSX.Element {
  const { picture = EventImage, title, date, description } = Props
  const { month, day } = date
  return (
    <Card sx={{
      borderRadius: '5%',
      width: '30%',
      height: 400,
      margin: '1rem'
    }}>
      <CardMedia
        component="img"
        sx={{
          height: '60%'
        }}
        image={picture}
        alt="Not Found"
      />
      <CardContent className='flex flex-col' sx={{
        height: '40%',
        padding: '1rem'
      }}>
        <div className='flex justify-between'>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <div className='flex flex-col'>
          <Typography gutterBottom variant="body1" component="div">
            {month}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {day}
          </Typography>
          </div>
        </div>
        <Typography gutterBottom variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}
