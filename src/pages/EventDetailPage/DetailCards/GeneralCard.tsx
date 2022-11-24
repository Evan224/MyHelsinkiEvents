
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function GeneralCard (props:any): JSX.Element {
    const {LikedUsers,Owner,location,endTime,startTime} = props
    const t1=new Date(startTime)
    const t2=new Date(endTime)
    return (
        <Card >
            <CardContent>
                        <Typography variant='h5' gutterBottom>
                            Summary
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {LikedUsers.length} has liked this event !
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {Owner.username} has started this event
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Location: {location}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            The event will begin at {t1.toLocaleDateString()} {t1.toLocaleTimeString()}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            end at : {t2.toLocaleDateString()} {t2.toLocaleTimeString()}
                        </Typography>
                        
            </CardContent>
        </Card>
    )
}