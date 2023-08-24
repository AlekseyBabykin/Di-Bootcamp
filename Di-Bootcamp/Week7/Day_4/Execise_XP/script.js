// 🌟 Exercise 1 : Colors

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// 1;
// colors.forEach((el) =>
//   el === "Violet" ? console.log("Yes") : console.log("No")
// );

// 🌟 Exercise 2 : Colors #2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th", "st", "nd", "rd"];

// const a = colors.forEach((el, index) => {
//   let suffix;

//   if (index >= 11 && index <= 13) {
//     suffix = "th";
//   } else {
//     const remainder = index % 10;
//     suffix = ordinal[remainder] || "th";
//   }

//   console.log(`${index}${suffix} choice is ${el}`);
// });

// Exercise 3 : Analyzing

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// // const result = ["bread", ...vegetables, "chicken", ...fruits];
// // console.log(result); - this will bi Sprad, ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// // ------2------
// const country = "USA";
// console.log([...country]); // spred  ['U', 'S', 'A'] not copy, becouse is`t Object

// // ------Bonus------
// let newArray = [...[, ,]];
// console.log(newArray); //copy two different array. [undefined, undefined]

// 🌟 Exercise 4 : Employees

// const users = [
//   { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
//   { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
//   { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
//   { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
//   { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
//   { firstName: "Wes", lastName: "Reid", role: "Instructor" },
//   { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
// ];
// 1;
// const welcomeStudents = users.map((el, ind) => `Hello ${el.firstName}`);
// console.log(welcomeStudents);

// 2;
// const fullstack = users.filter((el) => el.role === "Full Stack Resident");
// console.log(fullstack);

// 3;
// const a = users
//   .filter((el) => el.role === "Full Stack Resident")
//   .map((el) => el.lastName);
// console.log(a);

// 🌟 Exercise 5 : Star Wars

// const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// const reduce = epic.reduce((prev, index) => prev + " " + index);
// console.log(reduce);

// 🌟 Exercise 6 : Employees #2

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passStudent = students.filter((el) => el.isPassed === true);
console.log(passStudent);
