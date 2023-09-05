const fs = require("fs");

// const readData = fs.readFile("source.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   return data;
// });

// const writeData = fs.writeFile("destination.txt", readData, "utf-8", () => {});

fs.readFile("source.txt", "utf-8", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Write the data to "destination.txt"
  fs.writeFile("destination.txt", data, "utf-8", (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data has been written to destination.txt");
  });
});
