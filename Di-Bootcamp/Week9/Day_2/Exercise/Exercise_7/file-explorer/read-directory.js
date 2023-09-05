const fs = require("fs");

const a = "./";

fs.readdir(a, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data.forEach((el) => {
    console.log(el);
  });
});
