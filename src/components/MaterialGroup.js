import React from "react";
import Material from "./Material";

const MaterialGroup = ({ sizes }) => {
  return (
    <g id="materials">
      {sizes.map(({ width, length }, index) => (
        <Material key={index} width={width} length={length} />
      ))}
    </g>
  );
};

export default MaterialGroup;
