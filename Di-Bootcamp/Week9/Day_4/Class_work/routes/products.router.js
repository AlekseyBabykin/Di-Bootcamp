const express = require("express");
const p_router = express.Router();
const logger = require("../middlewares/utils.js");

const {
  getAllProducts,
  searchProduct,
  getProduct,
  creatProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.controller.js");

module.exports = { p_router };

p_router.get("/", logger, getAllProducts);

p_router.get("/search", searchProduct);

p_router.get("/:id", getProduct);
// app.post();

p_router.post("/", creatProduct);

// app.put();
p_router.put("/:id", updateProduct);

// app.delete();
p_router.delete("/:id", deleteProduct);
