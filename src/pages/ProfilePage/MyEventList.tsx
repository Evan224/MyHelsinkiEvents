import EventCard from '@/components/EventCard'
import CreateEventForm from '@/components/CreateEventForm'
import useFetch from '@/utils/hooks/useFetch'
import { getMyEvents } from '@/utils/http/profileRequest'
import SimpleBackdrop from '@/components/SimpleBackdrop'
import { useState } from 'react'
import ManagePage from '@/pages/ManagePage'

// export default function MyEventList (): JSX.Element {
//   return <EventList events={tests}/>
// }

export default function myEventList (props): JSX.Element {
  const cssString = props?.cssStyle ?? 'flex  flex-wrap '
  // const events= props?.events ?? tests
  const [events]=useFetch(getMyEvents, {});


  if(!events?.data) return (
    <SimpleBackdrop open={1}/>
  )
  return (
    <div className='flex flex-col'>
          <div className={cssString+"flex mx-auto"}>
            {events?.data.map((item, index) => {
              return (
                <EventCard key={index} {...item} />
              )
            })}
          </div>
          </div>
  )
}