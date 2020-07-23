import React from "react";

export const Column = ({ columnY, columnX }) => {
  return (
    <>
      <rect
        x={columnX / 10}
        y={columnY / 10}
        z-index="-1"
        height="10"
        width="10"
        stroke="black"
        stroke-width="1"
        fill="black"
      />
    </>
  );
};
export default Column;
