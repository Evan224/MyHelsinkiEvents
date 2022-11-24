import {useState} from 'react'
import useFetch from '@/utils/hooks/useFetch'
import AccordionItem from './AccordionItem'
import { getMyEvents } from '@/utils/http/profileRequest';
import TabHeader from '../EventListPage/TabHeader';


export default function ManagePage() {
  const [expanded, setExpanded] = useState(-1);
  const [events, setEvents] = useFetch(getMyEvents,[])

  const handleChange = (panel: number) =>{
    if(expanded === panel){
      setExpanded(-1)
    }else{
      setExpanded(panel)
    }
  } 


  return (
    <div className='p-4 min-h-[100vh]'>
      <TabHeader />
      {
        events?.data.map((event, index) => {
          if(!event) return null;
          return <AccordionItem event={event} expanded={expanded===index} handleChange={()=>handleChange(index)} key={index}/>
        })
      }
    </div>
  );
}