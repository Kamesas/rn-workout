import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AsyncStorage, Text, ActivityIndicator, View } from "react-native";
import { AuthStack } from "./AuthStack";
import { AppDrawer } from "./AppDrawer";
import { getUserData } from "../store/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";

export const Routes = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const userData = useSelector(({ authReducer }: any) => {
    return authReducer.userData;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("WorkoutUserData").then((user) => {
      if (user) {
        dispatch(getUserData(JSON.parse(user)));
      }

      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {userData ? <AppDrawer /> : <AuthStack />}
    </NavigationContainer>
  );
};
