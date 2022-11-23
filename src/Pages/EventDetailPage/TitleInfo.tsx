import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {useState} from 'react'
import {joinEvent,likeEvent} from '@/utils/http/eventRequest'
import ConfirmBox from '@/components/Confirm'
import {useAuth} from '@/Auth'
import {useNavigate} from 'react-router-dom'
import {getStandardDate,getMonthShortName} from '@/utils/index'

// interface TitleProps {
//   title: string
//   Date: string
//   Location: string
// }

export default function TitleInfo (props:any): JSX.Element {


  const {location,id,startTime,endTime} = props;
  const startDate=getStandardDate(startTime);
  const endDate=getStandardDate(endTime);

  const [ifliked,setIfliked] = useState(props._isLiked);
  const [ifjoined,setIfjoined] = useState(props._isJoined);
  const navigate = useNavigate();

  const state=useAuth();


  const handleLike = async () => {
    if(!state?.userType){
      navigate('/loginpage');
      return;
    }

    const res = await likeEvent(id);
    if(res){
      setIfliked(!ifliked);
    }
  }

  const handleJoin = async () => {
    if(!state?.userType){
      navigate('/loginpage');
      return;
    }
    const res = await joinEvent(id);
    if(res){
      setIfjoined(!ifjoined);
    }
  }
  return (
        <div className="flex flex-col w-4/5 mx-auto min-h-40 justify-center border-b-2 border-blue-200 my-2">
            <Typography variant="h6" className='text-red-500 opacity-70 py-2'>
            {getMonthShortName(startDate.month)} {startDate.day} {startDate.hour} - {getMonthShortName(endDate.month)} {endDate.day} {startDate.hour}
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
