import React from "react";
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
          onPress={() => navigation.navigate("CART")}
        >
          <Cart />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 54,
    flexDirection: "row",
    backgroundColor: "#252837",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 25,
    letterSpacing: 5,
  },
  cotainerIcon: {
    flexDirection: "row",
  },
  iconRight: {
    marginRight: 10,
  },
  iconLeft: {
    marginLeft: 10,
  },
});

export default Header;
