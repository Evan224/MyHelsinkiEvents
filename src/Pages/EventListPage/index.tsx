import TabHeader from './TabHeader'
import TabList from './TabList'
import { useEffect, useReducer, useState } from 'react'



export default function EventListPage (): JSX.Element {

  const [payload, setPayload] = useState({})
  const callBackSearch = (state) => {
    setPayload(state)
  }

  return (
    <div className='mx-auto'>
        <TabHeader callBackSearch={callBackSearch} />
        <TabList payload={payload}/>
    </div>
  )
}
