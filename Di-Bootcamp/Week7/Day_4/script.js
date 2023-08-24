// const myArray = [2, 3, 4, 5, 6];
// const colors = ["red", "pink", "purple", "blue"];

// myArray.forEach((element, index) => {
//   console.log(`Element: ${element} vs Index: ${index}`);
// });

// myArray.forEach((element, index, arr) => {
//   arr[index] = arr[index] * 2;
// });

// console.log(myArray);

// const numbers = [10, 11, 12, 15, 20];

// numbers.forEach((el, index) => {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// myArr.some((value) => {
//   console.log(value);
//   return value % 2 == 0;
// });
// myArr.some((value) => {
//   console.log(value);
//   return value > 3;
// });

// const words = ["wow", "hey", "bye"];
// words.some((value) => console.log(value[0] === "h"));
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// const output = myArr.every((value) => value > 0);
// console.log(output);
// const output = myArr.every((value) => {
//   console.log(value);
//   return value < 6;
// });
// console.log(output);

// const firstArr = [1, 4, 9, 16];

// const secondArr = firstArr.map((value, index) => value * 2);
// console.log(secondArr);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// const result = words.filter((element) => element.length > 6);
// console.log(result);

// const arr = [1, 4, 9, 16];
// const result = numbers.filter((num) => num !== 6);
// console.log(result);

// const sum = arr.reduce((acc, val) => {
//   console.log(`acc: ${acc}`);
//   console.log(`val: ${val}`);
//   console.log(`acc + val : ${acc + val}`);
//   return acc + val;
// });

// console.log(sum);

// let party = [
//   {
//     desert: "Chocolate Mousse",
//     calories: 30,
//   },
//   {
//     desert: "Apple Pie",
//     calories: 15,
//   },
//   {
//     desert: "Croissant",
//     calories: 50,
//   },
//   {
//     desert: "Strawberry Icecream",
//     calories: 5,
//   },
// ];
// const sum = party.reduce((acc, val) => {
//   if (val.desert != "Apple Pie") {
//     return acc + val.calories;
//   } else {
//     return acc;
//   }
// }, 0);
// console.log(sum);

// let a, b, rest;
// [a, b] = [10, 20];

// rest = [30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

// let a = 10;
// let b = 20;
// let rest = [30, 40, 50];

// const arr = [a, b, rest];
// const arr2 = [a, b, ...rest];
// console.log(arr);
// console.log(arr2);

const rainbow = ["red", "orange", "yellow"];

// Cloning with array destructuring and spread operator
const rainbowClone = [...rainbow];

console.log(rainbow === rainbowClone); // false
console.log(rainbowClone); // ['red', 'orange', 'yellow']

rainbow.push("violet");
console.log(rainbow); //['red', 'orange', 'yellow', 'violet']
console.log(rainbowClone); // ['red', 'orange', 'yellow']
