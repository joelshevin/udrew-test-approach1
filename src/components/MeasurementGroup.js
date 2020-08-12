import BeamMeasurement from "./BeamMeasurement.js";
import RafterMeasurement from "./RafterMeasurement";

import React from "react";

const MeasurementGroup = ({ length, width }) => {
  return (
    <g id="measurements">
      <BeamMeasurement
        measurement={width}
        length={length / 10}
        width={width / 10}
      />
      <RafterMeasurement
        measurement={length}
        length={length / 10}
        width={width / 10}
      />
    </g>
  );
};

export default MeasurementGroup;
