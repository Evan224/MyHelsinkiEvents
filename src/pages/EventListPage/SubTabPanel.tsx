import EventList from "@/components/EventList";
import TabPanel  from "./TabPanel";
import useFetch from "@/utils/hooks/useFetch";
import {useState,useEffect} from "react";
import SimpleBackdrop from "@/components/SimpleBackdrop";
import EmptyEventList from "@/components/EmptyEvent";
import Pagination from '@mui/material/Pagination';
import { SecurityUpdateGoodSharp } from "@mui/icons-material";

export default function SubTabPanel(props){
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const {value,requestFunction,index,payload}=props;
    if(!value===index){
        return null;
    }
    const [events,setEvents]=useState([]);
      useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            try{
                const events = await requestFunction({...payload,page});
                // console.log(events,"events")
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

     const handleChangePage=(event, newPage) => {
        setPage(newPage);
      }

    return (
        <TabPanel value={value} index={index} >
            <div className="p-4 flex flex-row-reverse mx-auto w-4/5">
                 <Pagination count={Math.ceil(count/6)} defaultPage={1} siblingCount={0} onChange={handleChangePage}/>
            </div>
            <SimpleBackdrop open={loading}/>
                {ifEvents?<EventList events={events} cssStyle="flex flex-wrap justify-center"/>:<EmptyEventList/>}
      </TabPanel>
    )
}