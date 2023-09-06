const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, "localhost", () => {
  console.log("Server is listening at localhost on port 5000");
});

const fetchPosts = require("./data/dataService.js");

app.get("/", async (req, res) => {
  try {
    const data = await fetchPosts.fetchPosts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ msg: "Error" });
  }
});
