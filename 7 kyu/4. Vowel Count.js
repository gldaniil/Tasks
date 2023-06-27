// https://www.codewars.com/kata/54ff3102c1bad923760001f3

const getCount = (str) => str.replace(/[^aeiou]/gi, "").length;

console.log(getCount("abracadabra"));
