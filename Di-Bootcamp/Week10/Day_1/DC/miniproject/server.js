const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { router } = require("./server/routers/router.js");
const cors = require("cors");

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.use("/", router);
