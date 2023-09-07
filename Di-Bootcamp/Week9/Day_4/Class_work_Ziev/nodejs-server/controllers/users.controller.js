const { users } = require("../config/db.js");

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((item) => item.id == id);
  res.json(user);
};

module.exports = {
  getAllUsers,
  getUser,
};
