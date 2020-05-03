import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type DrawerParamsList = {
  Home: undefined;
  About: undefined;
  Settings: undefined;
};

export type AuthNavProps<T extends keyof DrawerParamsList> = {
  navigation: StackNavigationProp<DrawerParamsList, T>;
  route: RouteProp<DrawerParamsList, T>;
};
