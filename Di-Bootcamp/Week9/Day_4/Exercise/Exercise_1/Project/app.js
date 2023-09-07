const express = require("express");
const app = express();
const { p_router } = require("./routes/index.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on port ${PORT}`);
});

app.use("/", p_router);
