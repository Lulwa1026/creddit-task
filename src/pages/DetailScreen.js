import {
  View,
  Text,
  Button,
  ActivityIndicator,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import { getPostById, deletePostById } from "../../api/post";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { deletePost } from "../../api/post";

const DetailScreen = ({ route }) => {
  const { description, postId } = route.params;
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPostById(postId),
  });
  // const { data: post } = useQuery({
  //   queryKey: ["post", postId],
  //   queryFn: () => getPostById(postId),
  // });
  const mutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", id]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
    navigation.navigate("Home");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Post Details</Text>
      <Text style={{ marginVertical: 10 }}>{description}</Text>
      <Button title="delete" onPress={() => handleDelete(data?.id)}></Button>
      <Button
        title="add comment"
        onPress={() => navigation.navigate("Add Comment")}
      />
    </View>
  );
};

export default DetailScreen;
