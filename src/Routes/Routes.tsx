import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage } from "react-native";
import { AuthStack } from "./AuthStack";
import { AppDrawer } from "./AppDrawer";
import { getUserData } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";

export const Routes = () => {
  const userData = useSelector(({ authReducer }: any) => {
    return authReducer.userData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("WorkoutUserData")
      .then((userData) => {
        if (userData) {
          dispatch(getUserData(JSON.parse(userData)));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <NavigationContainer>
      {userData ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
