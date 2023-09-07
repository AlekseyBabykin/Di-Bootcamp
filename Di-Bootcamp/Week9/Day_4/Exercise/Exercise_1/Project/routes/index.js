const express = require("express");
const p_router = express.Router();

p_router.get("/", (req, res) => {
  res.send("Homepage");
});
p_router.get("/about", (req, res) => {
  res.send("about");
});
module.exports = { p_router };
