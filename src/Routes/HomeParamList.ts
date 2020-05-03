import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type todo = {
  id: number;
  title: string;
  completed: string;
  [key: string]: any;
};

export type HomeParamList = {
  Feed: undefined;
  Todo: { todo: todo };
  Edit: { todo: todo };
};

export type HomeNavProps<T extends keyof HomeParamList> = {
  navigation: StackNavigationProp<HomeParamList, T>;
  route: RouteProp<HomeParamList, T>;
};
