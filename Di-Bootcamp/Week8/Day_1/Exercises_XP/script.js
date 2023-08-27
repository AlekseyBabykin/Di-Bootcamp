// 🌟 Exercise 1 : Location
// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );
//  i got Object.Value by Object.keys

// 🌟 Exercise 2: Display Student Info

// function displayStudentInfo(objUser) {
//   const { first, last } = objUser;
//   console.log(`Your full ${first} is Elie ${last}`);
// }

// displayStudentInfo({ first: "Elie", last: "Schoppik" });

// 🌟 Exercise 3: User & Id
// const users = { user1: 18273, user2: 92833, user3: 90315 };
// console.log(Object.entries(users));
// Object.values(users * 2);
// console.log(Object.entries(users));

// Exercise 4 : Person Class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person("John");
// Object;
// console.log(typeof member);

// 🌟 Exercise 5 : Dog Class
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

// 🌟 Exercise 6 : Challenges

// console.log([2] === [2]); //false
// console.log({} === {}); //false

// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5 };

// object1.number = 4;
// console.log(object2.number);4 same link with object1
// console.log(object3.number);4 same link with object1
// console.log(object4.number);5 another object, then link

// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mamal extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color);
//   }

//   sound(sound) {
//     console.log(
//       `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color} and white`
//     );
//   }
// }

// const farmerCow = new Mamal("Lily", "cow", "brow");
// farmerCow.sound("Moooo");
