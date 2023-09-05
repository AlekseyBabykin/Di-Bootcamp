const fs = require("fs");

function someText() {
  fs.readFile("file-data.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

module.exports = { someText };
