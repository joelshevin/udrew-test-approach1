import React from "react";

import styles from "./Callout.module.css";

const PurlinCallout = ({ yPosition, width }) => {
  return (
    <>
      <g>
        <defs>
          <marker id="purlinCalloutStartarrow" className={styles.startArrow}>
            <polygon className={styles.polygon} />
          </marker>
        </defs>

        <line
          className={styles.line}
          x1={width / 10 - 25}
          y1={yPosition / 10 + 10}
          x2={width / 10 - 100}
          y2={yPosition / 10 + 60}
        ></line>

        <circle
          className={styles.markerCircle}
          cx={width / 10 - 5}
          cy={yPosition / 10 + 5}
        ></circle>

        <circle
          className={styles.callOutCircle}
          cx={width / 10 - 100}
          cy={yPosition / 10 + 60}
        ></circle>

        <text
          className={styles.callOutTopText}
          x={width / 10 - 100}
          y={yPosition / 10 + 50}
        >
          SD2
        </text>
        <text
          className={styles.callOutBottomText}
          x={width / 10 - 100}
          y={yPosition / 10 + 70}
        >
          S004
        </text>
      </g>
    </>
  );
};

export default PurlinCallout;
