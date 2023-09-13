const express = require("express");
const cors = require("cors");
const { emojis } = require("./data.js");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  console.log(emojis);
  res.json(emojis);
});

// app.post("/check", (req, res) => {
//   console.log(req.body);
//   res.send("welcome, " + req.body.answer);
// });

app.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});
