import React, { useState, useEffect } from "react";
import { Center } from "../components/Center";
import { Text, FlatList, Button } from "react-native";
import { HomeNavProps, todo } from "../Routes/HomeParamList";

interface FeedProps {
  [key: string]: any;
}

export const Feed = ({ navigation }: HomeNavProps<"Feed">) => {
  const [todoList, setTodoList] = useState<Array<todo> | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodoList(json));
  }, []);

  return (
    <Center>
      <Text>Feed</Text>
      {todoList && (
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
