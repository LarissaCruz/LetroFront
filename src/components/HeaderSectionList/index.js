import React from "react";
import { styles } from "./styles";
import { Text, StyleSheet, View } from "react-native";

const HeaderSectionList = ({ title }) => {
  return (
    <View key={(_, index) => index.toString()} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>SeeAll </Text>
    </View>
  );
};

export default HeaderSectionList;
