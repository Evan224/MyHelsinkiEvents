
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function GeneralCard (props:any): JSX.Element {
    const {description,duration,location,joinNumber,founder} = props
    return (
        <Card >
            <CardContent>
                        <Typography variant='h5' gutterBottom>
                            Summary
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {joinNumber} joint this event
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {founder} has started this event
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Location: {location}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Duration : {duration} hours
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