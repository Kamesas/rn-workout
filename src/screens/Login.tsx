import React from "react";
import { Button } from "react-native";
import { Center } from "../components/Center";
import { AuthNavProps } from "../Routes/AuthParamList";
import { AuthForm } from "../components/Auth/AuthForm";

export const Login = ({ navigation }: AuthNavProps<"Login">) => {
  return (
    <Center>
      <AuthForm navigation={navigation} isLogin />
    </Center>
  );
};
