import styles from "./Beam.module.css";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const BeamScale = () => {
  const dimensions = useContext(DimensionContext);
  const width = dimensions.width;
  const yPosition = dimensions.length;

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
        x1="10"
        y1={yPosition / 10 + 20}
        x2={width / 10 - 10}
        y2={yPosition / 10 + 20}
        stroke="#000"
        stroke-width="1"
        marker-end="url(#endarrow)"
        marker-start="url(#startarrow)"
      ></line>
    </>
  );
};

export default BeamScale;
