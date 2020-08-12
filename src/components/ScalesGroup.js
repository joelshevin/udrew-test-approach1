import React from "react";
import BeamScale from "./BeamScale";
import RafterScale from "./RafterScale";
import PurlinScalePlacement from "./PurlinScalePlacement";

const ScalesGroup = ({ noOfPurlins, initialLength, length, width }) => {
  return (
    <g id="scales">
      <BeamScale width={width} yPosition={length}></BeamScale>
      <RafterScale length={length} yPosition={width}></RafterScale>
      <PurlinScalePlacement
        noOfPurlins={noOfPurlins}
        initialLength={initialLength}
        width={width}
        length={length}
      />
    </g>
  );
};

export default ScalesGroup;
