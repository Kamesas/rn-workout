import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type AuthParamsList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavProps<T extends keyof AuthParamsList> = {
  navigation: StackNavigationProp<AuthParamsList, T>;
  route: RouteProp<AuthParamsList, T>;
};
