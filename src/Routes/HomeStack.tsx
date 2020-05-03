import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeParamList } from "./HomeParamList";
import { Feed } from "../screens/Feed";
import { TouchableOpacity, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
import { Todo } from "../screens/Todo";
import { Edit } from "../screens/Edit";

interface HomeStackProps {
  [key: string]: any;
}

const Stack = createStackNavigator<HomeParamList>();

export const HomeStack = () => {
  const { logout } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}
              >
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
      <Stack.Screen
        name="Todo"
        options={({ route }) => ({
          headerTitle: `Todo : ${route.params.todo.id}`,
        })}
        component={Todo}
      />
      <Stack.Screen
        name="Edit"
        options={({ route }) => ({
          headerTitle: `Edit : ${route.params.todo.id}`,
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <Text>Done</Text>
            </TouchableOpacity>
          ),
        })}
        component={Edit}
      />
    </Stack.Navigator>
  );
};
