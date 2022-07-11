import React, { useRef, useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  Text,
  Dimensions,
  Animated,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { Heart } from "../../util/icon";
import { styles } from "./styles";
import { BASE_URL_IMG } from "../../config";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
import Loading from "../../components/Loading";
import Paginator from "../../components/Paginator";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

const Product = ({ route, navigation }) => {
  const data = route.params.data;
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const { token, id } = React.useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { add_Item } = React.useContext(CartContext);

  const onSaveCart = async (data) => {
    try {
      await add_Item(data, token, id);
    } catch (e) {
      console.log("Erro", e);
    }
  };
  return (
    <>
      <Header navigation={navigation} />
      <Loading loading={loading} />
      <View style={styles.cotainer}>
        <View style={styles.cotainerSection(screenHeight)}>
          <FlatList
            ref={slidesRef}
            data={data.attributes.image.data.reverse()}
            horizontal
            keyExtractor={(_, index) => index.toString()}
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onScrollEventThrottle={32}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            renderItem={(item) => {
              const dataImage = `${BASE_URL_IMG}${item.item.attributes.url}`;

              return (
                <View key={(_, index) => index.toString()} style={{}}>
                  <Image
                    style={styles.image(screenWidth)}
                    source={{
                      uri: dataImage,
                    }}
                  />
                  <View style={styles.paginator}>
                    <Paginator
                      data={data.attributes.image.data}
                      scrollX={scrollX}
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
      <ScrollView style={styles.containerScroll}>
        <View style={styles.cotainerText}>
          <Text style={styles.title}>{data.attributes.Name}</Text>
          <Text style={[styles.title, styles.price]}>
            ${data.attributes.price}
          </Text>
          <Text style={[styles.title, { fontSize: 16 }]}>Description</Text>
          <Text style={styles.description}>{data.attributes.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.cotainerButton}>
        <TouchableOpacity style={styles.buttonIcon}>
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => onSaveCart(data)}
        >
          <Text style={styles.textbuttom}>Add to Basket</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Product;
