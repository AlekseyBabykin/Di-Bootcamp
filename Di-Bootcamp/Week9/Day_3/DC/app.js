const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "😍", name: "Love1" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "👉", name: "Hand" },
  { emoji: "👿 ", name: "Agry" },
  { emoji: "💖", name: "Love" },
];
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(req.body);
  res.send("welcome, " + req.body.answer);
});

app.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});
