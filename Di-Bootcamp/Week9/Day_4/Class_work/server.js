// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("url=>", req.url);
//   console.log("headers=>", req.headers);
//   console.log("getting request on my first server");
//   if (req.url == "/") {
//     if (req.method == "GET") {
//     }
//     res.end("<h1> Home</h1>");
//   }
//   if (req.url == "/about") {
//     res.end("<h1>about</h1>");
//   } else {
//     res.end("<h1> page Not found</h1>");
//   }
// });

// server.listen(5000, () => {
//   console.log("run on port 5000");
// });

const express = require("express");
const dotenv = require("dotenv");
const { p_router } = require("./routes/products.router.js");
const { u_router } = require("./routes/users.router.js");
const { auth } = require("./middlewares/utils.js");
dotenv.config();

// const logger = (req, res, next) => {
//   consolr.log(req.url);
//   consolr.log(req.params);
//   consolr.log(req.query);
//   consolr.log(req.body);
//   next();
// };

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());
// app.use(logger);
app.use("/api/users", auth);
// const PORT = 3001;

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.use("/api/products", p_router);
app.use("/api/users", u_router);
