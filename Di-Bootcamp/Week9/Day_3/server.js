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
const { products } = require("./config/db");
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// const PORT = 3001;

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/search", (req, res) => {
  const productName = req.query.name;
  const filtereProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(productName.toLowerCase());
  });
  if (filtereProducts.length === 0) {
    return res.status(200).json({ msg: "no match to your search" });
  }

  res.status(200).json(filtereProducts);
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);
  if (!product) return res.sendStatus(404);
  res.status(200).json(product);
});
// app.post();

app.post("/api/products", (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.json(products);
});

// app.put();
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((index) => index.id == id);
  products[index] = {
    ...products[index],
    name: name,
    price: price,
  };
  res.json(products);
});

// app.delete();
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((index) => index.id == id);
  if (index === -1) return res.status(404).json({ msg: "not found" });
  products.splice(index, 1);
  res.json(products);
});
