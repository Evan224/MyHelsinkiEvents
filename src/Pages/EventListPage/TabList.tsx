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

export default function BasicTabs (props): JSX.Element {
  const {payload} = props;
  const [value, setValue] = useState(0)
  const [recommendEvents, setEvents] = useFetch({}, 'get-all-events')
  const [likesEvents, setLikesEvents] = useFetch(payload, 'get-likes-events',payload)
  const [myEvents, setMyEvents] = useFetch(payload, 'get-my-events',payload)
  const [followingEvents, setFollowingEvents] = useFetch(payload, 'get-following-events',payload)


  const state=useAuth();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }


  const LoginPanel = (
           <>
                  <TabPanel value={value} index={1}>
                            <EventList events={formatEvent(likesEvents)}/>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <EventList events={formatEvent(myEvents)}/>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <EventList events={formatEvent(followingEvents)}/>
                        </TabPanel>
               </>)


  return (
    <div className='w-full'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '80%' }} className="mx-auto">
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Recommend" />
          <Tab label="My likes" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
          <Tab label="My own" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
          <Tab label="My Follow" sx={{
            display: state?.userType ? 'block' : 'none'
          }}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <EventList events={formatEvent(recommendEvents)}/>
      </TabPanel>
      {state?.userType?LoginPanel:null}
    </div>
  )
}


