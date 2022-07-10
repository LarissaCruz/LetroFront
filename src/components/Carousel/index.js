import React, { useRef } from "react";
import { data } from "../../../data";
import Paginator from "../Paginator";
import { styles } from "./styles";
import {
  FlatList,
  View,
  Image,
  Animated,
  Text,
  Dimensions,
} from "react-native";
import Banner from "../Banner";

export default function Carousel({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  return (
    <>
      <FlatList
        ref={slidesRef}
        data={data}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
        onScrollEventThrottle={32}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return <Banner item={item} />;
        }}
      />
      <View style={styles.paginator}>
        <Paginator data={data} scrollX={scrollX} />
      </View>
    </>
  );
}
