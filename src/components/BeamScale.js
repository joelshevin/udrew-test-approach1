import React from "react";

const BeamScale = ({ width, yPosition }) => {
  return (
    <line
      x1="10"
      y1={yPosition / 10 + 20}
      x2={width / 10 - 10}
      y2={yPosition / 10 + 20}
      stroke="#000"
      stroke-width="1"
      marker-end="url(#arrowEnd)"
      marker-start="url(#arrowStart)"
    ></line>
  );
};

export default BeamScale;
