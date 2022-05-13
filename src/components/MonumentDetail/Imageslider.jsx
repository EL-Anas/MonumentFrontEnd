import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./slider.css"
export default function  Imageslider (props){
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  const sliderItems = props.listimage;
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
    {sliderItems.map((item) =>
    <Carousel.Item>
      <img 
        className="d-block w-100 img"
        src={item}
        alt="First slide"

       
      />
    </Carousel.Item>
  )}
  </Carousel>
); 
};

