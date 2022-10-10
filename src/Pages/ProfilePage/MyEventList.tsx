import EventList from '@/components/EventList'

export default function MyEventList (): JSX.Element {
  return <EventList events={tests}/>
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
