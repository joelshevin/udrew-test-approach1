import React from "react";

const Markers = () => {
  return (
    <>
      <marker
        id="arrowStart"
        markerWidth="10"
        markerHeight="7"
        refX="10"
        refY="3.5"
        orient="auto"
      >
        <polygon points="10 0, 10 7, 0 3.5" fill="red" />
      </marker>
      <marker
        id="arrowEnd"
        markerWidth="10"
        markerHeight="7"
        refX="0"
        refY="3.5"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="red" />
      </marker>
    </>
  );
};

export default Markers;
