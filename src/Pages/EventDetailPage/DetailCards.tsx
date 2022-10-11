import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import SimpleMap from './SimpleMap'

export default function DetailCards (): JSX.Element {
  return (
    <div className='w-4/5 mx-auto'>
            <Grid container spacing={2}>
            <Grid item xs={6} md={7}>
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
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} md={5}>
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
            </Grid>

            <Grid item xs={6} md={7}>
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
            </Grid>
            <Grid item xs={6} md={5} className="h-40 w-40">
            {/* <SimpleMap /> */}
            </Grid>
            </Grid>
    </div>

  )
}
