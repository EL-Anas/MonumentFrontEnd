import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DownloadIcon from '@mui/icons-material/Download';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import Imageslider from './Imageslider';
import "./card.css"
import ListEval from '../Feedback/listEval';
import Evaluer from '../Feedback/Evaluer';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Monumentinfo(props) {
  //props: idMonument , userId , userNom
  const [expanded, setExpanded] = useState(false);
  const [monument,setMonument]=useState({});
  const [desc,setDesc]=useState("");
  const [ville,setVille]=useState({});
  const[image,setImage]=useState([]);
  const [nom,setNom]=useState("");
  const [evaluation,setEval]=useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect (() => {

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://10.72.176.246:8080/monument?id=" +props.idMonument, requestOptions)
      .then((response) => response.json())
      .then((data) => {setMonument(data);setNom(data.nom);setDesc(data.description);setVille(data.ville);setImage(data.liensImage);setEval(data.evaluations);console.log(data)});},[monument])
  return (
      <div className="divM">
    <Card className="Card" >
      <CardHeader style={{textAlign: "center",}}
        title={nom}
        subheader={ville.nom}
      />
      <Imageslider listimage={image}/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Evaluer idMonument={props.idMonument} id={props.userId} nom={props.userNom}/>
        </IconButton>
        <IconButton aria-label="Download pdf">
          <DownloadIcon onClick={()=> window.open("http://10.72.176.246:8080/pdf/"+props.idMonument, "_blank")}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ListEval list={evaluation}/>
        </CardContent>
      </Collapse>
    </Card>
    </div>
  );
}