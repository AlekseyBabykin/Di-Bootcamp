const { db } = require("../config/db.js");

const _getAllProducts = () => {
  return db("product").select("id", "name", "price");
};
const _getProductbyId = (id) => {
  return db("product").select("id", "name", "price").where({ id });
};

module.exports = { _getAllProducts, _getProductbyId };
