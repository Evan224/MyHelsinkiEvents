
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { followUser,unFollowUser } from '@/utils/http/meRequest'
import {useState} from 'react'

export default function FounderCard (props): JSX.Element {
    const {Owner} = props
    const [ifFollowed,setIfFollowed] = useState(false)
    const handleClick=async()=>{
        if(ifFollowed){
            const resp=await unFollowUser(Owner.id)
            if(resp.status===200){
                setIfFollowed(false)
            }
        }else{
            const resp=await followUser(Owner.id)
            if(resp.status===200){
                setIfFollowed(true)
            }
        }
    }
    return (
        <Card >
        <CardContent className='flex flex-col items-center'>
                    <div className='w-1/2 mx-auto p-4'>
                        <img src={Owner.avatarUrl}></img>
                    </div>
                    <Typography variant='h5' gutterBottom>
                        {Owner.username}
                    </Typography>

                    <Typography variant="body1">
                        {Owner.introduction}
                    </Typography>
                    <Button variant="contained" className="w-2" size="small" onClick={handleClick}>{
                        ifFollowed ? "Unfollow" : "Follow"
                    }</Button>
        </CardContent>
        </Card>
    )
}