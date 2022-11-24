import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import GeneralCard from './GeneralCard'
import FounderCard from './FounderCard'
import ParticipatantsCard from './ParticipatantsCard'


export default function DetailCards (props): JSX.Element {

  return (
    <div className='w-4/5 mx-auto py-4'>
            <Grid container spacing={2}>
                  <Grid item xs={6} md={7}>
                        <GeneralCard {...props}/>
                  </Grid>
                  <Grid item xs={6} md={5}>
                        <FounderCard {...props}/>
                  </Grid>
                  <Grid item xs={6} md={7}>
                        <ParticipatantsCard {...props}/>
                  </Grid>
                  <Grid item xs={6} md={5} className="h-40 w-40">

                  </Grid>
            </Grid>
    </div>

  )
}
