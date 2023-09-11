const express = require("express");
const app = express();
const cors = require("cors");
const { router } = require("./router/router.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/", router);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`run on port ${PORT}`);
});
