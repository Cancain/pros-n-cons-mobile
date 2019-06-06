import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "../List/List";

const Layout = props => {
  const styles = StyleSheet.create({
    Headline: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 30,
      marginTop: 20
    }
  });
  return (
    <View>
      <Text style={styles.Headline}>Pros 'N Cons</Text>
      <List />
    </View>
  );
};

export default Layout;
