import React, { useState, useMemo } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./components/styling.module.css";
import { Draw } from "./utils/draw";
import { DrawRafter } from "./utils/drawRafter";
import { Rafter } from "./components/Rafters";
import { Beam } from "./components/Beam";

export const DimensionContext = React.createContext({ length: 0, width: 0 });

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
  const memoizedParams1 = useMemo(() => DrawRafter(width), [width]);

  return (
    <div>
      <div class="container" id="svgcontainter">
        <DimensionContext.Provider value={memoizedParams}>
          <svg width="650" height="810">
            <Beam bPosition="0" />
            {/*somestuff*/}
            <Beam bPosition={length - 100} />
            <Rafter rPosition="0" />
            <Rafter rPosition={memoizedParams1.newRafterLocation1 - 100} />
            <Rafter rPosition={width - 100} />
          </svg>
        </DimensionContext.Provider>
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
