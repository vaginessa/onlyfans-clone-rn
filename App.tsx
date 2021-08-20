import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SimpleComponent from "./src/components/SimpleComponent";

export default function App() {
  return (

    <SimpleComponent />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
