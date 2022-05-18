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
import { useParams } from 'react-router-dom';
import GetToken from "../../persistance/GetToken";
import DeletMonument from '../ButtonsAdmin/DeletMonument';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
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
  let { id } = useParams();
  // , userId , userNom
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

  const getUserId = () => {
    if (GetToken() == null || GetToken() == 'fail')
      return -1;
    return GetToken().split("_")[0];
  }


  useEffect (() => {

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/monument?id=" +id, requestOptions)
      .then((response) => response.json())
      .then((data) => {setMonument(data);setNom(data.nom);setDesc(data.description);setVille(data.ville);setImage(data.liensImage);setEval(data.evaluations);});}
      ,[monument])
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
          <Evaluer idMonument={id} id={getUserId()} />
        </IconButton>
        <Button component={Link} to={"/edit/"+id} color="secondary">Modifier</Button>
        <DeletMonument idMonument={id}></DeletMonument>

        <IconButton aria-label="Download pdf">
          <DownloadIcon onClick={()=> window.open("http://localhost:8080/pdf/"+id, "_blank")}/>
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
