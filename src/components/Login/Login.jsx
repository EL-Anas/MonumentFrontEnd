
import React, { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../../ressources/logo.webp';
import {useNavigate} from 'react-router-dom';
import Auth from './Auth';
import GetToken from "../../persistance/GetToken";
import SaveToken from "../../persistance/SaveToken";
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="/">
          Monument Bladi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[submit,setSubmit]=useState(false);
    const[token,setToken]=useState("");
    const handleEmailValidation=(field)=>{
      if(submit)
        return field!==""&&token!=="fail";
      return true;
    }
    const handlePasswordValidation=(field)=>{
      if(submit)
        return field!==""&&token!=="fail";
      return true;
  }
  const redirect=(field)=>{
    if(field){
      navigate("/");
    }
  }
    const handleSubmit = (event) => {
    setSubmit(true);
    event.preventDefault();
    Auth(email,password).then((token)=>{setToken(token); SaveToken(token);console.log(GetToken());redirect(token!=="fail")});
    
  };
    return (
            <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            background: 'transparent',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Se connecter
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
                onChange={(event) =>setEmail(event.target.value)}
                error={!handleEmailValidation(email)}
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
                onChange={(event) =>setPassword(event.target.value)}
                error={!handlePasswordValidation(password)}
              />
              {token==="fail"&&<Alert variant="filled" severity="error">Mot de passe ou email incorrect!</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Pas de compte? Inscrivez-vous"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    );
}

export default Login;