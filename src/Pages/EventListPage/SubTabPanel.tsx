import EventList from "@/components/EventList";
import TabPanel  from "./TabPanel";
import useFetch from "@/utils/hooks/useFetch";
import {useState,useEffect} from "react";
import SimpleBackdrop from "@/components/SimpleBackdrop";
import EmptyEventList from "@/components/EmptyEvent";

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

     const ifEvents=events?.length>0||false;

    return (
        <TabPanel value={value} index={index} >
            <SimpleBackdrop open={loading}/>
                {ifEvents?<EventList events={events} cssStyle="flex flex-wrap justify-center"/>:<EmptyEventList/>}
      </TabPanel>
    )
}