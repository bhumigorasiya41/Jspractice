//que 1
// Write a JavaScript program to calculate the factorial of a given number.

const calculateFactorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * calculateFactorial(n - 1);
    }
  };
  
  console.log(calculateFactorial(5));
  
  // que 2
  // Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).
  
  const toTitleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  console.log(toTitleCase('hello world'));
  
  // que 3
  // Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
  
  const sortByKey = (arr, key) => {
    return arr.sort((a, b) => a[key] - b[key]);
  };
  const data = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 },
  ];
  console.log(sortByKey(data, 'age'));
  
  // que 4
  // Creating a Countdown in JavaScript
  
  const countDown = (length) => {
    return Array.from({ length: length }, (_, i) => length - i);
  };
  console.log(countDown(5));
  
  // que 5
  //Return a Boolean if a number is divisible by 10
  
  const hasDivisibleBy10 = (arr) => {
    return arr.map((n) => n % 10 === 0);
  };
  console.log(hasDivisibleBy10([5, 10, 20, 666, 7]));
  
  // que 6
  // Given two strings, determine if they are isomorphic.
  const isIsomorphic = (str1, str2) => {
    const string1 = {};
    const string2 = {};
  
    for (let i = 0; i < str1.length; i++) {
      const s1Char = str1[i];
      const s2Char = str2[i];
  
      if (string1[s1Char] && string1[s1Char] !== s2Char) return false;
      if (string2[s2Char] && string2[s2Char] !== s1Char) return false;
  
      string1[s1Char] = s2Char;
      string2[s2Char] = s1Char;
    }
  
    return true;
  };
  console.log(isIsomorphic('egg', 'add'));
  
  // que 7
  // Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
  
  // A string is represented by an array if the array elements concatenated in order forms the string.
  
  const isSame = (word1, word2) => {
    return word1.join('') === word2.join('');
  };
  console.log(isSame(['a', 'cb'], ['ab', 'c']));
  console.log(isSame(['ab', 'c'], ['a', 'bc']));
  