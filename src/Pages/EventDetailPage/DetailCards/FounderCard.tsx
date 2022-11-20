
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function FounderCard (props): JSX.Element {
    const {founder,founderDescription} = props
    return (
        <Card >
        <CardContent>
                    <Typography variant='h5' gutterBottom>
                        {founder}
                    </Typography>

                    <Typography variant="body1">
                        {founderDescription}
                    </Typography>
        </CardContent>
        </Card>
    )
}