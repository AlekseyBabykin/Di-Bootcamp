// const { json } = require("body-parser");

//GET
getEmj();

const choice = document.getElementById("choice");
const emj = document.getElementById("emj");
const feedback = document.getElementById("feedback");
const score = document.getElementById("score");
let scoreNumber = 0;
let currEmojiName = "";

document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  let yourChoice;
  const answers = document.querySelectorAll("input");
  for (let i of answers) {
    if (i.checked) {
      yourChoice = i.value;
      feedback.innerHTML = yourChoice;
      if (yourChoice === currEmojiName) {
        scoreNumber++;
        score.innerHTML = scoreNumber;
      }
    }
  }
  // const obj = { yourChoice: yourChoice, currEmojiName: currEmojiName };
  // const url = "http://localhost:5000/";
  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: json.stringify(obj),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     feedback.innerHTML = `${data.message} Score is ${data.score}`;
  //   });
  emj.innerHTML = null;
  choice.innerHTML = null;
  getEmj();
});

async function getEmj() {
  try {
    const response = await fetch("http://localhost:5000/");
    const movies = await response.json();
    console.log(movies);
    const divEmj = document.createElement("div");
    cuurObj = movies[Math.floor(Math.random() * movies.length)];
    console.log(cuurObj);
    currEmojiName = cuurObj.name;
    console.log(currEmojiName);
    divEmj.innerHTML = cuurObj.emoji;
    emj.append(divEmj);
    JSON.stringify(
      movies.map((el) => {
        const div = document.createElement("div");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = el.name;
        div.innerHTML = el.name;
        div.appendChild(input);
        choice.appendChild(div);
      })
    );
  } catch (err) {
    console.log(err);
  }
}
