import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from './TabPanel'
import Box from '@mui/material/Box'
import EventList from '@/components/EventList'
import useFetch from '@/utils/hooks/useFetch'
import { shuffle } from '@/utils'
import {formatEvent} from '@/utils/index'
import { useEffect,useState,useMemo} from 'react'
import { useAuth } from '@/Auth'
import { getAlljoinedEvents,getMylikedEvents,getRecommendedEvents,getFollowerEvents } from '@/utils/http/eventRequest'

export default function BasicTabs (props): JSX.Element {
  const {payload} = props;
  const [value, setValue] = useState(0)
  const [recommendEvents, setEvents] = useFetch(getRecommendedEvents,{})
  const [likesEvents, setLikesEvents] = useFetch(getMylikedEvents,{})
  const [joinedEvents, setMyEvents] = useFetch(getAlljoinedEvents,{})
  const [followingEvents, setFollowingEvents] = useFetch(getFollowerEvents,{})


  const state=useAuth();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }


  const LoginPanel = (
           <>
                <TabPanel value={value} index={1}>
                        <EventList events={likesEvents}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <EventList events={joinedEvents}/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <EventList events={followingEvents}/>
                        </TabPanel>
               </>)


  return (
    <div className='w-full'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '80%' }} className="mx-auto">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Recommend" sx={{display:"block"}}/>
          <Tab label="likes" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
          <Tab label="joined Events" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
          <Tab label="Following" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <EventList events={recommendEvents}/>
      </TabPanel>
      {state?.userType?LoginPanel:null}
    </div>
  )
}


