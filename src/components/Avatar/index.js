import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Avatar = (source) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 125,
    borderRadius: 125,
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
    overflow: "hidden",
  },
});

export default Avatar;
