// que 1
// Write a function reverseWords(sentence) that reverses the order of words in a sentence. Assume that words are separated by a single space.

const reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};
console.log(reverseWords("Hello World"));

// que 2
// Calculate and display the nth Fibonacci number

const fibonacciNumber = (n) => {
  let a = 0,
    b = 1,
    c;
  if (n <= 1) {
    return n;
  }
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
};

console.log(fibonacciNumber(10));

// que 3
// Write a JavaScript program that takes a word as input from the user and determines whether it's a vowel, consonant, or neither (non-alphanumeric character).

const checkVowelConsonant = (word) => {
  const vowels = "aeiouAEIOU";
  for (let char of word) {
    if (char.match(/[a-zA-Z]/)) {
      if (vowels.includes(char)) {
        console.log(`"${char}" is a vowel`);
      } else {
        console.log(`"${char}" is a consonant`);
      }
    } else {
      console.log(`"${char}" is neither a vowel nor a consonant`);
    }
  }
};
checkVowelConsonant("hello4");

// que 4
// Sequence generator function (commonly referred to as "range")

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

console.log(range(0, 4, 2));

// que 5
// Write function to get maximum element from array

const getMax = (arr) => {
  return arr.reduce((acc, curr) => Math.max(acc, curr), 0);
};
console.log(getMax([2, 5, 4, 8, 6, 7]));

// que 6
// Find the leap years from a given range of years

const findLeapYears = (startYear, endYear) => {
  return Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  ).filter((year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};
console.log(findLeapYears(2000, 2024));

// que 7
// Write a JavaScript function to generate a random number within a range (start,end)

const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * (end - start)) + start;
};
console.log(generateRandomNumber(50, 100));
