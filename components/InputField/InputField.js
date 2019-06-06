import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import SelectorBtn from "../UI/SelectorBtn/SelectorBtn";

const InputField = props => {
  const [isPro, setIsPro] = useState(true);
  const styles = StyleSheet.create({
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

  const proSelectStyle = [styles.Selector, isPro ? styles.Selected : null];
  const conSelectStyle = [styles.Selector, !isPro ? styles.Selected : null];

  const renderReasoInput = (
    <View style={styles.Container}>
      <TextInput
        style={styles.InputField}
        placeholder="Insert reason here..."
      />
      <Button color="blue" title="Add" onPress={() => click()} />
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
    <View>
      {renderReasoInput}
      {renderSelectors}
    </View>
  );

  return renderView;
};

export default InputField;
