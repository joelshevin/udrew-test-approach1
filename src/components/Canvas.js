import React from "react";
import Definitions from "./Definitions";
import Markers from "./Markers";

const Canvas = ({ children }) => {
  return (
    <svg id="Canvas" width="1000" height="900">
      <Definitions>
        <Markers />
      </Definitions>
      {children}
    </svg>
  );
};

export default Canvas;
