import { Button, View, TextInput } from "react-native";
import React, { useState } from "react";
import { addPost } from "../../api/post";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddPostScreen = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const mutation = useMutation({
    mutationKey: ["addPost"],
    mutationFn: (newPost) => addPost(newPost),
    onSucess: () => {
      queryClient.invalidateQueries({ queryKey: ["addPost"] });
    },
  });
  const handlePress = () => {
    mutation.mutate({ title, description });
    navigation.navigate("Home");
  };
  return (
    <View>
      <TextInput
        placeholder="Title"
        onChangeText={(e) => {
          setTitle(e);
        }}
      />
      <TextInput
        placeholder="Description"
        onChangeText={(e) => {
          setDescription(e);
        }}
      />
      <Button title="submit" onPress={handlePress} />
    </View>
  );
};

export default AddPostScreen;
