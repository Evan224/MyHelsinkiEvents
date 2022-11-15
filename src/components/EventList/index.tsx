import EventCard from '../EventCard'

export default function EventList (props: EventListProps): JSX.Element {
  const cssString = props?.cssStyle ?? 'flex  flex-wrap '
  return (
          <div className={cssString+"flex w-4/5 mx-auto"}>
            {props.events.map((item, index) => {
              return (
                <EventCard key={index} {...item}/>
              )
            })}
          </div>
  )
}
