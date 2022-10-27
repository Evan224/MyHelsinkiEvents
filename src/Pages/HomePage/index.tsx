import FindEvent from './FindEvent'
import EventList from '@/components/EventList'
import Title from './UpcomingTitle'
import LoadMore from './LoadMore'
import CreateEvent from './CreateEvent'
import EditorCardList from './EditorCard'
import useFetch from '@/utils/hooks/useFetch'

export default function HomePage (): JSX.Element {
  const [events, setEvents] = useFetch({}, 'get-all-events')
  return (
        <div className="flex justify-center w-[100vw] flex-col">
            <FindEvent />
            <Title title="Upcoming Events" />
            <EventList events={events}/>
            <LoadMore />
            <CreateEvent />
            <Title title="Daily Recommendation" />
            <EditorCardList />
        </div>
  )
}
