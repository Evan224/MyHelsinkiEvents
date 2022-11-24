import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState,useContext} from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import { useAuth } from '@/Auth'
import messageService from '@/components/Message'
import SimpleBackdrop from '@/components/SimpleBackdrop'


const theme = createTheme()

export default function SignInSide (): JSX.Element {
  // react Router params
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [formState, setFormState] = useState(location.state?.formState||'login' )
  const state=useAuth();
  const navigate=useNavigate();

  const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()||""
    const username = data.get('username')?.toString()||""
    const password = data.get('password')?.toString()||""
    const confirm= data.get('confirm')?.toString()||""
    if(!state){
      return;
    }
    if(formState==='login'){
      setLoading(true)
      const status=await state.handleLogin(username,password)
      if(status){
        messageService.success({
          content:"Login successfully",
          duration:2000
        })
        navigate('/')
      }else{
        messageService.error({
          content:"Login failed",
          duration:2000
        })
      }
      setLoading(false)
    }else if(formState==='sign'){
      if(password===confirm){
        setLoading(true)
        const status=await state.handleSignUp(email,username,password)
        if(status){
          messageService.success({
            content:"Sign up successfully",
            duration:2000
          })
          setFormState('login')
        }else{
          messageService.error({
            content:"Sign up failed!",
            duration:2000
          })
        }
      }
      setLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <SimpleBackdrop open={loading}/>
      <Grid container component="main" sx={{
        height: '90vh',
        dipslay: 'flex'
      }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {formState === 'login' ? 'Log in' : 'Sign up'}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="username"
                name="username"
                autoComplete="username"
                autoFocus
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  display: formState === 'sign' ? '' : 'none'
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm"
                label="confirm"
                type="password"
                id="confirm"
                autoComplete="confirm-password"
                sx={{
                  display: formState === 'sign' ? 'block' : 'none'
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {formState === 'login' ? 'Log in' : 'Sign up'}
              </Button>
              <Grid container sx={{
              }}>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="#" variant="body2" onClick={
                    (e) => {
                      e.preventDefault()
                      if (formState === 'login') {
                        setFormState('sign')
                      } else {
                        setFormState('login')
                      }
                    }
                  }>
                    {formState === 'login' ? "Don't have an account? Sign Up" : 'Already have an account? Log in'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}
