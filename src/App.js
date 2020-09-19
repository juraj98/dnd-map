import React from "react";
import PinchZoomPan from "react-image-zoom-pan";
import svg from "./Merral.svg";

const App = () => {
  console.log(svg);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <PinchZoomPan
        minScale={1}
        maxScale={25}
        initialScale={1}
        position="center"
      >
        <img alt="map" src={svg} />
      </PinchZoomPan>
    </div>
  );
};

export default App;
