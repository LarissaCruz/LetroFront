import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 25,
    flex: 1,
  },
  containerImage: {
    justifyContent: "center",
    alignItems: "center",
    height: 450,
  },
  image: {
    width: 400,
    height: 250,
    resizeMode: "contain",
  },
  label: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#252837",
  },
  button: {
    marginVertical: 25,
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: "#252837",
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
