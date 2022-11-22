import Card from '@mui/material/Card'
import useFetch from '@/utils/hooks/useFetch'
import { shuffle } from '@/utils'
import TitleInfo from './TitleInfo'
import DetailCards from './DetailCards'
import { useEffect,useMemo} from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import {formatEvent} from '@/utils/index'
import {useLocation} from 'react-router-dom'
import { getEventDetail } from '@/utils/http/eventRequest'
// mock one data
export default function EventDetail (): JSX.Element {
  const location = useLocation();
  const [state, setState] = useFetch(getEventDetail,{
    eventId:location.state
  },location.state)

  if(!state[0]) return (
       <LoadingSpinner cssString="h-[100vh]" />
  )

  return (
        <div className="flex justify-center w-[100vw]">
            <div className="background">
                <img src={state[0].thumbnailUrl} className="object-cover h-[30vh] w-[100vw]">
                </img>
                <TitleInfo {...state[0]} />
                <DetailCards {...state[0]}  />
            </div>
        </div>
  )
}
