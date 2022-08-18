import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabBar from "./TabBar";
import Product from "../pages/Product";


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
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
