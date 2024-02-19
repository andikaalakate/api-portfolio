const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

const postsController = require("./post/post.controller");

app.use("/posts", postsController);

app.get("/", (req, res) => {
  res.send("Hello World~!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
