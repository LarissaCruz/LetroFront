import React from "react";
import Header from "../../components/Header";
import { View, FlatList, Dimensions } from "react-native";
import { dataProduct } from "../../data";
import ListCardProducts from "../../components/ListCardProducts";
import Carousel from "../../components/Carousel";
import { useProduct } from "../../hooks/useProduct";
import { styles } from "./styles";
const screenHeight = Dimensions.get("screen").height;

const Home = ({ navigation }) => {
  const products = useProduct();
  const ListHeaderComponent = () => {
    return (
      <>
        <Header navigation={navigation} />
        <Carousel />
      </>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={ListHeaderComponent}
      renderItem={({ item }) => null}
      ListFooterComponent={
        <View style={{ backgroundColor: "#252837" }}>
          <View style={styles.cotainerSection(screenHeight)}>
            <ListCardProducts
              item={products}
              data={dataProduct}
              navigation={navigation}
            />
          </View>
        </View>
      }
    />
  );
};

export default Home;
