const a = require("./products");

console.log(a);

function anySome(arr, name) {
  arr.forEach((el) => {
    if (el[name] === "alex") {
      console.log(el);
    }
  });
}
anySome(a, "alex");
anySome(a, "fedia");
anySome(a, "leah");
