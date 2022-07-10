import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const Banner = ({ item }) => {
  return (
    <View
      key={(_, index) => index.toString()}
      style={styles.cotainer(screenWidth)}
    >
      <Image style={styles.image(screenWidth)} source={item.images} />
      <View style={styles.containerText}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cotainer: (screenWidth) => ({
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-between",
    backgroundColor: "#252837",
  }),
  image: (screenWidth) => ({
    width: screenWidth,
    resizeMode: "cover",
    height: 240,
    width: 188,
  }),
  containerText: {
    paddingHorizontal: 15,
    justifyContent: "flex-end",
    marginBottom: 40,
  },
  subtitle: {
    color: "#FFF",
    textTransform: "uppercase",
    fontSize: 10,
  },
  title: {
    fontSize: 26,
    color: "#FFf",
    width: 170,
  },
  price: {
    color: "#FFF",
    fontSize: 14,
  },
});
export default Banner;
