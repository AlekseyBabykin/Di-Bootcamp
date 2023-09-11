const fs = require("fs");
const bcrypt = require("bcrypt");
const {
  _getAllUsers,
  // _getUsersById,
  _insertUsers,
  _updateUsers,
} = require("../models/users.models.js");

const postReg = async (req, res) => {
  try {
    const { email, password } = req.body;
    // let usersData = _getAllUsers();
    const saltRounds = 10;

    // bcrypt.genSalt(saltRounds, function (err, salt) {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // bcrypt.hash(password, salt, function (err, hash) {
    const newUser = {
      // id: id,
      email,
      password: hashedPassword,
    };
    // usersData.push(newUser);
    await _insertUsers(email, hashedPassword);
    console.log(newUser);
    res.status(200).json({ msg: "register" });
    // });
  } catch (err) {
    console.error(err);
  }
};

const postLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    let usersData = _getAllUsers();
    if (usersData.find((el) => el.email == email) == -1) {
      return res.status(404).json({ msg: `${email} doesn^t exist` });
    }
    const nowUsers = usersData.find((el) => el.email == email);
    bcrypt.compare(password, nowUsers.password, function (err, result) {
      if (result) {
        return res.status(200).json({ msg: `${username} logged successffuly` });
      } else {
        return res.status(400).json({ msg: `Wrong password ${username}` });
      }
    });
  } catch (err) {
    console.error(err);
  }
};

const allUsers = async (req, res) => {
  try {
    const usersData = await _getAllUsers();
    res.status(200).json(usersData);
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const usersData = await _getAllUsers();
    const user = usersData.find((el) => el.id == id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ msg: `users sience ${id} not found` });
    }
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const { email, password } = req.body;
    // const usersData = await _getAllUsers();
    // const userIndex = usersData.findIndex((el) => el.id == id);
    const newUser = {
      id,
      email,
      password,
    };
    await _updateUsers(email, password, id);
    res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  postReg,
  postLogin,
  allUsers,
  getUser,
  updateUser,
};
