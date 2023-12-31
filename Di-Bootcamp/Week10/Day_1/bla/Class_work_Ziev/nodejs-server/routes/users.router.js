const { getAllUsers, getUser } = require("../controllers/users.controller.js");
const express = require("express");
const u_router = express.Router();

u_router.get("/", getAllUsers);
u_router.get("/:id", getUser);

module.exports = { u_router };
