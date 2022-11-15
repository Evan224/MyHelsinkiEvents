import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://hw7ynqqpp6.execute-api.eu-north-1.amazonaws.com/dev/event'

export default function useFetch (payload: Object, action: string) {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await axios.post(url, {
        payload,
        action
      })
      const formattedEvents = result.data.map((event: any) => {
        const DateCur = new Date(event.Date)
        return {
          picture: event.ThumbnailUrl,
          title: event.Name,
          date: {
            month: DateCur.getUTCMonth(),
            day: DateCur.getUTCDate()
          },
          description: event.Description,
          tags: event.Tags,
          ...event
        }
      })
      setData(formattedEvents)
    }
    fetchData()
  }, [url])

  return [data, setData]
}

// const testProps = [
//   {
//     picture: LoadingPicture,
//     title: 'this is title this is a vry very asdasda',
//     date: {
//       month: 'Aug',
//       day: '12'
//     },
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
//   },
//   {
//     picture: 'https://source.unsplash.com/random',
//     title: 'this is t123123213itle this is a vry very asdasda',
//     date: {
//       month: 'Sep',
//       day: '13'
//     },
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
//   },
//   {
//     picture: 'https://source.unsplash.com/random',
//     title: 'this is title this is a vry very asdasda',
//     date: {
//       month: 'Oct',
//       day: '14'
//     },
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
//   },
//   {
//     picture: 'https://source.unsplash.com/random',
//     title: 'this is title this is a vry very asdasda',
//     date: {
//       month: 'Nov',
//       day: '15'
//     },
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
//   },
//   {
//     picture: 'https://source.unsplash.com/random',
//     title: 'this is title this is a vry very asdasda',
//     date: {
//       month: 'Dec',
//       day: '16'
//     },
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic quis incidunt praesentium explicabo quia id soluta deleniti dolore non?'
//   }
// ]
