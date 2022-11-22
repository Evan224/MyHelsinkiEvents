import { useEffect, useState } from 'react'

export default function useFetch (requestFunction:Function,params:Object,dependency?:Object):[Array<any>,Function] {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await requestFunction({...params})
      console.log(result,'result')
      setData(result.data)
    }
    fetchData()
  }, [])

  return [data, setData]
}

