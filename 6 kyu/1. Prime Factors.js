// https://www.codewars.com/kata/542f3d5fd002f86efc00081a

function primeFactors(n) {
  const f = [];
  let i = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      f.push(i);
      n /= i;
    } else i++;
  }
  if (n > 1) {
    f.push(n);
  }
  return f;
}

console.log(primeFactors(1));
console.log(primeFactors(3));
console.log(primeFactors(8));
console.log(primeFactors(9));
console.log(primeFactors(12));
