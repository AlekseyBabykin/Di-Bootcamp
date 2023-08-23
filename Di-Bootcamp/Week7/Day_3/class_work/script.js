// let b = 3,
//   d = b,
//   u = b;

// const tree = ++d * d * b * b++ + +--d + +(+b--) + +(+d) * b + +u;

// console.log(tree);

// 4 * 4 * 3 * 3 + 3 + 4 + 3 * 3 + 3;

// var x = 6;
// let x = 9;
// const A = "a";

// let x = 8;
// let x = 3;
// {
//   let x = 9;
// }
// console.log("x=>", x);

// for (var i = 0; i < 5; i++) {}
// console.log("i=>", i);
// function x() {
//   let x = 8;
//   function a() {
//     let a = 7;
//     console.log("x=>", x);
//   }
//   console.log("a=>", a);
// }
// x();
// function x() {
//   console.log("Hello");
// }

// console.log(xx);
// let xx = 6;

// function getXY(x = 5, y = 5) {
//   return x + y;
// }
// let sum = getXY();
// console.log(sum);

// let y;
// let x = 5;
// if (x < 5) {
//   y = 10;
// } else {
//   y = 0;
// }

// let y = x < 5 ? 10 : 0;

// let x = "hello";
// let y = "students";

// let hi = x + "  \n" + y;
// let hii = `${x}
// ${y}`;
// getXY(3, 4);
// const getXY = function (x, y) {
//   return y * x;
// };

// const getXY = (x, y) => x * y; //return

// function x() {
//   let hi = "Hello";
//   function y() {
//     console.log(hi);
//   }
//   return y;
// }

// let sayhi = x()();
// console.log(sayhi);

// function x(param) {
//   function y(param1) {
//     return param * param1;
//   }
//   return y;
// }
// let sum = x(3)(6);
// const sum2 = (x) => {
//   return (y) => {
//     return x * y;
//   };
// };
// const sum3 = (x) => (y) => x * y;
// console.log("sum=>", sum);

// const x = (a, b) => (c) => a(b(c));

// const sum2 = (num) => num * 2;
// const sum = (num) => num + 1;

// let ret = x(sum2, sum)(6);
// console.log(ret);

// let a = 10;
// let b = a;
// b = 8;
// console.log("a=>", a, "b=>", b);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// arr2[1] = 5;

// console.log("arr1=>", arr1, "arr2=>", arr2);

// let obj1 = { a: 10 };
// let obj2 = { ...obj1 };
// obj2.a = 15;
// console.log("obj1=>", obj1, "obj2=>", obj2);

// let obj = {
//   name: "Jon",
//   age: 25,
//   lastname: "Due",
//   getFullName: function () {
//     return this.name + " " + this.lastname;
//   },
// };
// console.log(obj);

// let name = obj.name;
// let lname = obj["lastname"];

// let f = obj.getFullName();
// console.log(f);

let firstname = "John";
let email = "slkvkjdk";
let obj = {
  firstname,
  email,
};

console.log(obj);

for (x in obj) {
  console.log(`${x} ${obj[x]}`);
}
