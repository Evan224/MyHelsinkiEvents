import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SimpleMap from '../SimpleMap'
import GeneralCard from './GeneralCard'
import FounderCard from './FounderCard'
import ParticipatantsCard from './ParticipatantsCard'


export default function DetailCards (): JSX.Element {
  return (
    <div className='w-4/5 mx-auto'>
            <Grid container spacing={2}>
            <Grid item xs={6} md={7}>
                  <GeneralCard />
            </Grid>
            <Grid item xs={6} md={5}>
                  <FounderCard />
            </Grid>
            <Grid item xs={6} md={7}>
                  <ParticipatantsCard />
            </Grid>
            <Grid item xs={6} md={5} className="h-40 w-40">
            {/* <SimpleMap /> */}
            </Grid>
            </Grid>
    </div>

  )
}
