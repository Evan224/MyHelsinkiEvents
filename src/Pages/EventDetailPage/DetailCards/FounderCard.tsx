
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function FounderCard (): JSX.Element {
    return (
        <Card >
        <CardContent>
                    <Typography variant='h5' gutterBottom>
                    Founder's information
                    </Typography>

                    <Typography variant="body1">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio unde repellat aliquid blanditiis recusandae et possimus quasi ducimus dolores totam! Repudiandae facere expedita deserunt perspiciatis optio, reiciendis dolor unde?
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
        </CardContent>
        </Card>
    )
}