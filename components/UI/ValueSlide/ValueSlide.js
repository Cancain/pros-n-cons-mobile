import React, { useState } from "react";
import { Text } from "react-native";
import Slider from "@react-native-community/slider";

const ValueSlider = props => {
  const [value, setValue] = useState(1);

  const changeValue = value => {
    setValue(value);
    props.valueChanged(value);
  };
  return (
    <React.Fragment>
      <Text style={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>
        {`${props.text}: ${value}`}
      </Text>
      <Slider
        minimumValue={1}
        maximumValue={5}
        step={1}
        onValueChange={value => changeValue(value)}
      />
    </React.Fragment>
  );
};

export default ValueSlider;
