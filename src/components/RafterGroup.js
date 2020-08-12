import React from "react";
import Rafter from "./Rafter";

const RafterGroup = ({ rafterPositions, length, width }) => {
  if (width > 3500) {
    rafterPositions.push(width / 2 - 50);
  }
  return (
    <g id="rafters">
      {rafterPositions.map((rafterPosition, index) => (
        <Rafter key={index} rafterPosition={rafterPosition} length={length} />
      ))}
    </g>
  );
};

export default RafterGroup;
