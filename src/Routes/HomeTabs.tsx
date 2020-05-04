import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { About } from "../screens/About";
import { Settings } from "../screens/Settings";
import { HomeParamsList } from "./HomeTabsTypes";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Home } from "../screens/Home";
import { BLUE_1, GREY_1 } from "../styles/colors";

const Tab = createBottomTabNavigator<HomeParamsList>();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Settings") {
            iconName = "ios-construct";
          } else {
            iconName = "ios-help-circle";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: BLUE_1,
        inactiveTintColor: GREY_1,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
