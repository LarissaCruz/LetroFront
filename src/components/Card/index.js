import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Favorite } from "../../util/icon";
import { BASE_URL_IMG } from "../../config";
import { styles } from "./styles";
import Tooltip from "../Tooltip";

const Card = ({ item, navigation }) => {
  const title = item.attributes.Name;
  const price = `$${item.attributes.price}`;
  const descont = item.attributes.descont;
  const image = `${BASE_URL_IMG}${item.attributes.image.data[0].attributes.url}`;
  
  return (
    <TouchableOpacity
      key={item.toString()}
      onPress={() => navigation.navigate("Product", { data: item })}
    >
      <View style={styles.container}>
        {descont && <Tooltip label={`%${descont}`} />}
        <View style={styles.icon}>
          <Favorite />
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
