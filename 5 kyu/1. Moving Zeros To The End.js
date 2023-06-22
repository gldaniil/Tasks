// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  const zeros = arr.filter((arr) => arr === 0);
  const res = arr.filter((arr) => arr !== 0);
  return res.concat(zeros);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
