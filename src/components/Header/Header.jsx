import React from "react";
import {AppBar , Toolbar , Typography , InputBase , Box} from '@mui/material' ;
import SearchIcon from '@mui/icons-material/Search' ; 
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha } from '@mui/material/styles'
const  useStyles=makeStyles((theme) =>  makeStyles({
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
    },
    searchIcon: {
      padding: theme.spacing(0, 2), height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0), paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, transition: theme.transitions.create('width'), width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
      display: 'flex', justifyContent: 'space-between',
    },
  }));
const theme = createTheme();
function Header() {
    const classes = useStyles() ;
    return (
       <AppBar position ="static">
           <Toolbar className={classes.toolbar}>
               <Typography variant ="h5" className={classes.title}>
                    MyCompanion
               </Typography>
               <Box display="flex">
               <Typography variant ="h6" className={classes.title}>
                    Explore new places
               </Typography>
               <>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Search ..." classes ={{root :classes.inputRoot,input:classes.inputInput}}/>
                    </div>
               </>
               </Box>
           </Toolbar>
        </AppBar>
    );
  }
  
  export default Header;