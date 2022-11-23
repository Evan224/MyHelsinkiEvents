import EventList from "@/components/EventList";
import TabPanel  from "./TabPanel";
import useFetch from "@/utils/hooks/useFetch";
import {useState,useEffect} from "react";
import SimpleBackdrop from "@/components/SimpleBackdrop";

export default function SubTabPanel(props){
    const [loading, setLoading] = useState(false)
    const {value,requestFunction,index,payload}=props;
    if(!value===index){
        return null;
    }
    const [events,setEvents]=useState([]);
      useEffect(() => {
        const fetchEvents = async () => {
            setLoading(true)
            try{
                const events = await requestFunction(payload)
                setEvents(events.data)
            }catch(e){
                console.log(e)
            }    
            setLoading(false)
            }
        fetchEvents()
  }, [payload])

    return (
        <TabPanel value={value} index={index} >
            <SimpleBackdrop open={loading}/>
        <EventList events={events}/>
      </TabPanel>
    )
}