import React, { useState } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";

export const Carport = () => {
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(100);

  //get the value from the slider event to set as height
  const heighInput = (event) => {
    setHeight(event.detail.value);
  };

  //get the value from the slider event to set as width
  const widthInput = (event) => {
    setWidth(event.detail.value);
  };

  return (
    <div>
      <div class="row">
        <div class="column">
          <h3>Height</h3>
        </div>
        <div class="column" style={{ width: "30%" }}>
          <Slider discrete="true" min={50} max={150} onInput={heighInput} />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <h3>Width</h3>
        </div>
        <div class="column" style={{ width: "30%" }}>
          <Slider discrete="true" min={100} max={300} onInput={widthInput} />
        </div>
      </div>
    </div>
  );
};
