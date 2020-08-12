import React from "react";
import RafterCallout from "./RafterCallout";
import ColumnCallout from "./ColumnCallout";

const CalloutGroup = ({ length, width }) => {
  return (
    <g id="callouts">
      <RafterCallout length={length} />
      <ColumnCallout length={length} width={width} />
    </g>
  );
};

export default CalloutGroup;
