const prisma = require("../db");

const findPosts = async () => {
  const posts = await prisma.post.findMany();

  return posts;
};

const findPostById = async (postId) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
};

const findPostByTitle = async (title) => {
  const post = await prisma.post.findFirst({
    where: {
      title: title,
    },
  });

  return post;
};

const insertPost = async (newPostData) => {
  post = await prisma.post.create({
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

const editPost = async (postId, postData) => {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        title: postData.title,
        body: postData.body,
        image: postData.image,
        author: postData.author,
        updatedAt: new Date(),
      },
    });

    return post;
}

const deletePost = async (postId) => {
  await prisma.post.delete({
    where: {
      id: postId,
    },
  });
}

module.exports = {
  findPosts,
  findPostById,
  findPostByTitle,
  insertPost,
  editPost,
  deletePost
};
