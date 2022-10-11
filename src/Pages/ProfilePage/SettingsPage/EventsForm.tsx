import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TagBar from '@/components/TagBar'
import EventList from '@/components/EventList'

export default function EventsForm () {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Choose Your Interest !
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <TagBar />
          <Typography variant="h6" gutterBottom className="flex p-4">
        There are some events that you might be interested in!
      </Typography>
          <EventList events={tests} cssStyle="flex"/>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Allow us to personally recommend events for you"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const tests = [
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Aug',
      day: '12'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is t123123213itle this is a vry very asdasda',
    date: {
      month: 'Sep',
      day: '13'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Oct',
      day: '14'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  }
]
