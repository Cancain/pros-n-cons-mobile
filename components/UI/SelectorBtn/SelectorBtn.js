import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

const SelectorBtn = props => {
  const styles = StyleSheet.create({
    Selector: {
      backgroundColor: "rgba(0,0,0,0.1)",
      marginTop: 10,
      marginHorizontal: 10,
      padding: 20,
      borderRadius: 100,
      width: 65,
      height: 65
    },
    Selected: {
      backgroundColor: "green"
    }
  });

  const proSelectStyle = [
    styles.Selector,
    props.selected ? styles.Selected : null
  ];
  return (
    <TouchableHighlight style={proSelectStyle} onPress={() => props.clicked()}>
      <Text>{props.text}</Text>
    </TouchableHighlight>
  );
};

export default SelectorBtn;
