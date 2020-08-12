import React from "react";

const RafterMeasurement = ({ measurement, length, width }) => {
  const position = {
    transform: `translate(${width + 120}px, ${length / 2}px)`,
  };

  return (
    <>
      <text style={position}>{measurement}mm</text>
    </>
  );
};

export default RafterMeasurement;
