const { products } = require("../config/db.js");

const getAllProducts = (req, res) => {
  res.json(products);
};
const searchProduct = (req, res) => {
  const productName = req.query.name;
  const filtereProducts = products.filter((item) => {
    return item.name.toLowerCase().includes(productName.toLowerCase());
  });
  if (filtereProducts.length === 0) {
    return res.status(200).json({ msg: "no match to your search" });
  }

  res.status(200).json(filtereProducts);
};

const getProduct = (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);
  if (!product) return res.sendStatus(404);
  res.status(200).json(product);
};

const creatProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };
  products.push(newProduct);
  res.json(products);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((index) => index.id == id);
  products[index] = {
    ...products[index],
    name: name,
    price: price,
  };
  res.json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((index) => index.id == id);
  if (index === -1) return res.status(404).json({ msg: "not found" });
  products.splice(index, 1);
  res.json(products);
};
module.exports = {
  getAllProducts,
  searchProduct,
  getProduct,
  creatProduct,
  updateProduct,
  deleteProduct,
};
