import React from "react";
import { styles } from "./styles";
import { View, ActivityIndicator } from "react-native";

const Loading = ({ loading }) => {
  if (!loading) {
    return null;
  }
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator color={"black"} />
      </View>
    </View>
  );
};

export default Loading;
