const {
  _getAllBlog,
  _getBlogById,
  _insertBlog,
  _updateBlog,
  _deleteBlog,
} = require("../models/blog.models.js");

const getAllBlog = (req, res) => {
  _getAllBlog()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ msg: "not found" });
    });
};

const getBlogById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await _getBlogById(id);
    res.json(data);
  } catch (err) {
    console.log(error);
    res.status(404).json({ msg: "not blog match this id" });
  }
};

const insertBlog = async (req, res) => {
  try {
    const data = await _insertBlog(req.body);
    res.json(data);
  } catch (err) {
    console.log(error);
    res.status(404).json({ msg: "error" });
  }
};

const UpdateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const data = await _updateBlog(req.body, id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "something went wrong" });
  }
};

const DeleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await _deleteBlog(id);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: error.message });
  }
};

module.exports = {
  getAllBlog,
  getBlogById,
  insertBlog,
  UpdateBlog,
  DeleteBlog,
};
