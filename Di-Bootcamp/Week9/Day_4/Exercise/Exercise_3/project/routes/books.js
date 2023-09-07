const express = require("express");
const b_router = express.Router();

const {
  getAllbook,
  getAddbook,
  getUpdatebook,
  getDeletebook,
} = require("../controllers/products.js");

// Get all to-do items
p_router.get("/", getAllbook);
// Add a new to-do item
p_router.post("/", getAddbook);
// Update a to-do item by ID
p_router.put("/:id", getUpdatebook);
// Delete a to-do item by ID
p_router.delete("/:id", getDeletebook);

module.exports = { b_router };
