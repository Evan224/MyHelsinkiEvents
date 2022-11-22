
import PicCard from './PicCard'
import ProfileCard from './Profile'
import { getProfile } from '@/utils/http/profileRequest'
import {useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import LoadingSpinner from '@/components/LoadingSpinner'
import useFetch from '@/utils/hooks/useFetch'

export default function Profile (): JSX.Element {
  const location = useLocation();
  const userId=location?.state?.id ?? "";
  const [profile, setProfile] = useFetch(getProfile,{})

  if(!profile) return (
    <LoadingSpinner cssString="h-[80vh]" />
  )

  return (
        <div className="flex justify-center w-[100vw] flex-col items-center">
          <PicCard />
          <ProfileCard {...profile}/>
        </div>
  )
}
