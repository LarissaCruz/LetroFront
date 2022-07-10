import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import Carousel from "../../components/Carousel";

const Home = () => {
  return <Carousel />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e7e3",
  },
  contentWrapper: {
    padding: 20,
  },
});
export default Home;
