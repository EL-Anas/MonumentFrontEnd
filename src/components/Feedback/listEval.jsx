import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import DeletMonument from "../ButtonsAdmin/DeletMonument";
import DeleteEvaluation from "../ButtonsAdmin/DeletEvaluation";
import DeleteUser from "../ButtonsAdmin/DeleteUser";
export default function ListEval(props){
  //props : id
  const data=props.list;
    return(
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {data.map((item) =>{
          return(
            <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              
              
              <ListItemText
                primary={<> {item.editeur.nomComplet}<DeleteUser id={item.editeur.id}></DeleteUser></> }
                
                secondary={
                  <>
                  <Rating  precision={0.5} value={parseInt(item.note)} size="small" readOnly />
                  <br/>
                  <React.Fragment>
                    
                    {<Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.commentaire}
                    </Typography>}
                  </React.Fragment></>
                }
              />
                <DeleteEvaluation style={{margin: "auto"}} id={item.id}></DeleteEvaluation>
            </ListItem>
            
            <Divider variant="inset" component="li" /></>

    )})}</List></>);
}