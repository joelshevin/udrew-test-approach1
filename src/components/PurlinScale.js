import React, { useContext } from "react";

import PurlinMeasurement from "./PurlinMeasurement";

const PurlinScale = ({ position1, position2, width }) => {
  if (isNaN(position2)) {
    return <></>;
  }

  return (
    <>
      <defs>
        <marker
          id="startarrow"
          borderWidth="10"
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
        x1={width / 10 + 20}
        y1={position1 / 10 + 10}
        x2={width / 10 + 20}
        y2={position2 / 10 - 5}
        stroke="#000"
        stroke-width="1"
        marker-end="url(#endarrow)"
        marker-start="url(#startarrow)"
      ></line>
      <PurlinMeasurement
        measurement={position2 / 10 - position1 / 10}
        position={(position1 + position2) / 10}
      />
    </>
  );
};

export default PurlinScale;
