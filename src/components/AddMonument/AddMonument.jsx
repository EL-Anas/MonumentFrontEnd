import * as React from "react";
import "./Styles.css";
import {
  Typography,
  AppBar,
  Toolbar,
  TextField,
  Button,
  Box
} from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';

export default function AddMonument() {

  const[nom,setNom]=React.useState("");
  const[description,setDescription]=React.useState("");
  const[longitude,setLongitude]=React.useState("");
  const[latitude,setLatitude]=React.useState("");
  const[ville,setVille]=React.useState("");
  const[img1,setImg1]=React.useState("");
  const[img2,setImg2]=React.useState("");
  const[img3,setImg3]=React.useState("");
  const[submit,setSubmit]=React.useState(false);
  const[returnid,setReturnId]=React.useState("fail");
  const navigate = useNavigate();
  const handleEmptyValidation=(field)=>{
    if(submit)
      return field!=="";
    return true;
}
const verifyAllFields=()=>{
  setSubmit(true);
  return handleEmptyValidation(nom)&&handleEmptyValidation(longitude)&&handleEmptyValidation(latitude)&&handleEmptyValidation(ville)&&handleEmptyValidation(img1);
}
const redirect=(field)=>{
  if(field!=="fail"){
    setTimeout(() => {  navigate("/monument/"+field); }, 2000);
  }
}
  const handleClick =async (e) => {
    e.preventDefault() ;
    const Monument =
    {
    "id": "1",
    "nom": nom,
    "description": description,
    "coordinate": {
        "latitude": latitude,
        "longitude": longitude
    },
    "liensImage": [
        img1,img2,img3
    ],
    "ville": {
        "nom": ville,
        "description": ville
    },
    "evaluations": [],
    "rating": 0.0
} 

    const link = 'http://10.72.126.185:8080/monument/add';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Monument)
    };
     if(verifyAllFields()){fetch(link,requestOptions).then(res=>res.text()).then(returnid=>{setReturnId(returnid);redirect(returnid)});}
  }
  return (
    <div className="App">
      <div>
          <h1>Add a monument </h1>
      </div>

      <form>
        <TextField
          required
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Nom"
          variant="outlined"
          onChange={(event) =>setNom(event.target.value)}
          error={!handleEmptyValidation(nom)}
        />
        <br />
        <TextField
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Description"
          variant="outlined"
          onChange={(event) =>setDescription(event.target.value)}
        />
        <br />
        <TextField
          required
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="number"
          label="Longitude"
          variant="outlined"
          onChange={(event) =>setLongitude(event.target.value)}
          error={!handleEmptyValidation(longitude)}
        />
        <br />
        <TextField
          required
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="number"
          label="Latitude"
          variant="outlined"
          onChange={(event) =>setLatitude(event.target.value)}
          error={!handleEmptyValidation(latitude)}
        />
        <br />
        <TextField
          required
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Ville"
          variant="outlined"
          onChange={(event) =>setVille(event.target.value)}
          error={!handleEmptyValidation(ville)}
        />
        <br />
        <TextField
          required
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Image Link 1"
          variant="outlined"
          onChange={(event) =>setImg1(event.target.value)}
          error={!handleEmptyValidation(img1)}
        />
        <br />
        <TextField
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Image Link 2"
          variant="outlined"
          onChange={(event) =>setImg2(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "100%" ,maxWidth: "500px", margin: "5px" }}
          type="text"
          label="Image Link 3"
          variant="outlined"
          onChange={(event) =>setImg3(event.target.value)}
        />
        <br />
        {returnid!=="fail"&&<Alert variant="filled" severity="success">Monument bien créé!</Alert>}
        <br />
        <Button variant="contained" color="primary" onClick={handleClick} >
          Add
        </Button>
      </form>
    </div>
  );
}
