const { db } = require("../config/db.js");

const _getAllBlog = () => {
  return db("posts").select("id", "title", "content");
};

const _getBlogById = (id) => {
  return db("posts").select("id", "title", "content").where({ id });
};

// const _searchblog = (title) => {
//   return db("posts")
//     .select("id", "title", "content")
//     .whereILike("title", `$"title}%`);
// };
const _insertBlog = ({ title, content }) => {
  return db("posts").insert({ title, content }, ["id", "title", "content"]);
};

const _updateBlog = ({ title, content }, id) => {
  return db("posts")
    .update({ title, content })
    .where({ id })
    .returning(["id", "title", "content"]);
};

const _deleteBlog = (id) => {
  return db("posts").where({ id }).del().returning(["id", "title", "content"]);
};

module.exports = {
  _getAllBlog,
  _getBlogById,
  //   _searchProduct,
  _insertBlog,
  _updateBlog,
  _deleteBlog,
};
