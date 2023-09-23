const { _register, _login } = require("../models/users.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  try {
    const row = await _login(req.body.email.toLowerCase());
    //email
    if (row.length === 0)
      return res.status(400).json({ msg: "email not found" });
    //password
    const match = await bcrypt.compare(req.body.password + "", row[0].password);
    if (!match) return res.status(400).json({ msg: "wrong password" });

    //succesful login
    const userid = row[0].userid;
    const email = row[0].email;
    //my secret
    const secret = process.env.ACCES_TOKEN_SECRET;
    //token
    const accessToken = jwt.sign({ userid, email }, secret, {
      expiresIn: "60s",
    });
    res.cookie("token", accessToken, { httpOnly: true, maxAge: 60 * 1000 });
    //response with token

    res.json({ token: accessToken });
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "something went wrong" });
  }
};

const register = async (req, res) => {
  const { email, password } = req.body;

  const lower_email = email.toLowerCase();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password + "", salt);

  try {
    const row = await _register(lower_email, hash);
    res.json(row);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: err.massage });
  }
};

module.exports = {
  register,
  login,
};
