// const jwt = require("jsonwebtoken");

const { decode } = require("jsonwebtoken");

// //Create a JWT -- jwt.sign(palyload, secret-code, expire-time)

// const token = jwt.sign(
//   {
//     email: "aaa@gmail.com",
//     username: "aaa",
//     userid: 123456,
//   },
//   "1234#456@",
//   {
//     expiresIn: "1d",
//   }
// );

// console.log(token);

const oldToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFhYUBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFhYSIsInVzZXJpZCI6MTIzNDU2LCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjIzOTAyMn0.VZT_MbEJl8SAA9ItIMpg9KrHMZEo-Wo7khlq36x4pPk`;

jwt.verify(oldToken, "1234#456@", (err, docode) => {
  if (err) return console.log(err);
  console.log(decode);
});
