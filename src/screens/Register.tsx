import React from "react";
import { Center } from "../components/Center";
import { Text, Button } from "react-native";
import { AuthNavProps } from "../Routes/AuthParamList";

export const Register = ({ navigation, route }: AuthNavProps<"Register">) => {
  return (
    <Center>
      <Text>Register</Text>
      <Text>{route.name}</Text>
      <Button
        title="Go to login"
        onPress={() => navigation.navigate("Login")}
      />
    </Center>
  );
};
