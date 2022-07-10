import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import ProductDetails from "../pages/Product";
import Cart from "../pages/ShoppingCart";
import Login from "../pages/Login";
import Registre from "../pages/Register";
import { Text } from "react-native";

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#252837",
            },
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 25,
                  letterSpacing: 5,
                  color: "#fff",
                }}
              >
                Login
              </Text>
            ),
          }}
        />

        <Stack.Screen
          name="Registre"
          component={Registre}
          options={{
            headerShadowVisible: false,
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#252837",
            },
            headerTitle: () => (
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 25,
                  letterSpacing: 5,
                  color: "#fff",
                }}
              >
                Registro
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStackNavigator;
