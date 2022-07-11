import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: "#252837",
    height: 320,
  },
  buttonText: {
    width: "80%",
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00C170",
    borderRadius: 90,
  },

  cotainerSection: (screenHeight) => ({
    height: screenHeight,
    backgroundColor: "#F8F8F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
    zIndex: 0,
  }),
  cotainerText: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#F6F7F8",
    paddingBottom: 30,
  },
  image: (screenWidth) => ({
    minWidth: screenWidth,
    height: 320,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    resizeMode: "cover",
    borderTopRightRadius: 30,
    borderTopRightRadius: 30,
  }),
  paginator: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 18,
    lineHeight: 25,
    fontWeight: "bold",
    color: "#1C1C1C",
    paddingBottom: 10,
  },
  price: {
    fontSize: 22,
    color: "#252837",
  },
  buttonIcon: {
    height: 55,
    width: 55,
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 100,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  description: {
    width: "90%",

    fontSize: 14,
    color: "#25283782",
    lineHeight: 24,
  },
  containerScroll: {
    backgroundColor: "#F8F8F9",
    paddingBottom: 100,
  },
  containerImage: {
    backgroundColor: "#252837",
  },
  cotainerButton: {
    flexDirection: "row",
    backgroundColor: "#F8F8F9",
    paddingHorizontal: 30,
    paddingVertical: 15,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  textbuttom: { color: "#fff", fontWeight: "bold" },
});
