const knex = require("knex");
require("dotenv").config();
const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "iPad", price: 700 },
  { id: 3, name: "iWatch", price: 600 },
];

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "Alla", email: "aaa@gmail.com" },
  { id: 3, name: "Dan", email: "ddd@gmail.com" },
];

module.exports = { products, users };
