import EventCard from '../EventCard'
import LoadingSpinner from '../LoadingSpinner'

export default function EventList (props: any): JSX.Element {
  const cssString = props?.cssStyle ?? 'flex  flex-wrap '
  const loadingCss=props?.loadingCss ?? 'h-[60vh]'

  console.log(props, 'props')

  if(!props?.events){
    return <LoadingSpinner cssString={loadingCss}/>
  }

  if(props?.events?.length===0){
    return (<div className={"flex w-4/5 mx-auto h-[60vh]"}>

    </div>)
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
