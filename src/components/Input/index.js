import React from "react";
import { styles } from "./styles";
import { TextInput, Animated, Text, View } from "react-native";
import { Controller } from "react-hook-form";

const Input = ({ name, label, children, secureTextEntry, control, rules }) => {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
        }) => (
        <>
          <View style={styles.container}>
            {children}
              <TextInput
                onBlur={onBlur}
                style={styles.input(error)}
                placeholder={label}
                onChangeText={onChange}
                value={value}
                secureTextEntry={secureTextEntry}
              />
              
            </View>
            {error && (
                <Animated.View >
                  <Text style={styles.text}>{error.message}</Text>
                </Animated.View>
              )}
          </>
        )}
      />
  );
};

export default Input;
