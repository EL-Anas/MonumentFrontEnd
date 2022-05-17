
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
import Container from '@mui/material/Container';
import logo from '../../ressources/logo.webp';
import AuthNew from './AuthNew';
import {useNavigate} from 'react-router-dom';
import useEffect from "react"


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

const SignUp = () => {
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[nom,setNom]=useState("");
    const[prenom,setPrenom]=useState("");
    const[submit,setSubmit]=useState(false);
    const[token,setToken]=useState("");
    const[created,setCreated]=useState(false);
    const handleEmailValidation=(field)=>{
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(submit)
        return  regex.test(field)&token!=="fail";
      return true;
    }
    const handleEmptyValidation=(field)=>{
      if(submit)
        return field!=="";
      return true;
  }
    const redirect=(field)=>{
      if(field){
        setTimeout(() => {  navigate("/login"); }, 2000);
      }
    }
    const handleSubmit = (event) => {
      setSubmit(true);
      console.log(nom,prenom,email,password,submit)
      event.preventDefault();
      AuthNew(email,password,nom,prenom).then((token)=>{setToken(token);setCreated(token!=="fail");redirect(token!=="fail") ;console.log(token)});
      
  };
    
    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm"  sx= {{
          backgroundColor: 'white',
          paddingTop: 8,
          borderRadius: 2,
          height: "100vh",
          marginRight: 0,
        }}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              S'inscrire
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={(event) =>setPrenom(event.target.value)}
                    error={!handleEmptyValidation(prenom)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={(event) =>setNom(event.target.value)}
                    error={!handleEmptyValidation(nom)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(event) =>setEmail(event.target.value)}
                    error={!handleEmailValidation(email)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(event) =>setPassword(event.target.value)}
                    error={!handleEmptyValidation(password)}
                  />
                </Grid>
              </Grid>
              {token==="fail"&&<Alert variant="filled" severity="error">Email existe déja!</Alert>}
              {created&&<Alert variant="filled" severity="success">Compte bien créé!</Alert>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                S'inscrire
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Déja inscrit? Connectez-vous
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
}

export default SignUp;