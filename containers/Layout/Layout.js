import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "../List/List";
import Header from "../Header/Header";

const Layout = props => {
  return (
    <View>
      <Header />
      <List />
    </View>
  );
};

export default Layout;
