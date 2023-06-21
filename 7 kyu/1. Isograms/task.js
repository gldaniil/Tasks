/**
 * Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных.
 * Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой.
 * Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
 * Пример: (Ввод --> Вывод)
 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (игнорировать регистр букв)
 */

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
