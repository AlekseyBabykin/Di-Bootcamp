// Exercise 1 : Scope
// #1
// function funcOne() {
//   let a = 5;
//   if (a > 1) {
//     a = 3;
//   }
//   alert(`inside the funcOne function ${a}`);
// }
// #1.1 - run in the console:
// a = 3 , becouse when we call funcOne, start a = 5, second If and a = 3, secon call alert (a = 3)
// funcOne();

//#2
// const a = 0;
// function funcTwo() {
//   a = 5;
// }

// function funcThree() {
//   alert(`inside the funcThree function ${a}`);
// }
// funcThree(); - take from global variable a = 0
// funcTwo(); - change  global variable a = 5
// funcThree(); - use a = 5
// with const instead of let ? show a Erorr< becouse const we can`t cto chenge

//#3
// function funcFour() {
//   window.a = "hello";
// }

// function funcFive() {
//   alert(`inside the funcFive function ${a}`);
// }
// #3.1 - run in the console:
// funcFour(); - we created variable a
// funcFive(); - apply here

//#4
// const a = 1;
// function funcSix() {
//   let a = "test";
//   alert(`inside the funcSix function ${a}`);
// }
// #4.1 - run in the console:
// funcSix(); - rewrite variable a = "test"
// #4.2 What will happen if the variable is declared
// with const instead of let ? it will be work, becuse we are created rewrite varivle and change type (let=>const)

//#5
// let a = 2;
// if (true) {
//   let a = 5;
//   alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);
// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ? fist alert = 5, secon alert = 2, becouse variable is a chanche local ans then outside alert don`t depent from if.

// 🌟 Exercise 2 : Ternary Operator
// function winBattle() {
//   return true;
// }
// const winBattle = () => {
//   return true;
// };

// let experiencePoints = winBattle() === true ? 10 : 1;
// console.log(experiencePoints);

// 🌟 Exercise 3 : Is It A String ?

// const isString = (a) => {
//   if (typeof a == "string") {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isString("hello"));
// console.log(isString([1, 2, 4, 0]));

// 🌟 Exercise 4 : Find The Sum

// const sum = (x, y) => {
//   return x + y;
// };
// const sum2 = (x, y) => x + y;
// console.log(sum(2, 8));
// console.log(sum2(2, 28));

// 🌟 Exercise 5 : Kg And Grams

// Function Declaration
// function convertweight(kilogramm, gramm = 1000) {
//   return kilogramm * gramm;
// }
// // Function Expression
// const convert = function (kilogramm, gramm = 1000) {
//   return kilogramm * gramm;
// };
// //arrow function
// const weight = (kilogramm, gramm = 1000) => kilogramm * gramm;
// // what different:  Function Declaration i can use everywhere, before, after. not mena when i`m need call

// 🌟 Exercise 6 : Fortune Teller

// (function a(number, partners, geographic, job) {
//   let div = document.createElement("div");
//   div.innerText = `You will be a ${job} in ${geographic}, and married to ${partners} with ${number} kids.`;
//   document.body.append(div);
// })();

// 🌟 Exercise 7 : Welcome
// let navBar = document.createElement("navBar");
// document.body.append(navBar);
// (function user(name) {
//   let div = document.createElement("div");
//   div.innerText = `${name}`;
//   navBar.append(div);
// })("dffkgdj");

// 🌟 Exercise 8 : Juice Bar
// Part I

// function makeJuice(size_drink) {

//   function addIngredients(
//     first_ingredient,
//     second_ingredien,
//     third_ingredient
//   ) {
//     let div = document.createElement("div");
//     document.body.append(div);
//     div.innerText = `The client wants a ${size_drink} juice, containing ${first_ingredient}, ${second_ingredien}, ${third_ingredient}`;

//     ingredients.push(first_ingredient);
//     ingredients.push(second_ingredien);
//     ingredients.push(third_ingredient);
//   }
//   addIngredients("apple", "nuts", "orange");
// }
// makeJuice(large)
// Part II:

function makeJuice(size_drink) {
  let ingredients = [];
  function addIngredients(
    first_ingredient,
    second_ingredien,
    third_ingredient
  ) {
    // let div = document.createElement("div");
    // document.body.append(div);
    // div.innerText = `The client wants a ${size_drink} juice, containing ${first_ingredient}, ${second_ingredien}, ${third_ingredient}`;

    ingredients.push(first_ingredient);
    ingredients.push(second_ingredien);
    ingredients.push(third_ingredient);
  }
  addIngredients("apple", "nuts", "orange");
  addIngredients("strawberry", "banana", "pineapple");

  function displayJuice() {
    let div = document.createElement("div");
    document.body.append(div);
    div.innerText = `The client wants a ${size_drink} juice, containing ${ingredients.join(
      ", "
    )}`;
    div.style.color = "yellow";
    // console.log(juiceSentence);
  }
  displayJuice();
}
makeJuice("large");
