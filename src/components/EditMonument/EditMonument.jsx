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
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export default function EditMonument() {

    
  let { id } = useParams();
  const[nom,setNom]=React.useState("");
  const[description,setDescription]=React.useState("");
  const[longitude,setLongitude]=React.useState("");
  const[latitude,setLatitude]=React.useState("");
  const[ville,setVille]=React.useState("");
  const[img1,setImg1]=React.useState("");
  const[img2,setImg2]=React.useState("");
  const[img3,setImg3]=React.useState("");
  const navigate = useNavigate();

  React.useEffect( () => { 
    
        const link = 'http://localhost:8080/monument?id='+id;
        const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        //body: JSON.stringify({ email: email, password: password })
    };
    fetch(link,requestOptions).then(res => res.json())
            .then(Monument => {
                console.log(Monument);
                setNom(Monument.nom);
                setDescription(Monument.description);
                setLongitude(Monument.coordinate.longitude);
                setLatitude(Monument.coordinate.latitude);
                setVille(Monument.ville.nom);
                setImg1(Monument.liensImage[0]);
                setImg2(Monument.liensImage[1]);
                setImg3(Monument.liensImage[2]);
            });
   
    }
  ,[]);

  const handleClick =async (e) => {
    e.preventDefault() ;
    const MonumentUpdated =
    {
    "id": id,
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

    const link = 'http://localhost:8080/monument/edit';
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(MonumentUpdated)
    };
     fetch(link,requestOptions)
     .then(navigate("/monument/"+id));
  }
  return (
    <div className="App">
      <div>
          <h1>Edit the monument </h1>
      </div>

      <form>
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={nom }
          label="Nom"
          variant="outlined"
          onChange={(event) =>setNom(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={description}
          label="Description"
          variant="outlined"
          onChange={(event) =>setDescription(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={longitude}
          label="Longitude"
          variant="outlined"
          onChange={(event) =>setLongitude(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={latitude}
          label="Latitude"
          variant="outlined"
          onChange={(event) =>setLatitude(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={ville}
          label="Ville"
          variant="outlined"
          onChange={(event) =>setVille(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={img1}
          label="Image Link 1"
          variant="outlined"
          onChange={(event) =>setImg1(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={img2}
          label="Image Link 2"
          variant="outlined"
          onChange={(event) =>setImg2(event.target.value)}
        />
        <br />
        <TextField
          style={{ width: "500px", margin: "5px" }}
          type="text"
          value={img3}
          label="Image Link 3"
          variant="outlined"
          onChange={(event) =>setImg3(event.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={handleClick}   >
          Edit
        </Button>
      </form>
    </div>
  );
}
