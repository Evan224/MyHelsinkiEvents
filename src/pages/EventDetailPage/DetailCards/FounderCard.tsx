
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { followUser,unFollowUser } from '@/utils/http/meRequest'
import {useState} from 'react'
import SimpleBackdrop from '@/components/SimpleBackdrop'
import messageService from '@/components/Message'
import Avatar from '@mui/material/Avatar'

export default function FounderCard (props): JSX.Element {
    const {Owner} = props
    const [loading, setLoading] = useState(false)
    const [ifFollowed,setIfFollowed] = useState(Owner._isFollowed)
    const handleClick=async()=>{
        setLoading(true)
        try{
                if(ifFollowed){
                    const resp=await unFollowUser(Owner.id)
                    if(resp.status===200){
                        setIfFollowed(false)
                        messageService.success({
                            content: 'successfully unfollowed!',
                            duration: 2000
                        })
                    }
                }else{
                    const resp=await followUser(Owner.id)
                    if(resp.status===200){
                        setIfFollowed(true)
                    }
                }
            }catch(e){
                messageService.error({
                    content: 'failed!',
                    duration: 2000
                })
            }
        setLoading(false)
    }
    return (
        <Card >
            <SimpleBackdrop open={loading} />
            <CardContent className='flex flex-col items-center'>
                    {/* <div className='w-1/2 mx-auto p-4'>
                        <img src={Owner.avatarUrl}></img>
                    </div> */}
                    <Avatar alt="Remy Sharp" src={Owner.avatarUrl} sx={{ width: 80, height: 80 }} />
                    <Typography variant='h5' gutterBottom className="p-4">
                        {Owner.username}
                    </Typography>

                    <Typography variant="body1" className="text-center">
                        {Owner.introduction||'The founder has not written an introduction yet '}
                    </Typography>
                    <Button variant="contained" className="p-4" size="small" onClick={handleClick}>{
                        ifFollowed ? "Unfollow" : "Follow"
                    }</Button>
            </CardContent>
        </Card>
    )
}