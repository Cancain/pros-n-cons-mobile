import React, { useState } from "react";
import { Text, Slider } from "react-native";

const ValueSlider = props => {
  const [value, setValue] = useState(1);
  return (
    <React.Fragment>
      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>
        {props.text + ": " + value}
      </Text>
      <Slider
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={value => setValue(value)}
      />
    </React.Fragment>
  );
};

export default ValueSlider;
