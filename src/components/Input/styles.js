import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 12,
    backgroundColor: "#F8F8F9",
    borderRadius: 10,
    alignItems: "center",
    color: "#000",
    paddingHorizontal: 10,
  },
  input: (error) => ({
    color: "#000",
    paddingVertical: 12,
    paddingHorizontal: 5,
    width: "80%",
  }),
  text: {
    color: "#F67162",
  },
});
