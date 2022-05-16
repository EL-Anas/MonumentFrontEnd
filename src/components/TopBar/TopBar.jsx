
import React from 'react';
import { Button } from '@mui/material';

import './topbar.css';

import logo from '../../ressources/logo.webp';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div id="topbar">
          <div id="homebutton">
          <Link to="/">
            <img src={logo} height="50px"/>

          </Link>
          </div>
          <div id="login">
              <Button variant="contained" >Connexion</Button>
          </div>
        </div>
    );
}

export default TopBar;