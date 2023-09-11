const fs = require("fs");
const bcrypt = require("bcrypt");

const readData = () => {
  try {
    const data = fs.readFileSync("./data/users.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return [];
  }
};

const writeData = (datainfo) => {
  try {
    let dataJson = JSON.stringify(datainfo);
    fs.writeFileSync("./data/users.json", dataJson);
    console.log("You tasks written successfully");
  } catch (err) {
    console.error(err);
  }
};

const postReg = (req, res) => {
  try {
    const { id, fname, lname, email, username, password } = req.body;
    let usersData = readData();
    const saltRounds = 10;

    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        const newUser = {
          id: id,
          fname: fname,
          lname: lname,
          email: email,
          username: username,
          password: hash,
        };
        usersData.push(newUser);
        writeData(usersData);
        res.status(200).json({ msg: `${username} successfull created` });
      });
    });
  } catch (err) {
    console.error(err);
  }
};

const postLogin = (req, res) => {
  try {
    const { username, password } = req.body;
    let usersData = readData();
    if (usersData.find((el) => el.username == username) == -1) {
      return res.status(404).json({ msg: `${username} doesn^t exist` });
    }
    const nowUsers = usersData.find((el) => el.username == username);
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

const allUsers = (req, res) => {
  try {
    const usersData = readData();
    res.status(200).json(usersData);
  } catch (err) {
    console.error(err);
  }
};

const getUser = (req, res) => {
  try {
    const id = req.params.id;
    const usersData = readData();
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

const updateUser = (req, res) => {
  try {
    const id = req.params.id;
    const { fname, lname, email, username, password } = req.body;
    const usersData = readData();
    const userIndex = usersData.findIndex((el) => el.id == id);
    usersData[userIndex] = {
      ...usersData[userIndex],
      fname,
      lname,
      email,
      username,
      password,
    };
    writeData(usersData);
    res.status(200).json(usersData);
  } catch (err) {
    console.error(err);
  }
};
const test = async (req, res) => {
  res.json("Hello I am send from server");
};
module.exports = {
  postReg,
  postLogin,
  allUsers,
  getUser,
  updateUser,
  readData,
  test,
};
