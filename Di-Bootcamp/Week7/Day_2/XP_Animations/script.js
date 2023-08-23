// Part I

// setTimeout(() => {
//   alert("Hello World");
// }, 2000);
// Part II
// setTimeout(() => {
//   const p = document.createElement("p");
//   p.innerText = "Hello World";
//   document.getElementById("container").append(p);
// }, 2000);

// Part III
// 1-2;
// let a = setInterval(() => {
//   const p = document.createElement("p");
//   p.innerText = "Hello World";
//   document.getElementById("container").append(p);
// }, 2000);
// 3;
// document.getElementsByTagName("button")[0].addEventListener("click", () => {
//   clearInterval(a);
// });

// 4;
// let temp = 1;
// const interval = setInterval(() => {
//   const p = document.createElement("p");
//   p.innerText = "Hello World";
//   document.getElementById("container").append(p);
//   temp++;
//   if (temp > 5) {
//     clearInterval(interval);
//   }
// }, 1000);

// 🌟 Exercise 2 : Move The Box
// let temp = 0;
// const anime = setInterval(() => {
//   temp++;
//   const child = document.getElementById("animate");
//   //   const father = document.getElementById("container");
//   child.style.position = "absolute";
//   child.style.left = temp + "px";
// }, 20);

function myMove() {
  let temp = 0;
  const anime = setInterval(() => {
    temp++;
    const child = document.getElementById("animate");
    //   const father = document.getElementById("container");
    child.style.position = "absolute";
    child.style.left = temp + "px";
    if (temp == 350) {
      clearInterval(anime);
    }
  }, 5);
}
