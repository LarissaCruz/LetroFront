import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cotainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    marginTop: 3,
  },
  containerProduct: {
    flexDirection: "row",
  },
  image: {
    width: 72,
    height: 83,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  containerDescricao: {
    paddingLeft: 10,
    width: "80%",
  },
  title: {
    fontSize: 12,
    color: "#585858",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#585858",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quantidade: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});
