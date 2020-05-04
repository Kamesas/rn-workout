import React from "react";
import { Center } from "../components/Center";
import { AuthNavProps } from "../Routes/AuthParamList";
import { AuthForm } from "../components/Auth/AuthForm";

export const Register = ({ navigation }: AuthNavProps<"Register">) => {
  return (
    <Center>
      <AuthForm navigation={navigation} isLogin={false} />
    </Center>
  );
};
