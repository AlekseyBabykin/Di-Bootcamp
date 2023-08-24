const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const usernames = [];
gameInfo.forEach((el) => usernames.push(el.username + "!"));
console.log(usernames);
const winners = [];
gameInfo.forEach((el) => (el.score > 5 ? winners.push(el.username) : 0));
console.log(winners);

let a = gameInfo.reduce((el, next) => el + next.score, 0);
console.log(a);
