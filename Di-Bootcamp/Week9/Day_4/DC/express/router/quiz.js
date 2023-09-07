const express = require("express");
const q_router = express.Router();
const {
  getQuestion,
  sentAnswer,
  getScore,
} = require("../controllers/question.js");

q_router.get("/", getQuestion);

q_router.post("/", sentAnswer);

q_router.get("/score", getScore);

module.exports = { q_router };
