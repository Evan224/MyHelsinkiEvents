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


const theme = createTheme()

export default function SignInSide (): JSX.Element {
  // react Router params
  const location = useLocation()
  const [formState, setFormState] = useState(location.state?.formState||'login' )
  const state=useAuth();
  const navigate=useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()||""
    const password = data.get('password')?.toString()||""
    if(!state){
      return;
    }
    if(formState==='login'){
      const status=state.handleLogin(email,password)
      if(status){
        navigate('/')
      }
    }else if(formState==='signup'){
      const status=state.handleSignUp(email,password);
      if(status){
        navigate('/')
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
