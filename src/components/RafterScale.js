import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const RafterScale = () => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length;
  const yPosition = dimensions.width;

  return (
    <>
      <defs>
        <marker
          id="startarrow"
          markerWidth="10"
          markerHeight="7"
          refX="10"
          refY="3.5"
          orient="auto"
        >
          <polygon points="10 0, 10 7, 0 3.5" fill="red" />
        </marker>
        <marker
          id="endarrow"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="red" />
        </marker>
      </defs>
      <line
        x1={yPosition / 10 + 110}
        y1="10"
        x2={yPosition / 10 + 110}
        y2={length / 10}
        stroke="#000"
        stroke-width="1"
        marker-end="url(#endarrow)"
        marker-start="url(#startarrow)"
      ></line>
    </>
  );
};

export default RafterScale;
