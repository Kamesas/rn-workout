import React, { useContext } from "react";
import { Text, Button } from "react-native";
import { Center } from "../components/Center";
import { AuthNavProps } from "../Routes/AuthParamList";
import { AuthContext } from "../Routes/AuthProvider";

export const Login = ({ navigation }: AuthNavProps<"Login">) => {
  const { login } = useContext(AuthContext);
  return (
    <Center>
      <Text>Login</Text>
      <Button title="Log me in" onPress={() => login()} />
      <Button
        title="Go to register"
        onPress={() => navigation.navigate("Register")}
      />
    </Center>
  );
};
