import EventCard from '@/components/EventCard'
import CreateEventForm from '@/components/CreateEventForm'
import useFetch from '@/utils/hooks/useFetch'
import { getMyEvents } from '@/utils/http/profileRequest'
import { getAllEvents } from '@/utils/http/eventRequest'
// import { }

// export default function MyEventList (): JSX.Element {
//   return <EventList events={tests}/>
// }

export default function myEventList (props): JSX.Element {
  const cssString = props?.cssStyle ?? 'flex  flex-wrap '
  // const events= props?.events ?? tests
  const [events]=useFetch(getMyEvents, {});
  return (
    <div className='flex flex-col'>
          <CreateEventForm/>
          <div className={cssString+"flex mx-auto"}>
            {events.map((item, index) => {
              return (
                <EventCard key={index} {...item} />
              )
            })}
          </div>
          </div>
  )
}