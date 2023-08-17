// 🌟 Exercise 1 : List Of People

// Part I - Review About Arrays

// const people = ["Greg", "Mary", "Devon", "James"];

// console.log(people.shift());
// console.log(people);
// people[2] = "Jason";
// console.log(people);
// people.push("alex");
// console.log(people);
// console.log(people.indexOf("Mary"));
// console.log(people.slice(1, 3));

// let index = people.indexOf("Foo");
// console.log(`Index of "Foo" is: ${index}`);
// becouse aur array do not have this element
// let last = people[-1];

// Part II - Loops
// for (let i of people) {
//   console.log(i);
// }
// for (let i of people) {
//   console.log(i);
//   if (i === "Devon") {
//     break;
//   }
// }

// 🌟 Exercise 2 : Your Favorite Colors
// let j = 1;
// let colors = ["Red", "yellow", "green", "orange", "black"];
// for (let i of colors) {
//   console.log("My " + j + "choice is " + i);
//   j++;
// }

// 🌟 Exercise 3 : Repeat The Question
// let a = 0;
// while (a < 10) {
//   a = Number(prompt("write plz any"));
//   console.log(typeof a);
// }

// 🌟 Exercise 4 : Building Management
// const building = {
//   numberOfFloors: 4,
//   numberOfAptByFloor: {
//     firstFloor: 3,
//     secondFloor: 4,
//     thirdFloor: 9,
//     fourthFloor: 2,
//   },
//   nameOfTenants: ["Sarah", "Dan", "David"],
//   numberOfRoomsAndRent: {
//     sarah: [3, 990],
//     dan: [4, 1000],
//     david: [1, 500],
//   },
// };
// console.log(building.numberOfFloors);
// console.log(
//   building.numberOfAptByFloor.firstFloor +
//     building.numberOfAptByFloor.thirdFloor
// );
// console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
// if (
//   building.numberOfRoomsAndRent.sarah[1] +
//     building.numberOfRoomsAndRent.david[1] >
//   building.numberOfRoomsAndRent.dan[1]
// ) {
//   building.numberOfRoomsAndRent.dan[1] = 1200;
//   console.log(building.numberOfRoomsAndRent.dan[1]);
// }

// 🌟 Exercise 5 : Family

// let Family = { alex: 2, masha: 3, moshe: 7 };
// for (i in Family) {
//   console.log(i);
// }
// for (i in Family) {
//   console.log(Family[i]);
// }

// Exercise 6 : Rudolf
// const details = {
//   my: "name",
//   is: "Rudolf",
//   the: "raindeer",
// };
// let a = "";
// for (i in details) {
//   a += i + " " + details[i] + " ";
// }
// console.log(a);

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log(names.sort());
let a = "";
for (i of names.sort()) {
  a += i[0];
}
console.log(a);
