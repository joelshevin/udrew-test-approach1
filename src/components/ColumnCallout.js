import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const ColumnCallout = () => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length;
  const width = dimensions.width;

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
          cx={width / 10 - 5}
          cy={length / 10 + 5}
          r="20"
          stroke="black"
          stroke-width="1"
          fill="white"
          fill-opacity="0.4"
        ></circle>

        <circle
          cx={width / 10 - 100}
          cy={length / 10 + 60}
          r="30"
          stroke="black"
          stroke-width="1"
          fill="white"
        ></circle>

        <text
          x={width / 10 - 100}
          y={length / 10 + 55}
          text-anchor="middle"
          ominant-baseline="central"
          fill="blue"
          text-decoration="underline"
        >
          SD1
        </text>
        <text
          x={width / 10 - 100}
          y={length / 10 + 75}
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

export default ColumnCallout;
