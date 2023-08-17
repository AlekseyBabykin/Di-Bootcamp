let sentence = "This dinner is not that bad ! You cook well";
let sentence_split = sentence.split(" ");

let wordNot = "not";

let wordBad = "bad";

let wordgood = "good";

let pharise = [];
let temp = 0;
let amount = 0;

for (let i = 0; i < sentence_split.length; i++) {
  if (sentence_split[i] === wordNot) {
    pharise.push(wordgood);
    temp++;
    i += 2;
  } else if (sentence_split[i] === wordBad && temp === 0) {
    console.log(sentence);
  } else {
    pharise.push(sentence_split[i]);
  }
  amount++;
}
console.log(pharise.join(" "));
