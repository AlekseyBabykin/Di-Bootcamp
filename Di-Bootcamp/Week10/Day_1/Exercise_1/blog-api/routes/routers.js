const express = require("express");

const {
  getAllBlog,
  getBlogById,
  insertBlog,
  UpdateBlog,
  DeleteBlog,
} = require("../controllers/contrillers.blog.js");
const router = express.Router();

router.get("/", getAllBlog);

router.get("/:id", getBlogById);

router.post("/", insertBlog);

router.put("/:id", UpdateBlog);

router.delete("/:id", DeleteBlog);

module.exports = { router };
