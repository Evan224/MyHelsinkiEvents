import Card from '@mui/material/Card'
import useFetch from '@/utils/hooks/useFetch'
import { shuffle } from '@/utils'
import TitleInfo from './TitleInfo'
import DetailCards from './DetailCards'
import { useEffect,useMemo} from 'react'
import LoadingSpinner from '@/components/LoadingSpinner'
import {formatEvent} from '@/utils/index'
import {useLocation} from 'react-router-dom'
// mock one data
export default function EventDetail (): JSX.Element {
  const location = useLocation();
  const { state } = location;


  if(!state) return (
    <LoadingSpinner />
  )
  return (
        <div className="flex justify-center w-[100vw]">
            <div className="background">
                <img src={state.picture} className="object-cover h-[30vh] w-full">
                </img>
                <TitleInfo {...state} />
                <DetailCards />
            </div>
        </div>
  )
}
