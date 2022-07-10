import React from "react";
import { Animated, View, StyleSheet, useWindowDimensions } from "react-native";

const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{ flexDirection: "row", height: 25, justifyContent: "center" }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const boxInterpolation = scrollX.interpolate({
          inputRange,
          outputRange: ["#fff8", "#fff", "#fff8"],
        });
        return (
          <Animated.View
            style={[styles.dot, { backgroundColor: boxInterpolation }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 5,
    width: 5,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#fff",
  },
});
