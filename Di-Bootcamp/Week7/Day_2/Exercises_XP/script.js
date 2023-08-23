// 🌟 Exercise 1 : Change The Article
// 1;
// console.log(document.getElementsByTagName("h1"));

// 2;
// document.body.querySelector("article").lastElementChild.remove();

// 3;
// const a = document.body.getElementsByTagName("h2")[0];
// a.addEventListener("click", () => {
//   a.style.backgroundColor = "red";
// });
// console.log(a);

// 4;
// const h3 = document.getElementsByTagName("h3")[0];
// h3.addEventListener("click", () => {
//   h3.style.display = "none";
// });

// 5;
// console.log(document.getElementsByTagName("article")[0]);
// document.getElementsByTagName("article");
// const bold = document.getElementById("bold");
// bold.addEventListener("click", () => {
//   document.getElementsByTagName("article")[0].style.fontWeight = "bold";
// });

// 🌟 Exercise 2 : Work With Forms
// 1;
// console.log(document.getElementsByTagName("form")[0]);

// 2;
// const form = document.getElementsByTagName("form")[0];
// const inputtFistname = document.getElementById("fname");
// const inputLastname = document.getElementById("lname");
// console.log(inputtFistname);
// console.log(inputLastname);
// 3;
// const nameFist = form.elements.firstname;
// const nameLast = form.elements.lastname;
// console.log(nameFist);
// console.log(nameLast);

// 4;
// const submit = document.getElementsByTagName("form")[0];
// console.log(submit);
// submit.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const nameFist = submit.elements.firstname;
//   const nameLast = submit.elements.lastname;
//   if (nameFist.value && nameLast.value) {
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     console.log(nameFist.value);
//     console.log(nameLast.value);
//     li1.innerText = nameFist.value;
//     li2.innerText = nameLast.value;
//     document.getElementsByClassName("usersAnswer")[0].append(li1, li2);
//   } else {
//     console.log("write somethink");
//   }
// });

// 🌟 Exercise 3 : Transform The Sentence
// 1;
// let allBoldItems;
// const a = document.getElementsByTagName("p")[0];
// 2;
// function getBoldItems(allBoldItems) {
//   allBoldItems = a.querySelectorAll("strong");
//   console.log(allBoldItems);
// }

// 3;
// function highlight() {
//   allBoldItems = a.querySelectorAll("strong");
//   for (let i of allBoldItems) {
//     i.style.color = "blue";
//   }
// }

// 4;
// function returnItemsToDefault() {
//   allBoldItems = a.querySelectorAll("strong");
//   for (let i of allBoldItems) {
//     i.style.color = "black";
//   }
// }

// 5;
// a.addEventListener("mouseover", highlight);
// a.addEventListener("mouseout", returnItemsToDefault);

// 🌟 Exercice 4 : Volume Of A Sphere
// const form = document.getElementsByTagName("form")[0];
// const radius = form.elements.radius;
// const volume = form.elements.volume;

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   volume.value = (4 / 3) * 3.14 * radius.value ** 3;
// });

// Exercise 5 : Event Listeners
1;
const el = document.getElementsByTagName("h1")[0];
el.addEventListener("click", () => {
  el.style.color = "yellow";
});
el.addEventListener("mouseover", () => {
  el.style.fontSize = "30px";
});
el.addEventListener("mouseout", function () {
  el.style.paddingLeft = "42px";
});
el.addEventListener("dblclick", function () {
  el.style.paddingTop = "80px";
});
