import React from "react";
import { View, StyleSheet } from "react-native";

interface CenterProps {
  children: React.ReactNode;
}

export const Center: React.FC<CenterProps> = ({ children }) => {
  return <View style={styles.centerContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
