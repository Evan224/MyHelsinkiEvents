
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function GeneralCard (props:any): JSX.Element {
    const {LikedUsers,Owner,location,endTime} = props
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
                            End Time : {endTime}
                        </Typography>
                        {/* <Typography variant="body1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde repellat aliquid blanditiis recusandae et possimus quasi ducimus dolores totam! Repudiandae facere expedita deserunt perspiciatis optio, reiciendis dolor unde?
                        <br />
                        {'"a benevolent smile"'}
                        </Typography> */}
            </CardContent>
        </Card>
    )
}