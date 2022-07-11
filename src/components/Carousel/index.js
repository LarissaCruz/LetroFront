import React, { useRef } from "react";
import Paginator from "../Paginator";
import Banner from "../Banner";
import { data } from "../../data";
import { styles } from "./styles";
import { FlatList, View, Animated, StyleSheet } from "react-native";

export default function Carousel({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const scrollHandler = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
    }
  );
  return (
    <>
      <FlatList
        ref={slidesRef}
        data={data}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        onScrollEventThrottle={32}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Banner item={item} />}
      />
      <View style={styles.paginator}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
    </>
  );
}
