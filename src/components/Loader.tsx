import React from "react";
import { BLUE_1 } from "../styles/colors";
import { View, ActivityIndicator } from "react-native";

export const Loader = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size="large" color={BLUE_1} />
    </View>
  );
};
