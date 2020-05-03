import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "../screens/About";
import { Settings } from "../screens/Settings";
import { AppParamsList } from "./AppParamList";
import Ionicons from "react-native-vector-icons/Ionicons";
import { HomeStack } from "./HomeStack";
import { SearchStack } from "./SearchStack";

const Tab = createBottomTabNavigator<AppParamsList>();

export const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Settings") {
            iconName = "ios-construct";
          } else if (route.name === "About") {
            iconName = "ios-help-circle";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Search" component={SearchStack} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
