import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png";

interface Props {
  children?: React.ReactNode,
  onPressMsg?: string,
  defaultStyles?: boolean,
  style?: any
}

const SimpleComponent: React.FC<Props> = ({ children, onPressMsg, defaultStyles, style }) => {
  return (
    <View style={defaultStyles ? styles.container : style}>
      <Text onPress={() => console.log(onPressMsg || `Clicked text: "${children?.toString()}" at ${Date.now()}`)}>
        {children || ""}
      </Text>
      <Image source={logo} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 305,
    height: 159,
    marginBottom: "10px"
  }
});

export default SimpleComponent;