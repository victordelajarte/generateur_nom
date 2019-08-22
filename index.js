const voyelles = ["a", "e", "i", "o", "u", "y"];
const consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

const voyellesFrequences = ["a", "e", "i", "o", "u", "y", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "o", "e", "e"];
const consonnesFrequences = [
  "b",
  "b",
  "c",
  "c",
  "c",
  "d",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "l",
  "l",
  "l",
  "m",
  "m",
  "m",
  "n",
  "n",
  "n",
  "p",
  "p",
  "p",
  "q",
  "r",
  "r",
  "s",
  "s",
  "t",
  "t",
  "v",
  "w",
  "x",
  "z"
];
// Générer le tableau de consonnes
// const total = "azertyuiopqsdfghjklmwxcvbn";
// console.log(
//   total
//     .split("")
//     .filter(lettre => !voyelles.includes(lettre))
//     .sort()
// );

const generateWord = (pattern, useFrequence) => {
  if (!useFrequence) {
    consonnesArray = consonnes;
    voyellesArray = voyelles;
  } else {
    consonnesArray = consonnesFrequences;
    voyellesArray = voyellesFrequences;
  }
  return pattern.split("").reduce((accumulator, current) => {
    let newLetter = getRandomElementFromArray(consonnesArray);
    if (current == "v") {
      newLetter = getRandomElementFromArray(voyellesArray);
    } else if (current == "w") {
      newLetter = getRandomElementFromArray(voyellesArray);
      newLetter += newLetter;
    }
    return accumulator + newLetter;
  }, "");
};

const getRandomElementFromArray = array => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const pattern = "cvcwcv";

console.log("Avec fréquence : " + generateWord(pattern, true));
console.log("Sans fréquence : " + generateWord(pattern));
