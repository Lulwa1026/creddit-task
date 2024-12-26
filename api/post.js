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

// const getPostsById = async (id) => {
//   const data = await instance.get(`/posts/${id}` );
//   console.log("getPostsById", data)
//   return data;
// };

export {
  getPosts, //getPostsById
};
