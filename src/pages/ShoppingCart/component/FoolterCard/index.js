import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const FoolterCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.label}>Total</Text>
        <Text style={styles.label}>$1900</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.labelButton}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FoolterCard;
