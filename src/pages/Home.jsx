import React from "react";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import List from "../components/List/List";
import BingMap from "../components/BingMap/BingMap";

const Home = () => {
  return (
    <div>
      
      <Header />
      <List/>
      
      <Slider />
      
      <BingMap/>
    </div>
  );
};

export default Home;
