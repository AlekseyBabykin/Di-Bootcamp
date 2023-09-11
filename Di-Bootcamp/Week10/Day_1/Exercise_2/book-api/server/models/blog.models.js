const { db } = require("../config/db.js");

const _getAllBook = () => {
  return db("books").select("id", "title", "author", "publishedyear");
};

const _getBookById = (id) => {
  return db("books")
    .select("id", "title", "author", "publishedyear")
    .where({ id });
};

const _insertBook = ({ title, author, publishedyear }) => {
  return db("books").insert({ title, author, publishedyear }, [
    "id",
    "title",
    "author",
    "publishedyear",
  ]);
};

module.exports = {
  _getAllBook,
  _getBookById,
  _insertBook,
};
