import React , { useState } from "react";
import {Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core' ;
import useStyles from './Styles' ;
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = (() => {
  const [rating,setRating] =useState('');
  const [type,setType] =useState('restaurants');
  const classes = useStyles();
  
  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurants,Hotels and Attractions around you</Typography>
    
        <>
          <FormControl className={classes.formControl}>
            <InputLabel id="type">Type</InputLabel>
            <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="rating">Rating</InputLabel>
            <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3">Above 3.0</MenuItem>
              <MenuItem value="4">Above 4.0</MenuItem>
              <MenuItem value="4.5">Above 4.5</MenuItem>
            </Select>
          </FormControl>
         
          
        </>
    </div>
  );
});

  
  export default List;