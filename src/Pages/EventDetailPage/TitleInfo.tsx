import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {useState} from 'react'
import {joinEvent,likeEvent,unjoinEvent,unlikeEvent} from '@/utils/http/eventRequest'
import ConfirmBox from '@/components/Confirm'
import {useAuth} from '@/Auth'
import {useNavigate} from 'react-router-dom'
import {getStandardDate,getMonthShortName} from '@/utils/index'
import SimpleBackdrop from '@/components/SimpleBackdrop'
import Message from '@/components/Message'
import messageService from '@/components/Message'
// import Alert from '@/components/AlertExample'

// interface TitleProps {
//   title: string
//   Date: string
//   Location: string
// }

export default function TitleInfo (props:any): JSX.Element {
  const [loading, setLoading] = useState(false)
  const {location,id,startTime,endTime} = props;
  const startDate=getStandardDate(startTime);
  const endDate=getStandardDate(endTime);

  const [ifliked,setIfliked] = useState(props._isLiked);
  const [ifjoined,setIfjoined] = useState(props._isJoined);
  const navigate = useNavigate();

  const [content,setContent] = useState('');
  const [severity,setSeverity] = useState('success');

  const state=useAuth();


  const handleLike = async () => {
    if(!state?.userType){
      navigate('/loginpage');
      return;
    }
    setLoading(true)
    const content = ifliked?'You have unliked this event':'You have liked this event';
    if(!ifliked){

        try{
        const res = await likeEvent(id);
        if(res){
          setIfliked(!ifliked);
          messageService.success({content,duration:1500});
        }}catch(e){
          messageService.error({content:'failed!',duration:1500});
        }
       
    }else{
      try{
        const res = await unlikeEvent(id);
        if(res){
          setIfliked(!ifliked);
          messageService.success({content,duration:1500});
        }}catch(e){
          messageService.error({content:'failed!',duration:1500});
        }
    }
    setLoading(false)
  }

  const handleJoin = async () => {
    if(!state?.userType){
      navigate('/loginpage');
      return;
    }
    setLoading(true)
    const content = ifjoined?'You have unjoined this event':'You have joined this event';
    if(!ifjoined){

        try{
        const res = await joinEvent(id);
        if(res){
          setIfjoined(!ifjoined);
          messageService.success({content,duration:1500});
        }}catch(e){
          messageService.error({content:'failed!',duration:1500});
        }
       
    }else{
      try{
        const res = await unjoinEvent(id);
        if(res){
          setIfjoined(!ifjoined);
          messageService.success({content,duration:1500});
        }}catch(e){
          messageService.error({content:'failed!',duration:1500});
        }
    }
    setLoading(false)
  }
  return (
        <div className="flex flex-col w-4/5 mx-auto min-h-40 justify-center border-b-2 border-blue-200 my-2">
            <SimpleBackdrop open={loading} />
            {/* <Alert content={content} open={false} severity={severity} /> */}
            <Typography variant="h6" className='text-red-500 opacity-70 py-2'>
            From &nbsp;&nbsp;&nbsp; {getMonthShortName(startDate.month)} {startDate.day}  {startDate.hour} &nbsp;&nbsp;&nbsp;
            To &nbsp;&nbsp;&nbsp; {getMonthShortName(endDate.month)} {endDate.day} {endDate.hour}
            </Typography>
            <Typography variant="h4" className="">
                {props.name}
            </Typography>
            <div  className='py-2 flex w-full justify-between'>
                {location}
                <p></p>
                <p></p>
                <Button variant={ifliked?"contained":"outlined"} color="primary"
                 className="w-1/6 self-end" onClick={()=>{handleLike()}}>
                        {ifliked?"liked":"like"}</Button>
                <Button variant={ifjoined?"contained":"outlined"} color="primary" 
                className="w-1/6 self-end" onClick={()=>{handleJoin()}}>
                        {ifjoined?"joined":"join"}</Button>
            </div>
        </div>
  )
}
