import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const Beam = ({ bPosition }) => {
  const dimensions = useContext(DimensionContext);
  const width = dimensions.width / 10;
  return (
    <>
      <svg height="10" width="650" y={bPosition / 10}>
        <rect
          height="10"
          stroke="black"
          width={width}
          strokeWidth="1"
          fill="white"
        />
      </svg>
    </>
  );
};
