import React from "react";
import { Center } from "../components/Center";
import { Text, Button } from "react-native";
import { HomeNavProps } from "../Routes/HomeParamList";

interface TodoProps {
  [key: string]: any;
}

export const Todo = ({ navigation, route }: HomeNavProps<"Todo">) => {
  return (
    <Center>
      <Text>{route.params.todo.title}</Text>
      <Button
        title="Edit"
        onPress={() => {
          navigation.navigate("Edit", {
            todo: route.params.todo,
          });
        }}
      />
    </Center>
  );
};
