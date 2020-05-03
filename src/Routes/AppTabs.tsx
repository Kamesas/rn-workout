import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { About } from "../screens/About";
import { AppParamsList } from "./AppParamList";
import { Settings } from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";

interface AppTabsProps {
  [key: string]: any;
}

const Tab = createBottomTabNavigator<AppParamsList>();

export const AppTabs: React.FC<AppTabsProps> = () => {
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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
