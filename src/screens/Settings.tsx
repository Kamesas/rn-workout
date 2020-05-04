import React from "react";
import { Center } from "../components/Center";
import { Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/actions/authActions";

interface SettingsProps {
  [key: string]: any;
}

export const Settings: React.FC<SettingsProps> = () => {
  const userData = useSelector(({ authReducer }: any) => {
    return authReducer.userData;
  });

  const dispatch = useDispatch();

  return (
    <Center>
      <Text>Hello !</Text>
      <Text>{userData.email} </Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </Center>
  );
};
