import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Alert, Keyboard } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm();

  const ShowAlert = (title, message, handlerOnPress) => {
    Alert.alert(title, message, [{ text: "OK", onPress: handlerOnPress }]);
  };

  const onSubmit = async ({ email, senha }) => {
    try {
      Keyboard.dismiss();
      setLoading(true);
      await login(email, senha);
    } catch (e) {
      setLoading(false);
      ShowAlert("Erro", e.message);
    }
  };

  return (
    <View style={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Login to your Account</Text>
      <Input
        name="email"
        control={control}
        label={"Email"}
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
        control={control}
        secureTextEntry={true}
        label={"Password"}
        rules={{
          required: "Verifique se todos os campos estão preenchidos",
        }}
      >
        <Entypo name="lock" size={18} color="#494848" />
      </Input>
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
        <Text style={styles.labelButton}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.containerRegister}>
        <Text style={styles.text}>Não possui cadastro? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.textRegister}>Cadastre-se </Text>
        </TouchableOpacity>
      </View>
      <Loading loading={loading} />
    </View>
  );
};

export default Login;
