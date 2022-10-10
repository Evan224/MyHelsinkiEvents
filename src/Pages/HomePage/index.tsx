import FindEvent from './FindEvent'
import EventList from '@/components/EventList'
import Title from './UpcomingTitle'
import LoadMore from './LoadMore'
import CreateEvent from './CreateEvent'
import EditorCardList from './EditorCard'

const testProps = [
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

export default function HomePage (): JSX.Element {
  return (
        <div className="flex justify-center w-[100vw] flex-col">
            <FindEvent />
            <Title title="Upcoming Events" />
            <EventList events={testProps}/>
            <LoadMore />
            <CreateEvent />
            <Title title="Daily Recommendation" />
            <EditorCardList />
        </div>
  )
}
