const fs = require("fs");

function readFile(file) {
  fs.readFile(file, "utf-8", function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
}

function writeFile(file, data) {
  fs.writeFile(file, data, "utf-8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Write operation complete.");
    }
  });
}

module.exports = { readFile, writeFile };
