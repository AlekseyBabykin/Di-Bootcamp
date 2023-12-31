const express = require("express");
const router = express.Router();

const {
  regCheck,
  usernameExists,
} = require("../middleware/users.middleware.js");
const {
  postReg,
  postLogin,
  allUsers,
  getUser,
  updateUser,
  test,
} = require("../controllers/controller.js");

router.post("/register", regCheck, postReg);

router.post("/login", usernameExists, postLogin);

router.get("/users", allUsers);

router.get("/users/:id", getUser);

router.put("/users/:id", usernameExists, updateUser);

router.get("/login", test);
module.exports = { router };
