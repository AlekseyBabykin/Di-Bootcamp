const express = require("express");

const {
  getAllBook,
  getBookById,
  insertBook,
} = require("../controllers/contrillers.blog.js");
const router = express.Router();

router.get("/", getAllBook);

router.get("/:bookId", getBookById);

router.post("/", insertBook);

module.exports = { router };
