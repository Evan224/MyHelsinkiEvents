
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

export default function ParticipantCard (props): JSX.Element {
    const {LikedUsers,Tags,description} = props
    return (
        <Card>
        <CardContent>
                    <Typography variant='h5' gutterBottom>
                    {LikedUsers?.length||0} people have liked this event
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary"> */}
                    <div className=''>
                        {Tags.map((tag) => {
                           return <Chip label={tag.name} key={tag.id} className="mx-2"/>
                        })}
                    </div>
                    {/* </Typography> */}
                    <Typography variant="body1" className="py-4">
                    {description}
                    </Typography>
                    
        </CardContent>
        </Card>
    )
}