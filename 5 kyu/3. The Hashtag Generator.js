// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  const sorted = str
    .trim()
    .split(" ")
    .filter((el) => el !== "");
  return sorted.length === 0 || sorted.join("").length >= 140
    ? false
    : "#" +
        sorted
          .map((el, i) => el.slice(0, 1).toUpperCase() + el.slice(1))
          .join("");
}

console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars"));
console.log(generateHashtag("Codewars Is Nice"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("a".repeat(140)));
