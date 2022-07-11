import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import { styles } from "./styles";
const screenWidth = Dimensions.get("screen").width;

const Banner = ({ item }) => {
  return (
    <View
      key={(_, index) => index.toString()}
      style={styles.cotainer(screenWidth)}
    >
      <Image style={styles.image} source={item.image} />
      <View style={styles.description}>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
  );
};

export default Banner;
