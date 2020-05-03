import React from "react";
import { Center } from "../components/Center";
import { Text } from "react-native";
import { HomeNavProps } from "../Routes/HomeParamList";

interface EditProps {
  [key: string]: any;
}

export const Edit = ({ route }: HomeNavProps<"Edit">) => {
  return (
    <Center>
      <Text>Edit</Text>
      <Text>{route.params.todo.title}</Text>
      <Text>{route.params.todo.id}</Text>
    </Center>
  );
};
