import Card from '@mui/material/Card'
import useFetch from '@/utils/hooks/useFetch'
import { shuffle } from '@/utils'
import TitleInfo from './TitleInfo'
import DetailCards from './DetailCards'
// mock one data
export default function EventDetail (): JSX.Element {
  const [events, setEvents] = useFetch({}, 'get-all-events')
  console.log(events)
  // const randomEvent = shuffle(events)[0]

  return (
        <div className="flex justify-center w-[100vw]">
            <div className="background">
                {/* <img src={randomEvent.picture} className="object-none h-[30vh] w-full">
                </img>
                <TitleInfo {...randomEvent} /> */}
                <DetailCards />
            </div>
        </div>
  )
}
