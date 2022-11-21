import EventCard from '../EventCard'
import LoadingSpinner from '../LoadingSpinner'

export default function EventList (props: any): JSX.Element {
  const cssString = props?.cssStyle ?? 'flex  flex-wrap '
  const loadingCss=props?.loadingCss ?? 'h-[60vh]'

  if(!props?.events?.length){
    return <LoadingSpinner cssString={loadingCss}/>
  }

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
