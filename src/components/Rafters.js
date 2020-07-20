import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const Rafter = ({ rPosition }) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;
  return (
    <>
      <svg height="800" width="10" x={rPosition / 10}>
        <rect
          height={length}
          width="10"
          stroke="black"
          stroke-width="1"
          fill="white"
        />
      </svg>
    </>
  );
};
