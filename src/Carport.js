import React, { useState, useMemo } from "react";
import "@rmwc/slider/styles";
import styles from "./styling.module.css";
import Canvas from "./components/Canvas";

import { Draw } from "./utils/Draw";
import { Slider } from "@rmwc/slider";

export const DimensionContext = React.createContext({
  length: 0,
  width: 0,
});

export const Carport = () => {
  const [length, setLength] = useState(5850);

  const [width, setWidth] = useState(3500);

  const lengthInput = (event) => {
    setLength(event.detail.value);
  };

  const widthInput = (event) => {
    setWidth(event.detail.value);
  };

  const memoizedParams = useMemo(() => Draw(length, width), [length, width]);

  return (
    <div>
      <DimensionContext.Provider value={memoizedParams}>
        <Canvas></Canvas>
      </DimensionContext.Provider>
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
