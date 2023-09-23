const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "😍", name: "Love1" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "👉", name: "Hand" },
  { emoji: "👿 ", name: "Agry" },
  { emoji: "💖", name: "Love" },
];
const fiveRandomEmj = [];
const fiveRandomNumber = [];
while (fiveRandomNumber.length < 5) {
  const number = Math.floor(Math.random() * 7);
  if (fiveRandomNumber.indexOf(number) === -1) {
    fiveRandomNumber.push(number);
    fiveRandomEmj.push(emojis[number]);
  }
}
// const hiddenEmj =
//   fiveRandomEmj[Math.floor(Math.random() * fiveRandomEmj.length)];

module.exports = { fiveRandomEmj };
