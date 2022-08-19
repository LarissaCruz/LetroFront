import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { useAuth } from "./src/hooks/useAuth";
import { UserContext } from "./src/context/UserContext";
import { AuthContext } from "./src/context/AuthContext";
import MainStackNavigator from "./src/routes/MainStackNavigator";
import AuthStackNavigator from "./src/routes/AuthStackNavigator";

export default function App() {
  const [statusFont, setStatusFont] = useState(false);
  const { auth, state } = useAuth();
  let [fontsLoaded] = useFonts({
    "Avenir-Bold": require("./assets/fonts/AvenirLTStd-Black.otf"),
    "Avenir-Regular": require("./assets/fonts/AvenirLTStd-Book.otf"),
  });

  useEffect(() => {
    if (!!fontsLoaded) {
      setStatusFont(true);
    }
  }, [fontsLoaded]);

  const renderScreens = () => {
    return state.user ? (
      <UserContext.Provider value={state.user}>
        <MainStackNavigator />
      </UserContext.Provider>
    ) : (
      <AuthStackNavigator />
    );
  };

  return (
    !!statusFont && (
      <>
        <StatusBar backgroundColor={"#252837"}></StatusBar>
        <AuthContext.Provider value={auth}>
          {renderScreens()}
        </AuthContext.Provider>
      </>
    )
  );
}
