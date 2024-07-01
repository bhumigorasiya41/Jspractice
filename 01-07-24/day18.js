// que 1
// Write a JavaScript program to find the largest element in a nested array.

const findLargestElement = (arr) => {
  let largest = -Infinity;
  function recursiveFind(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        recursiveFind(arr[i]);
      } else {
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
    }
  }
  recursiveFind(arr);
  return largest;
};

const nestedArray = [1, 2, [3, 4, [5, 6]], 7, [8, 9]];
console.log(findLargestElement(nestedArray));

// que 2
// Write a JavaScript function countVowels that takes a string as an input and returns the count of vowels in the string. The function should be case-insensitive, meaning it should count both lowercase and uppercase vowels.

const countVowels = (str) => {
  return str.match(/[aeiouAEIOU]/g).length;
};

console.log(countVowels("Hello World"));

// que 3
// Write a JavaScript function findDuplicates that takes an array of strings as an input and returns a new array containing only the duplicate strings.

const findDuplicates = (arr) => {
  const counts = {};
  const duplicates = [];
  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] === 2) {
      duplicates.push(element);
    }
  }
  return duplicates;
};

const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "grape",
  "banana",
];
console.log(findDuplicates(fruits));

// que 4
// Reverse Words in a String

const reverseWord = (str) => {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
};
console.log(reverseWord("hello world!"));

// que 5
// Write a function isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise.

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(13));

// que 6
// Write a JavaScript program to find the maximum and minimum values of an object properties.

const scores = {
  math: 100,
  english: 88,
  science: 80,
  history: 92,
};

const findMaxMinValue = (scores) => {
  const values = Object.values(scores);
  const maxValues = Math.max(...values);
  const minValues = Math.min(...values);
  return { maxValues, minValues };
};
console.log(findMaxMinValue(scores));

// que 7
// Write a JavaScript program to find the sum of all numbers in a nested array.

const nestedSum = (arr) => {
  return arr.flat(Infinity).reduce((sum, num) => sum + num, 0);
};

const array = [
  [1, 2],
  [3, [4, 5]],
  [6, [7, 8, [9]]],
];
console.log(nestedSum(array));
