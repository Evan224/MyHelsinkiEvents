import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import EventIcon from '@mui/icons-material/Event'
import { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Avatar from '@mui/material/Avatar'
import Tabs from '@mui/material/Tabs'
import LinkTab from '@mui/material/Tab'
import PhoneIcon from '@mui/icons-material/Phone'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import { useLocation, useNavigate } from 'react-router-dom'

const menu = [
  {
    name: 'Home',
    path: '/homepage'
  },
  {
    name: 'Event',
    path: '/eventlist'
  },
  {
    name: 'Info',
    path: '/informationpage'
  },
  {
    name: 'Profile',
    path: '/ProfilePage'
  }
]

const Tabmenu = (): JSX.Element => {
  const location = useLocation()
  const [value] = useState(menu.findIndex((item) => item.path === location.pathname))

  return (
    <Tabs value={value} >
      {menu.map((item, index) => {
        return (
          <LinkTab key={item.path} href={item.path} label={item.name}/>
        )
      })}
    </Tabs>
  )
}

export default function Header (): JSX.Element {
  const navigate = useNavigate()
  const [login, setLogin] = useState(false)
  return (
    <Box sx={{ flexGrow: 1 }} className="w-full px-auto">
      <AppBar position="static" color="transparent" >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <EventIcon color="primary"/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome To Helsinki Events!
          </Typography>
          <Tabmenu/>
          <Avatar alt="Remy Sharp" src="" sx={{ width: 30, height: 30, marginRight: 2 }} />
          <Button color="inherit" sx={{
            display: login ? 'none' : 'block'
          }} onClick={() => { navigate('/loginpage') }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
