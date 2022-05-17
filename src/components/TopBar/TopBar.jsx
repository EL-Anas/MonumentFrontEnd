
import React from 'react';
import { Button } from '@mui/material';

import './topbar.css';

import logo from '../../ressources/logo.webp';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import GetToken from "../../persistance/GetToken";
import SaveToken from "../../persistance/SaveToken";




const Connexion = () => {

    const navigate = useNavigate();
    const login = () => {
      navigate({ pathname: "login" });
    }


  return (
              <Button variant="contained" onClick={login}>Connexion</Button>
  )
}

const Deconnexion = () => {

    const navigate = useNavigate();
    const disconnect = () => {
      SaveToken(null);
      navigate({ pathname: "/" });
    }


  return (
      <Button variant="contained" onClick={disconnect}>Deconnecter</Button>
  )
}

const TopBar = () => {
  
  const connected = () => {
    return GetToken() != null && GetToken() != 'fail' ;
  }

    return (
        <div id="topbar">
          <div id="homebutton">
          <Link to="/">
            <img src={logo} height="50px"/>

          </Link>
          </div>
          <div id="login">

            {!connected() && <Connexion/>}
            {connected() && <Deconnexion/>}

          </div>
        </div>
    );
}

export default TopBar;