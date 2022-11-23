import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Footer (): JSX.Element {
  return (
    <Box className="w-full mx-auto" sx={{
      flexGrow: 1
    }}>
      <AppBar position='static' sx={{

      }}>
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="flex justify-center">
            Powered by Helsinki Events
          </Typography>
        </Toolbar>w
      </AppBar>
    </Box>
  )
}
