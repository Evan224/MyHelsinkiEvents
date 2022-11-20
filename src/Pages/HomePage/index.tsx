import FindEvent from './FindEvent'
import EventList from '@/components/EventList'
import Title from './UpcomingTitle'
import LoadMore from './LoadMore'
import CreateEvent from './CreateEvent'
import EditorCardList from './EditorCard'
import { formatEvent } from '@/utils'
import useFetch from '@/utils/hooks/useFetch'
import { useAuth } from '@/Auth'

export default function HomePage (): JSX.Element {
  const [events, setEvents] = useFetch({}, 'get-all-events')
  const state=useAuth();

  return (
        <div className="flex justify-center w-[100vw] flex-col">
            <FindEvent show={state?.userType}/>
            <Title title="Upcoming Events" />
            <EventList events={formatEvent(events.slice(0,9))}/>
            <LoadMore />
            <CreateEvent />
            <Title title="Daily Recommendation" />
            <EditorCardList />
        </div>
  )
}
