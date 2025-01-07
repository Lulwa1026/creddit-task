import instance from "./index.js";

async function getPosts() {
  try {
    const data = await instance.get("/posts");
    console.log("getPosts", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function getPostById(id) {
  const response = await instance.get(`/posts/${id}`);
  console.log("getPostById", response);
  return response;
}

async function addPost(formData) {
  const response = await instance.post("/posts", formData);
  console.log("addPost", response);
  return response;
}

async function deletePostById(id) {
  const response = await instance.delete(`/posts/${id}`);
  console.log("deletePostById", response);
  return response;
}

async function addComment(id, formData) {
  const response = await instance.post(`/posts/comments/${id}`, formData);
  console.log("addComment", response);
  return response;
}

async function deleteComment(id) {
  const response = await instance.post(`/posts/comments/${id}`);
  console.log("deleteComment", response);
  return response;
}

export {
  getPosts,
  getPostById,
  addPost,
  deletePostById,
  addComment,
  deleteComment,
};
