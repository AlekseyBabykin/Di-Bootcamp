// 1;
const bodyElement = document.body;
const childNodes = bodyElement.childNodes;
const div_log = document.querySelectorAll("div");
// console.log(div_log);
// console.log(bodyElement);
// console.log(childNodes);
// 2;

const peteElement = document.querySelector(".list").lastElementChild;
peteElement.innerHTML = "Richard";
console.log(peteElement);

// 3;
// const saraelement =
//   document.querySelectorAll(".list")[1].lastElementChild.previousElementSibling;

// saraelement.remove();
// console.log(saraelement);

// 4;
// const changeName = document.querySelectorAll(".list");
// for (let i of changeName) {
//   i.firstElementChild.innerHTML = "Mashka";
// }
// console.log(changeName);

// 3;
// const changeName = document.querySelectorAll(".list");
// for (let i of changeName) {
//   i.firstElementChild.classList.add("student_list");
// }

// changeName[0].firstElementChild.classList.add("university", "attendance");

// console.log(bodyElement);

// 4;
// document.body.style.background = "lightblue";
// document.querySelector("div").style.padding = "20px";

// document.body.querySelectorAll(".list")[1].lastElementChild.style.visibility =
//   "hidden";
peteElement.style.border = "2px solid black";
peteElement.style.color = "red";

document.body.style.fontSize = "28px";
