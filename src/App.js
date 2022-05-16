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

function App() {


  return (
    <div>
        
      <Router>
      <TopBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/search' element={<SearchPage/>}></Route>
          <Route exact path='/monument/:id' element={<Monumentinfo/>}></Route>
          {/* <Route exact path='/about' element={< About />}></Route> */}
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
        </Routes>
    <Testfooter/>
      </Router>
    </div>
  );
}

export default App;
