const express = require("express");
const p_router = express.Router();
const {
  getAlltodos,
  getAddtodos,
  getUpdatetodos,
  getDeletetodos,
} = require("./controllers/products.js");

// Get all to-do items
p_router.get("/", getAlltodos);
// Add a new to-do item
p_router.post("/", getAddtodos);
// Update a to-do item by ID
p_router.put("/:id", getUpdatetodos);
// Delete a to-do item by ID
p_router.delete("/:id", getDeletetodos);

module.exports = { p_router };
