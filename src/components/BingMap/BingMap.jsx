import React from "react";
import BingMapsReact from "bingmaps-react";


function BingMap() {

    const pushPin = {
        center: {
          latitude:33.9716,
          longitude: -6.8498 
        },
        options: {
          title: "Rabat",
        },
      }
      
      const pushPins = [pushPin];
    return (
      <>

      <BingMapsReact 
          bingMapsKey="AqGkcBGlvUtmyTLRO92iRnY_JwF18Q49sJc0XqNKfznkPk-1AaW4XgkSWM5YdhSd"
          pushPins={pushPins}
          height="500px"
          mapOptions={{
            navigationBarMode: "square",
          }}
        
          width="800px"
          viewOptions={{ center: { latitude:33.9716,longitude: -6.8498 } }} />

      </>
    );
  }

  export default BingMap;