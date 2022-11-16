
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function ParticipantCard (): JSX.Element {
    return (
        <Card >
        <CardContent>
                    <Typography variant='h5' gutterBottom>
                    200 people have joined this event
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Music, Food, Drinks, and more
                    </Typography>
                    <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde repellat aliquid blanditiis recusandae et possimus quasi ducimus dolores totam! Repudiandae facere expedita deserunt perspiciatis optio, reiciendis dolor unde?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vel, mollitia sed officia quis neque suscipit esse dolore deserunt provident.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </CardContent>
        </Card>
    )
}