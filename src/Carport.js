import React, { useState } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./components/styling.module.css";

export const Carport = () => {
  const [length, setLength] = useState(5850);
  const [width, setWidth] = useState(3500);

  const lengthInput = (event) => {
    setLength(event.detail.value);
  };

  const widthInput = (event) => {
    setWidth(event.detail.value);
  };

  return (
    <div>

    </div>

    <div>
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
