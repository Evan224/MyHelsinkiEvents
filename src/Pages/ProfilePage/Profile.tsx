import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '../EventListPage/TabPanel'

export default function ProfileCard (): JSX.Element {
  const [value, setValue] = React.useState(1)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  return (
    <Card sx={{ width: '90%' }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="flex">
            <Avatar sx={{ height: 80, width: 80 }}></Avatar>
            <div className='flex flex-col justify-around p-5'>
            <Typography variant="h6" component="div">
                John Doe
            </Typography>
            <Typography variant="body2" component="div">
                Short Description
            </Typography>
            </div>

          </Typography>
          <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Information" />
                    <Tab label="Settings" />
                    <Tab label="Events" />
                    </Tabs>
                    </Box>
                <TabPanel value={value} index={0}>
                    Basic Info
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Settings
                </TabPanel>
                <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                    </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
