import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import EventImage from '@/assets/img/party-event.jpg'
import { useState, useEffect } from 'react'
import useFetch from '@/utils/hooks/useFetch'
import {formatEvent} from '@/utils/index'


function EditorCard (Props: Event.EventCardProps): JSX.Element {
  const { picture = EventImage, title, date, description } = Props
  const { month, day } = date
  return (
    <Card sx={{
      borderRadius: '5%',
      width: '30%',
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
      <CardContent className='flex flex-col justify-between' sx={{
        height: '40%',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'around'
      }}>

          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
        <Typography gutterBottom variant="body2" component="div">
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}


const EditorCardList = (): JSX.Element => {
  const [events, setEvents] = useFetch({}, 'get-recommendation-events')
  const formattedEvents = formatEvent(events)

  return (
        <div className='flex w-4/5 mx-auto'>
        {formattedEvents.slice(0, 3).map((event, index) => (
            <EditorCard key={index} {...event} />
        ))}
        </div>
  )
}

export default EditorCardList
