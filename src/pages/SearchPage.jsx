import { TextField } from "@mui/material";
import React from "react";
import MonumentCard from "../components/MonumentCard/MonumentCard";
import './search.css'

import { MapContainer, TileLayer, Marker, Popup, MapConsumer, useMap, useMapEvent} from 'react-leaflet';
import { useState, useEffect } from "react";
import MapLeaf from "../components/Map/map";
import { SetMealSharp } from "@mui/icons-material";
import { useSearchParams } from "react-router-dom";



const Home = () => {
  const [motcle, setMotcle] = useState("");
  const [monuments, setMonuments] = useState([]);
  const [monumentName, setMonumentName] = useState("");
  const [position, setPosition] = useState({ lat: 34, lng: -5 });
  const [map, setMap] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setMotcle(searchParams.get('motCle'));
    getMonumentsFirst(searchParams.get('motCle'));
  },[]);

  const getMonumentsFirst =(motcle)=>{
    let link = 'http://10.72.126.185:8080/search?motClets='+encodeURIComponent(motcle.split(" ").join(","));
    if (motcle == '')
      link ='http://10.72.126.185:8080/search';

    fetch(link)
      .then(response => response.json())
      .then(data => {
        setMonuments(data);
        console.log(data);
      })
      .catch(err => console.log(err));

  }

  const getMonuments = () => {
    getMonumentsFirst(motcle);

  }


  const onTextChange = (e) => {
    setMotcle(e.target.value);

  }

  const search= (e)=> {
    if(e.keyCode === 13) {
      getMonuments();
    }
  }
  
  const getImage = (lienarr) => {
    if (lienarr.lenght ==0)
      return null;
    return lienarr[0];

  }
  const getfirst = () => {
    if (monuments.length ==0) {
      setMonumentName("");
      setPosition({ lat: 34, lng: -5 });
      return;
    }

    setMonumentName(monuments[0].nom);
    setPosition({lat:monuments[0].coordinate.latitude, lng: monuments[0].coordinate.longitude});
    console.log(position)

  }
  const setMonument =(name, latitude, longitude) => {
    setMonumentName(name);
    console.log(latitude,longitude)
    setPosition({lat:latitude, lng: longitude});


  }

  useEffect(() => {
    getfirst();
  },[monuments]);

  useEffect(() => {
    if (map) map.flyTo(position,map.getZoom())
  },[position]);
  return (
    

    <div class="container">
        <TextField fullWidth 
        value={motcle}
        onChange={onTextChange}
        onKeyUp = {search}

        id="outlined-basic" label="Search" variant="outlined" />



<div class="result">

    <div class="map">
         <MapContainer center={[34,-5]} zoom={13} whenCreated={map=> setMap(map)}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
          <Popup>
            <h3>{monumentName}</h3>
          </Popup>
        </Marker>

    </MapContainer>
                </div>
    <div class="cardsContainer">
        {monuments.map((monument) => 
        <div class="mCard">
            <MonumentCard longitude={monument.coordinate.longitude} latitude={monument.coordinate.latitude} nom={monument.nom} description={monument.description} image={getImage(monument.liensImage)} onChose={setMonument} id={monument.id}/>
        </div>

        )}

        
       
      
    </div>
</div>
    </div>
  );
};

export default Home;