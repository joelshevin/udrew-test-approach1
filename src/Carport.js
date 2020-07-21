import React, { useState, useMemo } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./components/styling.module.css";
import { Draw } from "./utils/Draw";
import { CalculatePurlins } from "./utils/CalculatePurlins";
import { DrawPurlin } from "./utils/DrawPurlin";
import Rafter from "./components/Rafter";
import Beam from "./components/Beam";

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

  const { initialLength, noOfPurlins } = CalculatePurlins(length);
  //console.log(initialLength);
  //console.log(noOfPurlins);

  const memoizedParams = useMemo(() => Draw(length, width), [length, width]);

  return (
    <div>
      <div class="container" id="svgcontainter">
        <DimensionContext.Provider value={memoizedParams}>
          <svg width="650" height="810">
            <Beam bPosition={0} />
            <Rafter rPosition={0} />
            {width > 3500 && <Rafter rPosition={width / 2 - 50} />}
            <Rafter rPosition={width - 100} />
            <DrawPurlin
              noOfPurlins={noOfPurlins}
              initialLength={initialLength}
              width={width}
            />
            <Beam bPosition={length} />
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
