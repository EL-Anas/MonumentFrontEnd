
import React from "react";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import './home.css';
import logo from '../ressources/logo-extend.webp';
import { useNavigate, createSearchParams } from "react-router-dom";


const Home = () => {

    const [motcle, setMotcle] = useState("");
    const onTextChange = (e) => {
      setMotcle(e.target.value);
    }

    const navigate = useNavigate();
    const search = (e) => {
        if(e.keyCode !== 13) return;

        navigate({ pathname: "search", search:  createSearchParams({
                motCle: motcle
            }).toString()
        });
    }

    return (
       <div id="home">
           
        <div id="logo">
            <img src={logo} width="100%"/>
        </div>
        <div id="mainSearch">
            <TextField fullWidth 
            value={motcle}
            onChange={onTextChange}
            onKeyUp = {search}

            label="Search" variant="outlined" />
 
        </div>
       </div>
    );
}

export default Home;