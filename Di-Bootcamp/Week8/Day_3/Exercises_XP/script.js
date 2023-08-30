// 🌟 Exercise 1 : Giphy API

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", getData);

// function getData() {
//   fetch(
//     " https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("problem with fetch");
//       } else {
//         return response.json();
//         //method retrieve the data and parses it
//       }
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log("IN THE CATCH", error));
// }

// 🌟 Exercise 2 : Giphy API
// const btn = document.querySelector("#btn");
// btn.addEventListener("click", getData);

// function getData() {
//   fetch(
//     " https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2"
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("problem with fetch");
//       } else {
//         return response.json();
//         //method retrieve the data and parses it
//       }
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log("IN THE CATCH", error));
// }

// 🌟 Exercise 3 : Async Function
// fetch("https://www.swapi.tech/api/starships/9/")
//   .then((response) => response.json())
//   .then((objectStarWars) => console.log(objectStarWars.result));

// const fetchfunc = async (blabla) => {
//   const response = await fetch(blabla);
//   console.log("response", response);
//   let data = await response.json();
//   console.log("data", data);
//   let show = data.result;
//   console.log("show", show);
// };
// fetchfunc("https://www.swapi.tech/api/starships/9/");

// 🌟 Exercise 4: Analyze

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   let result = await resolveAfter2Seconds();
//   console.log(result);
// }

// asyncCall();
// We write "calling", secon 2 sec a go write "resolved"
