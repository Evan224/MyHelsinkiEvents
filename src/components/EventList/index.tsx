import EventCard from '../EventCard'

export default function EventList (props: EventListProps): JSX.Element {
  return (
        <div className="flex w-4/5 mx-auto">
          <div className='flex  flex-wrap '>
            {props.events.map((item, index) => {
              return (
                <EventCard key={index} {...item} />
              )
            })}
          </div>
        </div>
  )
}
