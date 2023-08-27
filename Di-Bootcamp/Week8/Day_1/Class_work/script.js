// const object1 = {
//   a: "somestring",
//   b: 42,
//   c: false,
// };
// console.log(Object.keys(object1));

// console.log(Object.values(object1));
// console.log(Object.entries(object1));

// const newArr = Object.entries(object1);
// console.log(newArr);

// const newerArr = [["name", "daniel"], "dkjs", "dkhsjdsjhj"];
// console.log(Object.fromEntries(newArr));

// let myObj = {
//   name: "John",
//   lastName: "Doe",
//   age: 25,
//   friends: ["Mark", "Lucie", "Ana"],
// };
// for (i of Object.entries(myObj)) {
//   console.log(`"The x# key is : ${i[0]} The x# value is : ${i[1]}".`);
// }

// const newAr = Object.entries(myObj)

// newAr.forEach((i,index) = () => console.log(`"The ${index} key is : ${i[0]} The ${index} value is : ${i[1]}".`));

// const student = {
//   name: "John Doe",
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//   },
// };
// const {
//   name,
//   scores: { maths, science = 56 },
// } = student;

// function displaySummary({ name, scores: { english = 0, science = 0 } }) {
//   console.log("Hello, " + name);
//   console.log("Your Maths score is " + maths);
//   console.log("Your English score is " + english);
//   console.log("Your Science score is " + science);
// }

// displaySummary(student);

// let obj = { foo: 1, bar: 2 };

// let newobj = { ...obj, baz: 3 };
// console.log(newobj);
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };
// console.log(admin);

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }
// const squre = new Rectangle(10, 10);
// console.log(squre.calcArea());

// class Rabbit {
//   constructor(type) {
//     this.type = type;
//   }
//   speak(line) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }
// let killerRabbit = new Rabbit("killer");
// let blackRabbit = new Rabbit("black");
// killerRabbit.speak("Ehyyyyy");
// blackRabbit.speak("eho-ho-ho");

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.height * this.width;
//   }

//   // Setter
//   set area(factor) {
//     this.width = this.height * factor;
//   }
// }

// const square = new Rectangle(10, 10);
// square.area = 2;
// square.area; //200

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, noise) {
    super(name); // call the super class constructor and pass in the name parameter
    // Add a new property
    this.noise = noise;
  }
  speak() {
    console.log(`${this.name} barks.It says ${this.noise}`);
  }
}

let newDog = new Dog("Mitzie", "Wouaf");
newDog.speak();
