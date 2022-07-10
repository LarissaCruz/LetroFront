import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const Loading = ({ loading }) => {
  if (!loading) {
    return <View />;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"black"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  },
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 20,
    borderRadius: 8,
  },
});

export default Loading;
