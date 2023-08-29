function someFunc(param) {
  const a = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof param === "string") {
        resolve(param.toUpperCase());
      } else {
        reject("not string");
      }
    }, 3000);
  });
  return a;
}
someFunc("abc")
  .then((result) => console.log((result + " ").repeat(2).trim()))
  .catch((eror) => console.log("In CATCH, THE RORORIS", eror))
  .finally(() => console.log("finaly it works"));
