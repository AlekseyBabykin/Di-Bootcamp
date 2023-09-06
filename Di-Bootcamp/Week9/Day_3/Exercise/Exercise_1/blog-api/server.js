const express = require("express");
const someData = [
  { id: 1, title: "banana", content: "Blalala" },
  { id: 2, title: "lemon", content: "myrmyo" },
  { id: 3, title: "BMV", content: "MRRRRRRRR" },
];

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, "localhost", () => {
  console.log("Server is listening at localhost on port 3000");
});

app.get("/GET/posts", (req, res) => {
  res.json(someData);
});

app.get("/GET/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = someData.find((el) => {
    return el.id === id;
  });
  if (!data) {
    res.sendStatus(404);
  } else {
    res.status(200).json(data);
  }
});
app.post("/POST/posts", (req, res) => {
  const { title, content } = req.body;
  const newsomeData = {
    id: someData.length + 1,
    title,
    content,
  };
  someData.push(newsomeData);
  res.status(200).json(someData);
});

app.put("/PUT/posts/:id", (req, res) => {
  const { id } = req.params;
  const { name, content } = req.body;
  const index = someData.findIndex((el) => {
    return el.id === id;
  });
  if (index === -1) return res.sendStatus(404);
  someData[index] = { ...someData[index], name: name, content: content };
  res.status(200).json(someData);
});

app.delete("/DELETE/posts/:id", (req, res) => {
  const { id } = req.params;
  const index = someData.findIndex((el) => el.id == id);

  if (index == -1) return res.status(404).json({ msg: "not found" });
  someData.splice(index, 1);

  res.status(200).json(someData);
});
