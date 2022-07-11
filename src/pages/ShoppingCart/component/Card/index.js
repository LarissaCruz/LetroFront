import React from "react";
import { View, Button, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Card = ({ item }) => {
  return (
    <View style={styles.cotainer}>
      <View style={styles.containerProduct}>
        <Image
          source={require("../../../../assets/images/relo.png")}
          style={styles.image}
        />
        <View style={styles.containerDescricao}>
          <Text style={styles.title}>Wireless Noise Cancelling</Text>
          <Text style={styles.subtitle}>WF-1000XM3</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
              paddingVertical: 10,
            }}
          >
            <Text style={styles.price}>€220.00</Text>
            <View
              style={{
                borderRadius: 15,

                height: 35,
                backgroundColor: "#F3F3F3",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={{ paddingHorizontal: 15 }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>1</Text>
              <TouchableOpacity style={{ paddingHorizontal: 15 }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
