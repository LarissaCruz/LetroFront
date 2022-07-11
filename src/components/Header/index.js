import React from "react";
import { styles } from "./styles";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MagnifyingGlass, Cart, Menu } from "../../util/icon";

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.iconLeft}
      >
        <Menu />
      </TouchableOpacity>
      <Text style={styles.text}>LETRO</Text>
      <View style={styles.cotainerIcon}>
        <View style={styles.iconRight}>
          <MagnifyingGlass />
        </View>
        <TouchableOpacity
          style={styles.iconRight}
          onPress={() => navigation.navigate("ShoppingCart")}
        >
          <Cart />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
