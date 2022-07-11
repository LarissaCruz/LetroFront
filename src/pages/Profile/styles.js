import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#252837",
  },
  labelName: {
    fontSize: 20,
    lineHeight: 25,
    letterSpacing: 3,
    color: "#FFF",
    textAlign: "center",
    marginTop: 15,
  },

  cardButton: {
    width: "20%",
    borderRadius: 5,
    justifyContent: "center",
    padding: 15,
    alignItems: "center",

    paddingVertical: 15,
    borderColor: "#252837",
    borderWidth: 1,
    marginLeft: 10,
  },
  containerOption: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 150,

    marginTop: 5,
    height: "100%",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderColor: "#252837",
    borderBottomWidth: 0.5,
  },
  phone: {
    textAlign: "center",
    color: "#FFF",
    lineHeight: 25,
  },
  containerCardButton: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

    backgroundColor: "#FFF",
    paddingVertical: 10,
  },
  textButton: {
    color: "#252837",
    fontWeight: "bold",
    marginTop: 5,
  },
});
