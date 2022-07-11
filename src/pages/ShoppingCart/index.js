import React from "react";
import { FlatList } from "react-native";
import Card from "./component/Card";
import { data } from "../../data";
import FoolterCard from "./component/FoolterCard";

const Cart = () => {
  return (
    <FlatList
      data={data}
      style={{
        backgroundColor: "#F8F8F9",
        paddingTop: 25,
      }}
      renderItem={({ item }) => {
        return <Card key={(_, index) => index.toString()} />;
      }}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={FoolterCard}
    />
  );
};

export default Cart;
