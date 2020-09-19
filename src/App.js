import React from "react";
import PinchZoomPan from "react-image-zoom-pan";
import svg from "./Merral.svg";

const App = () => {
  console.log(svg);
  return (
    <div style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}>
      <PinchZoomPan maxScale={25}>
        <img alt="map" src={svg} />
      </PinchZoomPan>
    </div>
  );
};

export default App;
