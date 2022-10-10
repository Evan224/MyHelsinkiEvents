import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from './TabPanel'
import Box from '@mui/material/Box'
import EventList from '@/components/EventList'

export default function BasicTabs (): JSX.Element {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', paddingX: 'auto' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '80%' }} className="mx-auto">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Recommend" />
          <Tab label="My Favorite" />
          <Tab label="My own" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <EventList events={tests}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
         <EventList events={tests2}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EventList events={tests}/>
      </TabPanel>
    </Box>
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
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Nov',
      day: '15'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Dec',
      day: '16'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  }
]

const tests2 = [
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
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Nov',
      day: '15'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Dec',
      day: '16'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Dec',
      day: '16'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Dec',
      day: '16'
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
  }
]