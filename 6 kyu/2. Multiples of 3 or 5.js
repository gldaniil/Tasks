// https://www.codewars.com/kata/514b92a657cdc65150000006

function solution(number) {
  let i = 0,
    s = 0;
  while (i < number) {
    if (i % 3 === 0 || i % 5 === 0) {
      s += i;
    }
    i++;
  }
  return s;
}

console.log(solution(10));
