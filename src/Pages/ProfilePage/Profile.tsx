import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar, Button, CardActionArea, CardActions } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '../EventListPage/TabPanel'
import BasicInfo from './BasicInfo'
import SettingsForm from './SettingsPage'
import MyEventList from './MyEventList'
import EventList from '@/components/EventList'
import SimpleBackdrop from '@/components/SimpleBackdrop'

export default function ProfileCard (props): JSX.Element {
  const [value, setValue] = React.useState(0)
  // const loading= React.useMemo(()=>{
  //   if(props.id){
  //     return false
  //   }else{
  //     return true
  //   }
  // },[props.id])
  

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }
  return (
    <Card sx={{ width: '90%' }}>
        {/* <SimpleBackdrop open={loading}/> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="flex">
            <Avatar sx={{ height: 80, width: 80 }} src={props.avatarUrl}></Avatar>
            <div className='flex flex-col justify-around p-5'>
              <Typography variant="h6" component="div">
                  {props.username}
              </Typography>
              <Typography variant="body2" component="div">
                  {props.shortIntroduction||"The user has not set a introduction yet."}
              </Typography>
            </div>
            {/* <Button size="small" variant="contained" className='self-end p-5'>
              Follow
            </Button> */}

          </Typography>
          <Box sx={{ width: '100%', minHeight: '60vh' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Information" />
                    {/* <Tab label="Settings" /> */}
                    <Tab label="Events" />
                    </Tabs>
                    </Box>
                <TabPanel value={value} index={0}>
                    <BasicInfo {...props}/>
                </TabPanel>
                        <TabPanel value={value} index={1}>
                           <MyEventList />
                        </TabPanel>
                    </Box>
        </CardContent>
    </Card>
  )
}
