import React from "react";
import { View, StyleSheet } from "react-native";

const Wrapper = props => {
  const styles = StyleSheet.create({
    Wrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      width: props.width ? props.width : "95%",
      marginLeft: props.marginLeft ? props.marginLeft : "auto",
      marginRight: props.marginRight ? props.marginRight : "auto",
      paddingVertical: 10,
      borderRadius: 7,
      marginTop: 2.5
    }
  });
  return <View style={styles.Wrapper}>{props.children}</View>;
};

export default Wrapper;
