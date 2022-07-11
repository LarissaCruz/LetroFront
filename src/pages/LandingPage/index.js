import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../../assets/images/shop.png")}
        />
      </View>

      <Text style={styles.label}>
        Welcom to LETRO we provide high quality products just for you
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingPage;
