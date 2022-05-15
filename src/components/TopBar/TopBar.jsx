
import React from 'react';
import { Button } from '@mui/material';

import './topbar.css';

import logo from '../../ressources/logo.webp';

const TopBar = () => {
    return (
        <div id="topbar">
          <div id="homebutton">
            <img src={logo} height="50px"/>

          </div>
                <div id="login">
                    <Button variant="contained" >Connexion</Button>
                </div>
        </div>
    );
}

export default TopBar;