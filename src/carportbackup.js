import React, { useState } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./components/styling.module.css";
import { Beam } from "./components/Beam";
import { Rafter } from "./components/Rafter";
import { draw } from "./utils/draw";

export const Carport = () => {
  const [length, setLength] = useState(5850);
  draw.currentLength = length / 10;
  const [width, setWidth] = useState(3500);
  draw.currentWidth = width / 10;

  const lengthInput = (event) => {
    setLength(event.detail.value);
    draw.currentLength = length / 10;
  };

  const widthInput = (event) => {
    setWidth(event.detail.value);
    draw.currentWidth = width / 10;
  };

  return (
    <div>
      <div class="row" id="svgcontainter">
        <svg width="650" height="810">
          <Beam></Beam>
          <Rafter></Rafter>
        </svg>
      </div>
      <div class="row">
        <div class="column">
          <p className={styles.title1}>Length</p>
        </div>
        <div class="column" className={styles.sliders}>
          <Slider discrete="true" min={5850} max={8000} onInput={lengthInput} />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <p className={styles.title1}>Width</p>
        </div>
        <div class="column" className={styles.sliders}>
          <Slider discrete="true" min={3500} max={6500} onInput={widthInput} />
        </div>
      </div>
    </div>
  );
};
