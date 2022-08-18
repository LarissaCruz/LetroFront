import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Tooltip = ({ label }) => {
  return (
    <View style={styles.containerDescont}>
      <Text style={styles.descontValue}>{label}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  containerDescont: {
    position: "absolute",
    left: 15,
    top: 10,
    zIndex: 1,
    width: 40,
    height: 20,
    borderRadius: 90,
    backgroundColor: "#FC9803",
  },
  descontValue: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
  },
});
export default Tooltip;
