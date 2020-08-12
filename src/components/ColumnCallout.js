import React from "react";
import styles from "./Callout.module.css";

const ColumnCallout = ({ length, width }) => {
  return (
    <>
      <g>
        <defs>
          <marker id="startarrow" className={styles.startArrow}>
            <polygon className={styles.polygon} />
          </marker>
        </defs>

        <line
          className={styles.line}
          x1={width / 10 - 25}
          y1={length / 10 + 10}
          x2={width / 10 - 100}
          y2={length / 10 + 60}
        ></line>

        <circle
          className={styles.markerCircle}
          cx={width / 10 - 5}
          cy={length / 10 + 5}
        ></circle>

        <circle
          className={styles.callOutCircle}
          cx={width / 10 - 100}
          cy={length / 10 + 60}
        ></circle>

        <text
          className={styles.callOutTopText}
          x={width / 10 - 100}
          y={length / 10 + 50}
        >
          SD1
        </text>
        <text
          className={styles.callOutBottomText}
          x={width / 10 - 100}
          y={length / 10 + 70}
        >
          S004
        </text>
      </g>
    </>
  );
};

export default ColumnCallout;
