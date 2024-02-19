const prisma = require("../db");

const getAllPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

const getPostById = async (id) => {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return post;
};

const createPost = async (newPostData) => {
  const post = prisma.post.create({
    data: {
      title: newPostData.title,
      body: newPostData.body,
      image: newPostData.image,
      author: newPostData.author,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  return post;
};

const putPost = async (postId, newPostData) => {
  const post = prisma.post.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      title: newPostData.title,
      body: newPostData.body,
      image: newPostData.image,
      author: newPostData.author,
      updatedAt: new Date(),
    },
  });

  return post;
};

const patchPost = async (postId, newPostData) => {
  const post = prisma.post.update({
    where: {
      id: parseInt(postId),
    },
    data: {
      title: newPostData.title,
      body: newPostData.body,
      image: newPostData.image,
      author: newPostData.author,
      updatedAt: new Date(),
    },
  });

  return post;
};

const deletePost = async (postId) => {
  const post = prisma.post.delete({
    where: {
      id: parseInt(postId),
    },
  });

  return post;
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  putPost,
  patchPost,
  deletePost,
};
