// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str) {
  let pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2);
    if (pair.length === 1) {
      pair += "_";
    }
    pairs.push(pair);
  }
  return pairs;
}

console.log(solution("abcde"));
