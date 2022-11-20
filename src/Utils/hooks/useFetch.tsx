import { useEffect, useState } from 'react'
import axios from 'axios'
import { getEvents } from '../http/eventRequest'

// const url = 'https://hw7ynqqpp6.execute-api.eu-north-1.amazonaws.com/dev/event'

export default function useFetch (payload: Object, action: string,dependency:Object):[Array<any>,Function] {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await getEvents(action,payload)
      setData(result)
    }
    fetchData()
  }, [dependency])

  return [data, setData]
}

