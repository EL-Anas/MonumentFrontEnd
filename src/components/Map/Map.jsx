import React from "react";
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react' ;
import { Paper , Typography , useMediaQuery} from '@material-ui/core' ;
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined' ;
import Rating from '@material-ui/lab' ;

import useStyles from "./Styles" ;


function Map() {
  const classes = useStyles() ;
  const coordinates = {lat:0 ,lng:0};
    return (
      <div className={classes.mapContainer} >
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyAl6o3AfF48NrOBuHZA0qlCf8RFWVtt4vM'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50,50,50,50]}
          options={''}
          onChange={''}
          onChildClick={''}
        >
        </GoogleMapReact>
      </div>
      
    );
  }
  
  export default Map;