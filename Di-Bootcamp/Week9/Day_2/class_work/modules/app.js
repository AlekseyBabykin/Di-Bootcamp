const axios = require("axios");

import axios from "axios";
const info = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// module.exports = { info };
// export default info;
