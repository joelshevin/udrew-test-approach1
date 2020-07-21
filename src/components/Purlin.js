import React from "react";

export const Purlin = ({ yPosition, width }) => {
  return (
    <>
      <svg height="10" width="650" y={yPosition / 10}>
        <rect
          height="10"
          width={width / 10}
          stroke="black"
          stroke-width="1"
          fill="white"
        />
      </svg>
    </>
  );
};
