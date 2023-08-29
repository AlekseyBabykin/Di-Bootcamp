// function makeAllCaps(param) {
//   return new Promise((resolve, reject) => {
//     if (param.every((el) => typeof el === "string")) {
//       resolve(param.map((el) => el.toUpperCase()));
//     } else {
//       reject("is not string");
//     }
//   });
// }

// function sortWords(param) {
//   return new Promise((resolve, reject) => {
//     if (param.length > 4) {
//       resolve(param.sort());
//     }
//     reject("less < 4");
//   });
// }
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//   .catch((error) => console.log(error));

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs(param) {
  return new Promise((resolve, reject) =>
    Object.keys(param).length === 0
      ? reject("Is emty")
      : resolve(JSON.parse(param))
  );
}
function toMorse(morseJS) {
  const inputpromt = prompt("write your phrase").toLowerCase().trim();
  const inputSplit = inputpromt.replace(" ", " ").split("");
  const promeses = inputSplit.map((el) =>
    morseJS.hasOwnProperty(el)
      ? Promise.resolve(morseJS[el])
      : Promise.reject("you have erorr simbol")
  );
  return Promise.all(promeses);
}

function joinWords(morseTranslation) {
  let div = document.createElement("div");
  div.innerText = morseTranslation.join("\n");
  document.body.appendChild(div);
}
// joinWords(toMorse(toJs(morse)));

toJs(morse)
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.log(error));
