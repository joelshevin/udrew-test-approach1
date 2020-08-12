import React from "react";

const BeamMeasurement = ({ measurement, length, width }) => {
  const position = {
    transform: `translate(${width / 2 - 20}px, ${length + 40}px)`,
  };

  return (
    <>
      <text style={position}>{measurement}mm</text>
    </>
  );
};

export default BeamMeasurement;
