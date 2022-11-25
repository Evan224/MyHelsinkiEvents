
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import SummarizeIcon from '@mui/icons-material/Summarize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HailIcon from '@mui/icons-material/Hail';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function GeneralCard (props:any): JSX.Element {
    const {LikedUsers,Owner,location,endTime,startTime} = props
    const t1=new Date(startTime)
    const t2=new Date(endTime)
    return (
        <Card >
            <CardContent>
                        <Typography variant='h6' gutterBottom>
                        <SummarizeIcon/>  Summary  
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <PeopleAltIcon /> {LikedUsers.length} liked this event !
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <HailIcon /> {Owner.username} has started this event
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <PlaceIcon />   Location: {location}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <AccessTimeIcon />  Begin : {t1.toLocaleDateString()} {t1.toLocaleTimeString()}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <AccessTimeFilledIcon />   End : {t2.toLocaleDateString()} {t2.toLocaleTimeString()}
                        </Typography>
                        
            </CardContent>
        </Card>
    )
}