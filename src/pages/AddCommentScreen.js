import { Button, View, TextInput } from "react-native";
import React, { useState } from "react";
import { addComment } from "../../api/post";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddCommentScreen = () => {
  const queryClient = useQueryClient();
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const mutation = useMutation({
    mutationKey: ["addComment"],
    mutationFn: () => {
      addComment({ username, comment }, id);
    },
    onSucess: () => {
      queryClient.invalidateQueries({ queryKey: ["addComment"] });
    },
  });

  const handleSubmit = () => {
    mutation.mutate(id, { username, comment });
    navigation.navigate("Home");
  };
  return (
    <View>
      <TextInput
        placeholder="Username"
        onChangeText={(e) => {
          setUsername(e);
        }}
      />
      <TextInput
        placeholder="Comment"
        onChangeText={(e) => {
          setComment(e);
        }}
      />
      <Button title="submit" onPress={handleSubmit} />
    </View>
  );
};

export default AddCommentScreen;
