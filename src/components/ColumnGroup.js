import React from "react";
import Column from "./Column";

const ColumnGroup = ({ columnPositions }) => {
  return (
    <g id="columns">
      {columnPositions.map(({ columnY, columnX }) => (
        <Column columnY={columnY} columnX={columnX} />
      ))}
    </g>
  );
};

export default ColumnGroup;
