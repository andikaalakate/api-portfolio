const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello Semua Nyaa~!!");
});

app.get("/posts", async (req, res) => {
  const posts = await prisma.post.findMany();

  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const newPostData = req.body;

  const post = await prisma.post.create({
    data: {
      title: newPostData.title,
      body: newPostData.body,
      image: newPostData.image,
      author: newPostData.author,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  res.send({
    success: true,
    message: "Post created successfully",
    post: post,
  });
});

app.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(postId),
    },
  });

  res.send({
    success: true,
    message: "Post fetched successfully",
    post: post,
  });
});

app.put("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const newPostData = req.body;

  const post = await prisma.post.update({
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

  res.send({
    success: true,
    message: "Post updated successfully",
    post: post,
  })
});

app.patch("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const newPostData = req.body;

  const post = await prisma.post.update({
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
  })

  res.send({
    success: true,
    message: "Post updated successfully",
    post: post
  })
})

app.delete("/posts/:id", async (req, res) => {
  const postId = req.params.id;

  const post = await prisma.post.delete({
    where: {
      id: parseInt(postId),
    },
  });

  res.send({
    success: true,
    message: "Post deleted successfully",
  });
});

app.get("/", (req, res) => {
  res.send("Hello World~!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
