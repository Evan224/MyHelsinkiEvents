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
      setData(result.data)
    }
    fetchData()
  }, [url])

  return [data, setData]
}

