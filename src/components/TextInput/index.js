import React from "react";
import { TextInput, StyleSheet, Animated, Text } from "react-native";
import { Controller } from "react-hook-form";

const TextInput = ({ name, secureTextEntry, control, rules }) => {
  return (
    <>
      <Controller
        control={control}
        rules={rules}
        render={({
          field: { onChange, onBlur, value },
          fieldState: { error },
        }) => (
          <>
            <TextInput
              style={[styles.input(error), {}]}
              onBlur={onBlur}
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 125,
    height: 125,
    borderRadius: 125,
    overflow: "hidden",
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 125,
    height: 125,
    borderRadius: 100,
    overflow: "hidden",
  },
});

export default TextInput;
