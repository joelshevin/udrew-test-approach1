import React from "react";
import styles from "./Callout.module.css";

const RafterCallout = ({ length }) => {
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
          x1="0"
          y1={length / 10 - 50}
          x2="-100"
          y2={length / 10 - 100}
        ></line>

        <circle
          className={styles.callOutCircle}
          cx="-100"
          cy={length / 10 - 100}
        ></circle>

        <text className={styles.callOutTopText} x="-100" y={length / 10 - 110}>
          SD1
        </text>
        <text
          className={styles.callOutBottomText}
          x="-100"
          y={length / 10 - 90}
        >
          S004
        </text>
      </g>
    </>
  );
};

export default RafterCallout;
