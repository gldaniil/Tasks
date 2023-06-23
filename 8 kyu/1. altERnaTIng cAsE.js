// https://www.codewars.com/kata/56efc695740d30f963000557

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

console.log("hello world".toAlternatingCase());
console.log("HELLO WORLD".toAlternatingCase());
console.log("hello WORLD".toAlternatingCase());
console.log("HeLLo WoRLD".toAlternatingCase());
