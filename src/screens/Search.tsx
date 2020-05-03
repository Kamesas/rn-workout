import React, { useState, useEffect } from "react";
import { Center } from "../components/Center";
import { Text, FlatList, Button } from "react-native";
import { todo } from "../Routes/HomeParamList";
import { SearchNavProps } from "../Routes/SearchParamList";

export const Search = ({ navigation }: SearchNavProps<"Search">) => {
  const [todoList, setTodoList] = useState<Array<todo> | null>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  return (
    <Center>
      <Text>Search</Text>
      {show && todoList && (
        <FlatList
          style={{ width: "100%" }}
          renderItem={({ item }) => {
            return (
              <Button
                title={`${item.id} - ${item.title}`}
                onPress={() => {
                  navigation.navigate("Todo", {
                    todo: item,
                  });
                }}
              />
            );
          }}
          keyExtractor={(person, idx) => person + idx.toString()}
          data={todoList}
        />
      )}
    </Center>
  );
};
