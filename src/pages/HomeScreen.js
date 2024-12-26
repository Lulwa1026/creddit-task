import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getPosts } from "../../api/post";
import { useQuery } from "@tanstack/react-query";
const HomeScreen = () => {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  const navigation = useNavigation();
  const posts = data;
  const productList = posts;

  const productListViews = productList?.map((post) => (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Details", post)}>
        <Text>{post.title}</Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <View>
      <Text>Welcome</Text>
      {productListViews}
    </View>
  );
};

export default HomeScreen;
