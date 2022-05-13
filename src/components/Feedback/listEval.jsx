import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
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
                primary={item.editeur.nomComplet}
                
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
            </ListItem>
            <Divider variant="inset" component="li" /></>
           
            
          

    )})}</List></>);
}