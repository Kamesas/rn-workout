import React, { useContext } from "react";
import { Center } from "../components/Center";
import { Text, Button } from "react-native";
import { AuthContext } from "../Routes/AuthProvider";

interface SettingsProps {
  [key: string]: any;
}

export const Settings: React.FC<SettingsProps> = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Center>
      <Text>Hello, {user?.username}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </Center>
  );
};
