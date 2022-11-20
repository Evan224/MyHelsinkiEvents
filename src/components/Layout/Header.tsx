import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import EventIcon from '@mui/icons-material/Event'
import { useEffect, useState,useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Tabs from '@mui/material/Tabs'
import LinkTab from '@mui/material/Tab'
import { useAuth } from '@/Auth'
import ConfirmBox from '../Confirm'

const title= 'Are you sure you want to logout?'
const content="You can not get your personal recommendations if you logout."

const menu= [
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
  },
  {
    name: 'Manage',
    path: '/managepage'
  }
]

const getValueIndex= (path: string|boolean) => {
  const index = menu.findIndex((item) => item.path === path)
  if(index === -1) return false;
  return index;
}

const Tabmenu = (): JSX.Element => {
  const location = useLocation()
  const [value, setValue] = useState<number|boolean>(getValueIndex(location.pathname));

  const state=useAuth()
  const newMenu = useMemo(() => {
    if(state?.userType==="user"){
      return menu.slice(0,4)
    }else if(state?.userType==="admin"){
      return menu
    }else{
      return menu.slice(0,3)
    }
  }, [state?.userType])

  useEffect(() => {
    const newValue=getValueIndex(location.pathname)
    setValue(newValue)
  }, [location.pathname])

  const navigate = useNavigate()
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    event.preventDefault()
    if(Number(newValue)<0){
      setValue(false)
    }else{
      setValue(Number(newValue))
    }

    navigate(menu[Number(newValue)].path)
  }
  return (
    <Tabs value={value} onChange={handleChange}>
      {newMenu.map((item, index) => {
        return (
          <LinkTab key={item.path} href={item.path} label={item.name} />
        )
      })}
    </Tabs>
  )
}



export default function Header (): JSX.Element {
  const navigate = useNavigate()
  const state = useAuth();

  const [open, setOpen] = useState(false);

  const LogoutCallback = (ifLogout) => {
    if(ifLogout){
      state?.handleLogout();
    }
    setOpen(false);
  }

  const handleClick=()=>{
    if(state?.userType){
      setOpen(true);
    }else{
      navigate('/loginpage')
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="w-full px-auto">
      <ConfirmBox open={open} handleClose={LogoutCallback} title={title} content={content}></ConfirmBox>
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
          <Tabmenu />
          <Avatar alt="Remy Sharp" src="" sx={{ width: 30, height: 30, margin: 2 }} />
          <Button color="inherit" sx={{
          }} onClick={() => {handleClick()}}>{
            state?.userType ? 'Logout' : 'Login'
          }</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
