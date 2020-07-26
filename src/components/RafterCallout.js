import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const RafterCallout = () => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length;
  const yPosition = dimensions.width;

  return (
    <>
      <g>
        <defs>
          <marker
            id="startarrow"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="10 0, 10 7, 0 3.5" fill="red" />
          </marker>
        </defs>

        <line
          x1="0"
          y1={length / 10 - 50}
          x2="-100"
          y2={length / 10 - 100}
          stroke="#000"
          stroke-width="1"
          marker-start="url(#startarrow)"
        ></line>

        <circle
          cx="-100"
          cy={length / 10 - 100}
          r="30"
          stroke="black"
          stroke-width="1"
          fill="white"
        ></circle>

        <text
          x="-100"
          y={length / 10 - 100}
          text-anchor="middle"
          ominant-baseline="central"
          fill="blue"
          text-decoration="underline"
        >
          SD1
        </text>
        <text
          x="-100"
          y={length / 10 - 80}
          text-anchor="middle"
          ominant-baseline="central"
          fill="blue"
        >
          S004
        </text>
      </g>
    </>
  );
};

export default RafterCallout;
