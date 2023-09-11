const { db } = require("../config/db.js");

const _getAllUsers = () => {
  return db("users").select("id", "email", "password");
};

// const _getUsersById = (id) => {
//   return db("users").select("id", "email", "password").where({ id });
// };

const _insertUsers = ({ email, password }) => {
  return db("users").insert({ email, password }, ["id", "email", "password"]);
};

const _updateUsers = ({ email, password }, id) => {
  return db("users")
    .update({ email, password })
    .where({ id })
    .returning(["id", "email", "password"]);
};

module.exports = {
  _getAllUsers,
  // _getUsersById,
  _insertUsers,
  _updateUsers,
};
