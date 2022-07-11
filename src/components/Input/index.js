import React from "react";
import { styles } from "./styles";
import { TextInput, StyleSheet, Animated, Text, View } from "react-native";
import { Controller } from "react-hook-form";

const Input = ({ name, label, children, secureTextEntry, control, rules }) => {
  return (
    <View style={[styles.container, {}]}>
      {children}
      <Controller
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              onBlur={onBlur}
              style={[styles.input(error), {}]}
              placeholder={label}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
            />
            {error && (
              <Animated.View>
                <Text style={styles.text}>{error.message}</Text>
              </Animated.View>
            )}
          </>
        )}
        name={name}
      />
    </View>
  );
};

export default Input;
