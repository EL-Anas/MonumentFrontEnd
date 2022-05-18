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

export default function AddMonument() {

  const[nom,setNom]=React.useState("");
  const[description,setDescription]=React.useState("");
  const[longitude,setLongitude]=React.useState("");
  const[latitude,setLatitude]=React.useState("");
  const[ville,setVille]=React.useState("");
  const[img1,setImg1]=React.useState("");
  const[img2,setImg2]=React.useState("");
  const[img3,setImg3]=React.useState("");
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

    const link = 'http://localhost:8080/monument/add';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Monument)
    };
     fetch(link,requestOptions);
  }
  return (
    <div className="App">
      <div>
          <h1>Add a monument </h1>
      </div>

      <form>
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Nom"
          variant="outlined"
          onChange={(event) =>setNom(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Description"
          variant="outlined"
          onChange={(event) =>setDescription(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="number"
          label="Longitude"
          variant="outlined"
          onChange={(event) =>setLongitude(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="number"
          label="Latitude"
          variant="outlined"
          onChange={(event) =>setLatitude(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Ville"
          variant="outlined"
          onChange={(event) =>setVille(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Image Link 1"
          variant="outlined"
          onChange={(event) =>setImg1(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Image Link 2"
          variant="outlined"
          onChange={(event) =>setImg2(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Image Link 3"
          variant="outlined"
          onChange={(event) =>setImg3(event.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick} >
          Add
        </Button>
      </form>
    </div>
  );
}
