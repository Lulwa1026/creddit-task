import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../pages/DetailScreen";
import HomeScreen from "../pages/HomeScreen";
import AddPostScreen from "../pages/AddPostScreen";
const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Add" component={AddPostScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
