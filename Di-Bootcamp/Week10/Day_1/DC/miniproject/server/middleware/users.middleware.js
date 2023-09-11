const { _getAllUsers } = require("../models/users.models.js");
const bcrypt = require("bcrypt");

// check if required fields are not empty and username doesnt exist
const regCheck = (req, res, next) => {
  const { email, password } = req.body;
  let users = _getAllUsers();
  console.log(users);
  const userExists = users.findIndex((item) => item[0].email == email);
  if (password == "" || username == "" || userExists != -1) {
    res.json({
      msg: "Registration unsuccessfull. Username exists or required fields username and password are empty",
    });
  } else {
    const id = getID(users);
    req.body.id = id;
    next();
  }
};

// username exists check
function usernameExists(req, res, next) {
  const { email } = req.body;
  let users = _getAllUsers();
  const userFind = users.findIndex((item) => item.email == email);
  if (userFind == -1) {
    res.json({
      msg: "User with such username doesn`t exists",
    });
  } else {
    next();
  }
}

//create ID = max existed ID + 1
function getID(users) {
  const idArr = users.map((item) => item.id);
  console.log("idArr: ", idArr);
  const id = Math.max(...idArr) + 1;
  console.log("id: ", id);
  return id;
}

module.exports = { regCheck, usernameExists };
