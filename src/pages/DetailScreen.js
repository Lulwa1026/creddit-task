import { View, Text, Image } from "react-native";
import React from "react";

const DetailScreen = ({ route }) => {
  const { description } = route.params;
  return (
    <View>
      <Text>welcom to detail page</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default DetailScreen;
