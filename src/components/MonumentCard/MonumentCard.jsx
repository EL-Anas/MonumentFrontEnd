import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link , createSearchParams} from 'react-router-dom';


export default function MonumentCard(props) {
  let title = "?id="+props.nom;

  const params = { id: props.id };


  return (
    <Card sx={{ display: 'flex' , maxWidth: 900, maxHeight: 150 }}>
      <CardActionArea sx= {{display: 'flex', justifyContent: 'flex-start'}} onClick={() => props.onChose(props.nom,props.latitude,props.longitude)}>
          
        <CardMedia
          component="img"
          height="150"
          sx={{ width: 1/3 }}
          image={props.image}
          alt="monument picture"
        />
        <CardContent sx={{}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.nom}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={{
        pathname: "/monument/"+props.id,
        }}>
        <Button size="small" color="primary">
          Details
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}