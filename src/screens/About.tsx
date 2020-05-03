import React from "react";
import { View, Text } from "react-native";
import { Center } from "../components/Center";

interface AboutProps {
  [key: string]: any;
}

export const About: React.FC<AboutProps> = () => {
  return (
    <Center>
      <View>
        <Text>About</Text>
      </View>
    </Center>
  );
};
