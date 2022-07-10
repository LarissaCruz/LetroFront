import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import Product from "../pages/Product";
import Cart from "../pages/ShoppingCart";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabBar"
          component={TabBar}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Product"
          component={Product}
        />
        <Stack.Screen
          name="CART"
          component={Cart}
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
                CART
              </Text>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
