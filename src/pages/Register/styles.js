import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  text: {
    color: "#494848",
    fontWeight: "400",
  },
  button: {
    marginVertical: 25,
    paddingVertical: 20,
    borderRadius: 30,
    backgroundColor: "#252837",
  },
  input: {
    height: 45,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: "#fff",
    borderColor: "#fff",
  },
  label: {
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#252837",
  },
  textRegister: {
    color: "#494848",
    fontWeight: "bold",
  },
  labelButton: { color: "#fff", fontWeight: "bold", textAlign: "center" },
  containerRegister: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
