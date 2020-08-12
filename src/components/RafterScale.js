import React from "react";

const RafterScale = ({ length, yPosition }) => {
  return (
    <line
      x1={yPosition / 10 + 110}
      y1="10"
      x2={yPosition / 10 + 110}
      y2={length / 10}
      stroke="#000"
      stroke-width="1"
      marker-end="url(#arrowEnd)"
      marker-start="url(#arrowStart)"
    ></line>
  );
};

export default RafterScale;
