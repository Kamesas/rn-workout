import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { todo } from "./HomeParamList";

export type SearchParamsList = {
  Search: undefined;
  Todo: { todo: todo };
  Edit: { todo: todo };
};

export type SearchNavProps<T extends keyof SearchParamsList> = {
  navigation: StackNavigationProp<SearchParamsList, T>;
  route: RouteProp<SearchParamsList, T>;
};
