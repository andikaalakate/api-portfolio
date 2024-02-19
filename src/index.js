const express = require("express");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.send("Hello Semua Nyaa~!!");
});

app.get("/", (req, res) => {
  res.send("Hello World~!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
