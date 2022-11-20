import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {useState} from 'react'
import {joinEvent,likeEvent} from '@/utils/http/eventRequest'
import ConfirmBox from '@/components/Confirm'

interface TitleProps {
  title: string
  Date: string
  Location: string
}

export default function TitleInfo (props:any): JSX.Element {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const {location,id} = props;
  const [ifliked,setIfliked] = useState(props.ifliked);
  const [ifjoined,setIfjoined] = useState(props.ifjoined);
  const DateStirng = new Date(props.Date).toLocaleDateString(options)

  const handleLike = async () => {
    const res = await likeEvent(id);
    if(res){
      setIfliked(!ifliked);
    }
  }

  const handleJoin = async () => {
    const res = await joinEvent(id);
    if(res){
      setIfjoined(!ifjoined);
    }
  }
  return (
        <div className="flex flex-col w-4/5 mx-auto min-h-40 justify-center border-b-2 border-blue-200 my-2">
            <Typography variant="h6" className='text-red-500 opacity-70 py-2'>
                {DateStirng}
            </Typography>
            <Typography variant="h4" className="">
                {props.title}
            </Typography>
            <Typography variant="body2" className='py-2 flex w-full justify-between'>
                {location}
                <p></p>
                <p></p>
                <Button variant={ifliked?"contained":"outlined"} color="primary"
                 className="w-1/6 self-end" onClick={()=>{handleLike()}}>
                        {ifliked?"liked!":"like"}</Button>
                <Button variant={ifjoined?"contained":"outlined"} color="primary" 
                className="w-1/6 self-end" onClick={()=>{handleJoin()}}>
                        {ifjoined?"joined!":"join"}</Button>
            </Typography>
        </div>
  )
}
