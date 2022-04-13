import axios from 'axios' ;
import Monuments from './../data/Monuments.json';

const URL  = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '35.54966965358835',
    tr_latitude: '35.63127787662413',
    bl_longitude: '-5.41612477644019',
    tr_longitude: '-5.299704917068957',

  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'b6e016016dmsh499529b5689232cp1aad50jsnfaff3d992ab3'
  }
};
const options2 = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '35.54966965358835',
    tr_latitude: '35.63127787662413',
    bl_longitude: '-5.41612477644019',
    tr_longitude: '-5.299704917068957',

  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '9343c71d4cmshec710a29ca7965ep1146c8jsn2aa3b60d4905'
  }
};

 

 const getPlacesData = async () => {
    // try {
    //     const data = await axios.request(options2);
    //     return data.data.data ;
    // }
    // catch (error ) {
    //     console.log(error) ;
    // }
    return Monuments;
}

export default getPlacesData;