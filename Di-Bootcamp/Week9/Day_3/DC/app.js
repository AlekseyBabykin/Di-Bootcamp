const express = require("express");
const cors = require("cors");
const { fiveRandomEmj } = require("./data.js");

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json(fiveRandomEmj);
});
app.post("/", (req, res) => {
  console.log(request.body);
});

// app.post("/check", (req, res) => {
//   console.log(req.body);
//   res.send("welcome, " + req.body.answer);
// });

app.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});
