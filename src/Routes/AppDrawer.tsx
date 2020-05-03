import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamsList } from "./AppDrawerTypes";
import { About } from "../screens/About";
import { Settings } from "../screens/Settings";
import { HomeTabs } from "./HomeTabs";

const Drawer = createDrawerNavigator<DrawerParamsList>();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
