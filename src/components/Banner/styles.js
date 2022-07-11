import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cotainer: (screenWidth) => ({
    flexDirection: "row",
    width: screenWidth,
    justifyContent: "space-between",
    backgroundColor: "#252837",
  }),

  image: {
    resizeMode: "cover",
    height: 240,
    width: 188,
  },
  description: {
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
