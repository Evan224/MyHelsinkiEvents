
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'


export default function FounderCard (props): JSX.Element {
    const {Owner} = props
    // console.log(
    //     Owner
    // )
    return (
        <Card >
        <CardContent>
                    <div className='w-1/2 mx-auto p-4'>
                        <img src={Owner.avatarUrl}></img>
                    </div>
                    <Typography variant='h5' gutterBottom>
                        {Owner.username}
                    </Typography>

                    <Typography variant="body1">
                        {Owner.introduction}
                    </Typography>
        </CardContent>
        </Card>
    )
}