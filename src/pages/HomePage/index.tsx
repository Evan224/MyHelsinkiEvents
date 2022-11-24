import FindEvent from './FindEvent'
import EventList from '@/components/EventList'
import Title from './UpcomingTitle'
import LoadMore from './LoadMore'
import CreateEvent from './CreateEvent'
import EditorCardList from './EditorCard'
import { formatEvent } from '@/utils'
import useFetch from '@/utils/hooks/useFetch'
import { useAuth } from '@/Auth'
import LoadingSpinner from '@/components/LoadingSpinner'
import { getAllEvents } from '@/utils/http/eventRequest'
import {useEffect, useState} from 'react'

export default function HomePage (): JSX.Element {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getAllEvents()
      if(result.data){
        setEvents(result.data)
      }  
    }
    fetchData()
  }, []);
  const state=useAuth();

  return (
        <div className="flex justify-center w-[100vw] flex-col">
            <FindEvent show={!state?.userType}/>
            <Title title="Upcoming Events" />
            <EventList events={events}/>
            <LoadMore />
            <CreateEvent />
            <Title title="Daily Recommendation" />
            <EditorCardList />
        </div>
  )
}
