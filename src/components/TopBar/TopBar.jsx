
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
      console.log(GetToken())
      navigate({ pathname: "/" });
    }


  return (
      <Button variant="contained" onClick={disconnect}>Deconnecter</Button>
  )
}

const TopBar = () => {
  
  const connected = () => {
    const c = !(GetToken() == "null")  && !(GetToken() == "fail") && (GetToken() != null)
    
    console.log("connected" + GetToken())
    console.log("connected q" + c)
    return c ;
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
            {connected() && 
            <>
            <div id="ajouter">
              <Link to="/add">
                <Button >ajouter</Button>
              </Link>
            </div>
            <Deconnexion/></>}
          </div>
        </div>
    );
}

export default TopBar;