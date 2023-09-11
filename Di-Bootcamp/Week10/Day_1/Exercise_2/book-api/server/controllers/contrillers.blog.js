const {
  _getAllBook,
  _getBookById,
  _insertBook,
} = require("../models/blog.models.js");

const getAllBook = (req, res) => {
  _getAllBook()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "not found" });
    });
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.bookId;
    console.log(id);
    const data = await _getBookById(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "not blog match this id" });
  }
};

const insertBook = async (req, res) => {
  try {
    const data = await _insertBook(req.body);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "error" });
  }
};

module.exports = {
  getAllBook,
  getBookById,
  insertBook,
};
