import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    maxWidth: 200,
    height: 160,
    backgroundColor: "#fff",
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  icon: {
    position: "absolute",
    right: 15,
    top: 10,
    zIndex: 1,
  },
  image: {
    width: 200,
    height: 160,
    resizeMode: "contain",
  },
  description: {
    width: 199,
  },
  title: {
    color: "#646E77",
    textAlign: "center",
    fontSize: 12,
    marginVertical: 5,
  },
  price: {
    color: "#252837",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 20,
  },
});
