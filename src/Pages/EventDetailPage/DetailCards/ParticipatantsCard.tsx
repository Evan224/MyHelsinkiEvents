
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

export default function ParticipantCard (props): JSX.Element {
    const {likes,tags,description} = props;
    return (
        <Card >
        <CardContent>
                    <Typography variant='h5' gutterBottom>
                    {likes} people have liked this event
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary"> */}
                    <div>
                        {tags.map((tag) => {
                           return <Chip label={tag.name} key={tag.id}/>
                        })}
                    </div>
                    {/* </Typography> */}
                    <Typography variant="body1">
                    {description}
                    </Typography>
        </CardContent>
        </Card>
    )
}