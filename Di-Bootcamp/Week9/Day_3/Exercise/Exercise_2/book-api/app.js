const express = require("express");
const someData = [
  { id: 1, title: "banana", author: "Blalala", publishedYear: 2000 },
  { id: 2, title: "lemon", author: "myrmyo", publishedYear: 1986 },
  { id: 3, title: "BMV", author: "MRRRRRRRR", publishedYear: 1996 },
];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});

app.get("/GET/api/books", (req, res) => {
  res.status(200).json(someData);
});

app.get("/GET/api/books/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(id);
  const data = someData.find((el) => el.id === id);
  if (!data) {
    return res.sendStatus(404);
  } else {
    res.status(200).json(data);
  }
});

app.post("/POST/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;
  const newSomedata = {
    id: someData.length + 1,
    title,
    author,
    publishedYear,
  };
  someData.push(newSomedata);
  res.status(200).json(someData);
});
