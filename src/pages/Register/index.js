import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Keyboard,
  StyleSheet,
} from "react-native";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { TextInput } from "react-native-web";

const Register = ({ navigation }) => {
  const { handleSubmit, control } = useForm();
  const { register } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const ShowAlert = (title, message, handlerOnPress) => {
    Alert.alert(title, message, [{ text: "OK", onPress: handlerOnPress }]);
  };

  const onSubmit = async ({ email, senha }) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      await register(email, senha);
      setLoading(false);
      ShowAlert("Sucesso", "Seu cadastro foi realizado com sucesso", () =>
        navigation.navigate("Login")
      );
    } catch (e) {
      setLoading(false);
      ShowAlert("Erro", "Não foi possivel realizar seu cadastrado tente novamente mais tarde");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Create your Account</Text>
      <Input
        name="email"
        label="Email"
        control={control}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/,
            message: "email invalido",
          },
        }}
      >
        <MaterialIcons name="email" size={18} color="#494848" />
      </Input>
      <Input
        name="senha"
        label="Password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      >
        <Entypo name="lock" size={18} color="#494848" />
      </Input>
      <Input
        name="confirmSenha"
        label="Password"
        control={control}
        secureTextEntry={true}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      >
        <Entypo name="lock" size={18} color="#494848" />
      </Input>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.labelButton}>Register</Text>
      </TouchableOpacity>
      <View style={styles.containerRegister}>
        <Text style={styles.text}>Já possui cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.textRegister}>Login </Text>
        </TouchableOpacity>
      </View>
      <Loading loading={loading} />
    </View>
  );
};

export default Register;
