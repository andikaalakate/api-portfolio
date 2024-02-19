const { findPosts, findPostById, insertPost, findPostByTitle, deletePost, editPost } = require("./post.repository");

const getAllPosts = async () => {
  const posts = await findPosts();

  return posts;
};

const getPostById = async (postId) => {
  if (typeof postId !== "number") {
    throw Error("Id must be a number");
  }

  const post = await findPostById(postId);

  if (!post) {
    throw Error("Post not found");
  }

  return post;
};

const createPost = async (newPostData) => {
  const findPost = await findPostByTitle(newPostData.title);

  if (findPost) {
    throw Error("Post Title already exists");
  }

  const post = await insertPost(newPostData);

  return post;
};

const editPostById = async (postId, postData) => {
  await getPostById(postId);

  const post = await editPost(postId, postData);
  return post;
};

const deletePostById = async (postId) => {
  await getPostById(postId);

  await deletePost(postId);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPostById,
  deletePostById,
};
