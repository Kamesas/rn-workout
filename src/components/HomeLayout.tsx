import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BLACK_2 } from "../styles/colors";

interface HomeLayoutProps {
  [key: string]: any;
}

export const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: BLACK_2 }}>
        {children}
      </View>
    </SafeAreaView>
  );
};
