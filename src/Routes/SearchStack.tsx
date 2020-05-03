import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "../screens/Search";
import { SearchParamsList } from "./SearchParamList";

interface SearchStackProps {
  [key: string]: any;
}

const Stack = createStackNavigator<SearchParamsList>();

export const SearchStack: React.FC<SearchStackProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
