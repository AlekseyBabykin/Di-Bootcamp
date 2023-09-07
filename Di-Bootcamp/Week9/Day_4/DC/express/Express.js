const express = require("express");

const app = express();
const { q_router } = require("./router/quiz.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on port ${PORT}`);
});

app.use("/quiz", q_router);
