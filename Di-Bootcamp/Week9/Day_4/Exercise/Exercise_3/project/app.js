const express = require("express");
const app = express();

const { b_router } = require("./routes/book.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on port ${PORT}`);
});

app.use("/books", b_router);
