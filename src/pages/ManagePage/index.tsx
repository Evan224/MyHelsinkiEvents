import useFetch from '@/utils/hooks/useFetch'
import AccordionItem from './AccordionItem'
import { getMyEvents } from '@/utils/http/profileRequest';
import ManageHeader from '../EventListPage/MangeHeader';
import Pagination from '@mui/material/Pagination';
import {useState,useEffect} from "react";
import EmptyEventList from "@/components/EmptyEvent";
import CreateEventForm from '@/components/CreateEventForm';


export default function ManagePage() {
  const [expanded, setExpanded] = useState(-1);
  const [payload, setPayload] = useState({})
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false)

  const handleChangePage=(event, newPage) => {
    setPage(newPage);
  }
  
  const handleChange = (panel: number) =>{
    if(expanded === panel){
      setExpanded(-1)
    }else{
      setExpanded(panel)
    }
  } 

  const callBackPayload = (payload: any) => {
    setPayload(payload)
  }

  const [events,setEvents]=useState([]);
      useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            try{
                const events = await getMyEvents({...payload,page});
                setCount(events.totalCount||0)
                setPage(events.page)
                setEvents(events.data)
            }catch(e){
                console.log(e)
            }    
            setLoading(false)
            }
        fetchEvents()
     }, [payload,page]);

     const ifEvents=events?.length>0||false;
  return (
    <div className='p-4 min-h-[100vh]'>
      <ManageHeader callBackSearch={callBackPayload}/>
      <div className="p-4 flex flex-row-reverse mx-auto w-4/5">
                 <Pagination count={Math.ceil(count/6)} defaultPage={1} siblingCount={0} onChange={handleChangePage}/>
      </div>
      {!ifEvents? <EmptyEventList/>:(
        events?.map((event, index) => {
          if(!event) return null;
          return <AccordionItem event={event} expanded={expanded===index} handleChange={()=>handleChange(index)} key={index}/>
        }))
      }
      <CreateEventForm />
    </div>
  );
}