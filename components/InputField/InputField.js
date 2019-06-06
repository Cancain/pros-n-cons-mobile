import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight
} from "react-native";

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
    },
    Selector: {
      backgroundColor: "rgba(0,0,0,0.1)",
      marginTop: 10,
      marginHorizontal: 10,
      padding: 20,
      borderRadius: 100
    },
    Selected: {
      backgroundColor: "green"
    }
  });

  const switchProCon = selector => {
    setIsPro(selector);
  };

  const proSelectStyle = [styles.Selector, isPro ? styles.Selected : null];
  const conSelectStyle = [styles.Selector, !isPro ? styles.Selected : null];
  return (
    <View>
      <View style={styles.Container}>
        <TextInput
          style={styles.InputField}
          placeholder="Insert reason here..."
        />
        <Button color="blue" title="Add" onPress={() => click()} />
      </View>
      <View style={styles.Container}>
        <TouchableHighlight
          style={proSelectStyle}
          onPress={() => switchProCon(true)}
        >
          <Text>Pro</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={conSelectStyle}
          onPress={() => switchProCon(false)}
        >
          <Text>Con</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default InputField;
