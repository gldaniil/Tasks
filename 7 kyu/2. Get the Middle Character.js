// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
  const c = parseInt(s.length / 2);
  return s.length % 2 === 0 ? s.slice(c - 1, c + 1) : s.charAt(c);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
