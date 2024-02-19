const express = require("express");
const {
  getAllPosts,
  getPostById,
  createPost,
  editPostById,
  deletePostById,
} = require("./post.service");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await getAllPosts();

    res.send(posts);
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Gagal mengambil data.",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);

    const post = await getPostById(postId);

    res.send({
      success: true,
      message: "Post fetched successfully",
      post: post,
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newPostData = req.body;

    const post = await createPost(newPostData);

    res.send({
      success: true,
      message: "Post created successfully",
      post: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Gagal membuat post.",
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const postData = req.body;

    const post = await editPostById(postId, postData);

    if (
      !(
        postData.title &&
        postData.body &&
        postData.image &&
        postData.author
      )
    ) {
      return res.status(400).send({
        success: false,
        message: "Please provide all the required fields",
      });
    }

    res.send({
      success: true,
      message: "Post updated successfully",
      post: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const postData = req.body;

    const post = await editPostById(postId, postData);

    res.send({
      success: true,
      message: "Post updated successfully",
      post: post,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);

    const post = await deletePostById(postId);

    res.send({
      success: true,
      message: "Post deleted successfully",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
