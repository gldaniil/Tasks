// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  const arr = ["a", "e", "i", "o", "u"];
  return str
    .split("")
    .filter((el) => !arr.includes(el.toLowerCase()))
    .join("");
}

console.log(disemvowel("Your writing is among the worst I've ever read"));
