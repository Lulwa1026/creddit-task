import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
import React from "react";
import { getPostById, deletePostById, addComment } from "../../api/post";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
const DetailScreen = ({ route }) => {
  const { description } = route.params;
  const { postId } = route.params;
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["postId"],
    queryFn: () => getPostById(postId),
  });

  const postMmutation = useMutation({
    mutationFn: (id) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Posts", id] });
    },
  });
  const mutation = useMutation({
    mutationKey: ["deletePost"],
    mutationFn: () => deletePostById(postId),
    onSuccess: () => {
      navigation.navigate("Home");
    },
  });

  const handleDelete = () => {
    mutation.mutate(postId);
    navigation.navigate("Home");
  };

  const navigation = useNavigation();

  return (
    <View>
      <Text>welcom to detail page</Text>
      <Text>{description}</Text>
      <Text>{}</Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

export default DetailScreen;
