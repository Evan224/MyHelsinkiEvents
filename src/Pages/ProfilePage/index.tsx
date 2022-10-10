
import PicCard from './PicCard'
import ProfileCard from './Profile'
export default function Profile (): JSX.Element {
  return (
        <div className="flex justify-center w-[100vw] flex-col items-center">
          <PicCard />
          <ProfileCard />
        </div>
  )
}
