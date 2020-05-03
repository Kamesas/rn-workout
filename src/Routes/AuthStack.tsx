import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthParamsList } from "./AuthParamList";
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

const Stack = createStackNavigator<AuthParamsList>();

interface AuthStackProps {
  [key: string]: any;
}

export const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ headerTitle: "Sign in" }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        options={{ headerTitle: "Sign up" }}
        component={Register}
      />
    </Stack.Navigator>
  );
};
