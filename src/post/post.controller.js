const express = require("express");
const prisma = require("../db");
const { getAllPosts, getPostById, createPost, putPost, patchPost, deletePost } = require("./post.service");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await getAllPosts();

  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const postId = req.params.id;

  const post = await getPostById(postId);

  res.send({
    success: true,
    message: "Post fetched successfully",
    post: post,
  });
});

router.post("/", async (req, res) => {
  const newPostData = req.body;

  const post = await createPost(newPostData);

  res.send({
    success: true,
    message: "Post created successfully",
    post: post,
  });
});

router.put("/:id", async (req, res) => {
  const postId = req.params.id;
  const newPostData = req.body;

  const post = await putPost(postId, newPostData);

  res.send({
    success: true,
    message: "Post updated successfully",
    post: post,
  })
});

router.patch("/:id", async (req, res) => {
  const postId = req.params.id;
  const newPostData = req.body;

  const post = await patchPost(postId, newPostData);

  res.send({
    success: true,
    message: "Post updated successfully",
    post: post
  })
})

router.delete("/:id", async (req, res) => {
  const postId = req.params.id;

  const post = await deletePost(postId);

  res.send({
    success: true,
    message: "Post deleted successfully",
  });
});

module.exports = router;