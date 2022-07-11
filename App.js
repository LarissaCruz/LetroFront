import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import MainStackNavigator from "./src/routes/MainStackNavigator";
import AuthStackNavigator from "./src/routes/AuthStackNavigator";
import { useAuth } from "./src/hooks/useAuth";
import { UserContext } from "./src/context/UserContext";
import { AuthContext } from "./src/context/AuthContext";
import { CartContext } from "./src/context/CartContext";
import { useCart } from "./src/hooks/useCart";

export default function App() {
  const [statusFont, setStatusFont] = useState(false);
  const { auth, state } = useAuth();
  const { authCart } = useCart();
  let [fontsLoaded] = useFonts({
    "Avenir-Bold": require("./assets/fonts/AvenirLTStd-Black.otf"),
    "Avenir-Regular": require("./assets/fonts/AvenirLTStd-Book.otf"),
  });

  useEffect(() => {
    if (!!fontsLoaded) {
      setStatusFont(true);
    }
  }, [fontsLoaded]);

  function renderScreens() {
    // if (state.loading) {
    // <RootStack.Screen name={'Splash'} component={SplashScreen} />;
    // return null;
    //}
    return state.user ? (
      <UserContext.Provider value={state.user}>
        <MainStackNavigator />
      </UserContext.Provider>
    ) : (
      <AuthStackNavigator />
    );
  }

  return (
    <>
      {!!statusFont && (
        <>
          <StatusBar backgroundColor={"#252837"}></StatusBar>
          <AuthContext.Provider value={auth}>
            <CartContext.Provider value={authCart}>
              {renderScreens()}
            </CartContext.Provider>
          </AuthContext.Provider>
        </>
      )}
    </>
  );
}
