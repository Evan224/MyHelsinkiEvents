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
    description:'21'
  },
  {
    picture: 'https://source.unsplash.com/random',
    title: 'this is title this is a vry very asdasda',
    date: {
      month: 'Oct',
    },
    description:'21'
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
