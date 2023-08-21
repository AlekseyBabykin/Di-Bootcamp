// Exercise 1 : Find The Numbers Divisible By 23

// function displayNumbersDivisible(Divisible) {
//   let a = [];
//   let b = 0;
//   for (let i = 0; i <= 500; i++) {
//     if (i % Divisible === 0) {
//       a.push(i);
//       b += i;
//     }
//   }

//   console.log(`Console.log all  ${a.toString()} the numbers divisible by ${Divisible},
//   and their sum ${b}`);
// }
// displayNumbersDivisible(3);

// 🌟 Exercise 2 : Shopping List

// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   let sum = 0;
//   for (let i of shoppingList) {
//     if (stock[i] > 0) {
//       sum += prices[i];
//       stock[i] -= 1;
//     }
//   }
//   console.log(sum);
// }
// myBill();
// console.log(stock);

// Exercise 3 : What’s In My Wallet ?
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// function changeEnough(itemPrice, amountOfChange) {
//   let quarters = amountOfChange[0] * 0.25;
//   let dimes = amountOfChange[1] * 0.1;
//   let nickel = amountOfChange[2] * 0.05;
//   let penny = amountOfChange[3] * 0.01;
//   let sum = quarters + dimes + nickel + penny;
//   if (itemPrice <= sum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]));
// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4 : Vacations Costs
// function totalVacationCost() {
//   function hotelCost() {
//     let amount_days = Number(prompt("your days a vacantoin"));

//     while (isNaN(amount_days)) {
//       amount_days = Number(prompt("your days"));
//     }
//     let hotelCost = amount_days * 140;
//     return hotelCost;
//   }
//   // console.log(hotelCost());

//   function planeRideCost() {
//     let a = { London: 183, Paris: 220, All_other_destination: 300 };
//     let planeRideCost;
//     let city = prompt("your city");
//     while (city == "") {
//       city = prompt("your city");
//     }
//     if (!isNaN(a[city])) {
//       planeRideCost = a[city];
//       return planeRideCost;
//     } else {
//       planeRideCost = a["All_other_destination"];
//       return planeRideCost;
//     }
//   }
//   // console.log(planeRideCost());

//   function rentalCarCost() {
//     let rentalCarCost;
//     let amount_days = Number(prompt("your days a car"));

//     while (isNaN(amount_days)) {
//       amount_days = Number(prompt("your days a car"));
//       console.log(amount_days);
//     }
//     if (amount_days > 10) {
//       rentalCarCost = amount_days * 40;
//     } else {
//       rentalCarCost = amount_days * 40 * 0.95;
//     }
//     return rentalCarCost;
//   }
//   let hotel = hotelCost();
//   console.log(hotel);
//   let planeRide = planeRideCost();
//   console.log(planeRide);
//   let car = rentalCarCost();
//   console.log(car);
//   let total = hotel + planeRide + car;
//   console.log(total);
// }

// console.log(totalVacationCost());
