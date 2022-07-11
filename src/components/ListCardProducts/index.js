import React from "react";
import Card from "../Card";
import { styles } from "./styles";
import {
  SectionList,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import HeaderSectionList from "../HeaderSectionList";
const screenHeight = Dimensions.get("screen").height;

const ListCardProducts = ({ item, navigation }) => {
  console.log("item@", item.length);
  return (
    <>
      {item.length === 0 ? (
        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        <SectionList
          sections={item}
          style={styles.container}
          renderItem={({ item }) => null}
          keyExtractor={(_, index) => index.toString()}
          renderSectionHeader={({ section: { title, data } }) => (
            <>
              <HeaderSectionList title={title} />
              <FlatList
                data={data}
                horizontal
                bounces={false}
                keyExtractor={(_, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ _, item }) => (
                  <Card item={item} navigation={navigation} />
                )}
              />
            </>
          )}
        />
      )}
    </>
  );
};

export default ListCardProducts;
