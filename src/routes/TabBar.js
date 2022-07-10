import * as React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Favorite from "../pages/Favorite";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeIcon, Notification, Circles, Contact, Heart } from "../util/icon";

const Tab = createBottomTabNavigator();

export default function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 69 },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarIcon: () => <HomeIcon />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Home}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarIcon: () => <Notification />,
        }}
      />
      <Tab.Screen
        name="Circles"
        component={Home}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarIcon: () => (
            <View>
              <View style={styles.iconTabRound}>
                <Circles />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarIcon: () => <Heart />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Profile}
        options={{
          headerShown: false,
          showLabel: false,
          tabBarIcon: () => <Contact />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconTabRound: {
    width: 66,
    height: 66,
    borderRadius: 90,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EB1C24",
  },
});
