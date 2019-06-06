import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import SelectorBtn from "../UI/SelectorBtn/SelectorBtn";

const InputField = props => {
  const [isPro, setIsPro] = useState(true);
  const styles = StyleSheet.create({
    Wrapper: {
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      paddingVertical: 10,
      borderRadius: 7
    },
    Container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    },
    InputField: {
      width: "70%",
      backgroundColor: "rgba(0,0,0,0.4)"
    }
  });

  const switchProCon = selector => {
    setIsPro(selector);
  };

  const renderReasoInput = (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputField}
        placeholder="Insert reason here..."
      />
      <Button color="rgba(0,0,0,0.7)" title="Add" onPress={() => click()} />
    </View>
  );

  const renderSelectors = (
    <View style={styles.Container}>
      <SelectorBtn
        text="Pro"
        selected={isPro}
        clicked={() => switchProCon(true)}
      />
      <SelectorBtn
        text="Con"
        clicked={() => switchProCon(false)}
        selected={!isPro}
      />
    </View>
  );

  const renderView = (
    <View style={styles.Wrapper}>
      {renderReasoInput}
      {renderSelectors}
    </View>
  );

  return renderView;
};

export default InputField;
