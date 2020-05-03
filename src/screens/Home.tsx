import React from "react";
import { View, Text } from "react-native";
import { Center } from "../components/Center";

interface HomeProps {
  [key: string]: any;
}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Center>
      <View>
        <Text>Home</Text>
      </View>
    </Center>
  );
};
