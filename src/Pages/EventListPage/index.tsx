import EventList from '@/components/EventList'
import SearchBar from './SearchBar'
import TagBar from '../../components/TagBar'
import Title from './Title'
import DatePicker from './DatePicker'
import TabList from './TabList'

export default function EventListPage (): JSX.Element {
  return (
    <div className='mx-auto'>
      <div className='bg-gradient-to-r from-cyan-100 to-blue-100 w-[100vw]'>
        <Title title='Search your events!' />
        <div className='flex flex-col items-start w-4/5 mx-auto'>
          <div className="flex justify-around w-full p-5 ">
            <SearchBar />
            <DatePicker />
          </div>
          <TagBar />
        </div>
      </div>
        <TabList />
        {/* <EventList events={tests}/> */}
    </div>
  )
}
