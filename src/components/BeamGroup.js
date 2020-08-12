import React from "react";
import Beam from "./Beam";

const BeamGroup = ({ beamPositions, width }) => {
  return (
    <g id="beams">
      {beamPositions.map((beamPosition, index) => (
        <Beam key={index} beamPosition={beamPosition} width={width} />
      ))}
    </g>
  );
};

export default BeamGroup;
