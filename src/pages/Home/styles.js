import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cotainerSection: (screenHeight) => ({
    minHeight: screenHeight - 400,
    backgroundColor: "#F8F8F9",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  }),
  conatinerLoader: {
    flex: 1,
    backgroundColor: "#F8F8F9",
    justifyContent: "center",
    alignItems: "center",
  },
});
