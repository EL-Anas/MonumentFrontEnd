import React, { useState,useEffect } from 'react';
import Header from "./components/Header/Header";
import MapLeaf from "./components/Map/map";
import { MapContainer, TileLayer, Marker, Popup, MapConsumer, useMap, useMapEvent} from 'react-leaflet';
import getPlacesData from "./api/Data" ;
import "./App.css";
import data from "./api/Fez";


function MyMap() {
  const map = useMapEvent('dragend', () => {
    console.log('map center:', map.getBounds())
  })
  //const map = useMap()
  //console.log('map center:', map.getBounds())
  return null
}

function App() {

  const coord=data.data.filter((item)=> item.latitude && item.longitude);
  const [places,setPlaces]=useState([])
  

  useEffect(() => {

    //getPlacesData().then(data=> console.log(data))
    getPlacesData().then(data=> setPlaces(data.filter((item)=> item.latitude && item.longitude)))
    
  }, []);






  return (
    <div id="map">
      <button onClick={()=>{getPlacesData().then(data=> console.log(data))}}>test</button>
    <MapContainer center={[35, -5]} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <MyMap></MyMap>
   
    {
    
      places.map((item)=>(
        <Marker key={item.location_id} position={[item.latitude, item.longitude]}>
          
         </Marker>
      ))
      
    }

   
  </MapContainer>
  </div>
    
  );
}

export default App;
