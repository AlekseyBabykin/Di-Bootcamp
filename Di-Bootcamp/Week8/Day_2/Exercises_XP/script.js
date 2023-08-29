// 🌟 Exercise 1 : Comparison

// function compareToTen(num) {
//   const myPromise = new Promise((resolve, reject) => {
//     if (num <= 10) {
//       resolve("equal to 10");
//     } else {
//       reject("greater than 10");
//     }
//   });
//   return myPromise;
// }
// compareToTen(15)
//   .then((result) => console.log(result))
//   .catch((error) => console.log("in the catch", error));

// compareToTen(8)
//   .then((result) => console.log(result))
//   .catch((error) => console.log("in the catch", error));

//   🌟 Exercise 2 : Promises

// function someFunc(param) {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof param === "string") {
//         resolve("this is string, succuess");
//       } else {
//         reject("is not seccess");
//       }
//     }, 4000);
//   });
//   return myPromise;
// }
// someFunc("fkjgjdjgjgj")
//   .then((res) => console.log(res))
//   .catch((error) => console.log("balalalla", error));
// someFunc(32323445)
//   .then((res) => console.log(res))
//   .catch((error) => console.log("balalalla", error));

// 🌟 Exercise 3 : Resolve & Reject
// const secondPromyse = Promise.resolve(3);
// secondPromyse.then((res) => console.log(res));

// const secondPromyse2 = Promise.reject("Boo!");
// secondPromyse2
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
