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
      // console.log(result.data, 'result.data')
      setData(formattedEvents)
    }
    fetchData()
  }, [url])

  return [data, setData]
}

