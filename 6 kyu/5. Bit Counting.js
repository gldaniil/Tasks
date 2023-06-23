// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function (n) {
  return n
    .toString(2)
    .split("")
    .filter((el) => el != 0).length;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(10));
console.log(countBits(1234));
