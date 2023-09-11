const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { router } = require("./routes/routers.js");

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.use("/", router);
