// https://www.codewars.com/kata/513e08acc600c94f01000001

function rgb(r, g, b) {
  return [...arguments]
    .map((el) => {
      el = (el > 255 ? (el = 255) : el < 0 ? (el = 0) : el)
        .toString(16)
        .toUpperCase();
      return el.length === 1 ? `0${el}` : el;
    })
    .join("");
}

console.log(rgb(0, 0, 0));
console.log(rgb(0, 0, -20));
console.log(rgb(300, 255, 255));
console.log(rgb(173, 255, 47));
