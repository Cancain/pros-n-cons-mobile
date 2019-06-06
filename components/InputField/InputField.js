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
  const [isPro, setIsPro] = useState(null);
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
    }
  });

  const click = () => {

  };
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
        <TouchableHighlight style={styles.Selector}>
          <Text>Pro</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.Selector}>
          <Text>Con</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default InputField;
