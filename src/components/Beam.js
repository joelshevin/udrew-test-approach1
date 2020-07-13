import React, { useState } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./styling.module.css";

export const Beam = () => {
  //const [length, setLength] = useState(50);
  //const [width, setWidth] = useState(100);

  //get the value from the slider event to set as height
  //const lengthInput = (event) => {
  //setLength(event.detail.value);
  //};

  //get the value from the slider event to set as width
  //const widthInput = (event) => {
  //setWidth(event.detail.value);
  //};

  return (
    <div>
      <div class="row">
        <div class="column" className={styles.beamColumns}>
          <svg height="10" width="650">
            <rect
              width={650}
              height={10}
              stroke="black"
              stroke-width="1"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
