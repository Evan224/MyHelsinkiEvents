import { useEffect, useState } from 'react'

export default function useFetch (requestFunction:Function,params:Object,dependency?:Object):[any,Function] {
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const result = await requestFunction({...params})
      setData(result.data)
    }
    fetchData()
  }, [dependency])

  return [data, setData]
}

