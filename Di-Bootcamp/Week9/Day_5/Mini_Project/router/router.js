const express = require("express");
const router = express.Router();

const {
  getAlltasks,
  getAddtasks,
  getUpdatetasks,
  getDeletetasks,
} = require("../controller/product.js");

// Get all to-do items
router.get("/", getAlltasks);
// Add a new to-do item
router.post("/", getAddtasks);
// Update a to-do item by ID
router.put("/:id", getUpdatetasks);
// Delete a to-do item by ID
router.delete("/:id", getDeletetasks);

module.exports = { router };
