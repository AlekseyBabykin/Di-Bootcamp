function Anagram(word1, word2) {
  const splitWord1 = [];
  const splitWord2 = [];
  for (i of word1.toLowerCase()) i != " " ? splitWord1.push(i) : false;
  for (i of word2.toLowerCase()) i != " " ? splitWord2.push(i) : false;
  splitWord1.sort();
  splitWord2.sort();
  splitWord1.join("") === splitWord2.join("")
    ? console.log(`${word1} is an anagram of ${word2}`)
    : console.log(`${word1} is NOT an anagram of ${word2}`);
}
Anagram("Astronomer", "Moon starer");
Anagram("School master", "The classroom");
Anagram("The Morse Code", "Here come dots");
