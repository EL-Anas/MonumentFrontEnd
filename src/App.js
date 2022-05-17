import React, { useState,useEffect } from 'react';
import "./App.css";
import SearchPage from "./pages/SearchPage"

import {
    BrowserRouter as Router,
    Routes,
    Route,

} from 'react-router-dom';
import Home from './pages/Home';
import { Button } from '@mui/material';
import logo from './ressources/logo.webp';
import TopBar from './components/TopBar/TopBar';
import Monumentinfo from './components/MonumentDetail/Monumentinfo';

import Testfooter from './components/Footer/footer';

import Login from './components/Login/Login';
import { useLocation } from 'react-router-dom';
import SignUp from './components/Signup/SignUp';
import AddMonument from './components/AddMonument/AddMonument';


function App() {

    const location = useLocation();
    const path = location.pathname;
    const notAuth = path !== '/login' && path !== '/signup';
  
    

  return (
    <div>
        
      {notAuth &&<TopBar/>}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/search' element={<SearchPage/>}></Route>
          <Route exact path='/monument/:id' element={<Monumentinfo/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/add' element={<AddMonument/>}></Route>
          {/* <Route exact path='/about' element={< About />}></Route> */}
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
    {notAuth &&<Testfooter/>}
    </div>
  );
}

export default App;
