const voyelles = ["a", "e", "i", "o", "u", "y"];
const consonnes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
// Générer le tableau de consonnes
// const total = "azertyuiopqsdfghjklmwxcvbn";
// console.log(
//   total
//     .split("")
//     .filter(lettre => !voyelles.includes(lettre))
//     .sort()
// );

const generateWord = pattern => {
  return pattern.split("").reduce((accumulator, current) => {
    let newLetter = getRandomElementFromArray(consonnes);
    if (current == "v") {
      newLetter = getRandomElementFromArray(voyelles);
    } else if (current == "w") {
      newLetter = getRandomElementFromArray(voyelles);
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

console.log(generateWord(pattern));
