import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const Beam = (props) => {
  const dimensions = useContext(DimensionContext);
  const width = dimensions.width / 10;

  return (
    <>
      <svg height="10" width="650" y={props.bPosition / 10}>
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

export default Beam;
