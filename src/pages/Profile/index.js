import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Avatar from "../../components/Avatar";
import { styles } from "./styles";
import { HomeIcon, Seta } from "../../util/icon";
import Header from "../../components/Header";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../../components/Loading";

const Profile = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Avatar source={require("../../assets/images/profile.png")} />
          <Text style={styles.labelName}>Loura Martis</Text>
          <Text style={styles.phone}>7398248549</Text>
        </View>
        <View style={styles.containerCardButton}>
          <TouchableOpacity style={styles.cardButton}>
            <HomeIcon />
            <Text style={styles.textButton}>Order </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton}>
            <HomeIcon />
            <Text style={styles.textButton}>Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => onLogout()}
          >
            <HomeIcon />
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerOption}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Historico de pedidos </Text>
            <Seta />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Alterar senha</Text>
            <Seta />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onLogout()}>
            <Text style={styles.textButton}>Sair</Text>
            <Seta />
          </TouchableOpacity>
        </View>
        <Loading Loading={loading} />
      </ScrollView>
    </>
  );
};

export default Profile;
