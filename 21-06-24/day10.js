//que 1
// validate password

const isvalidatePassword = (str) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      str
    );
  };
  console.log(isvalidatePassword('Bhumi12@'));
  
  //que 2
  // Make a regexp to find time in the string
  
  const findTime = (str) => {
    return str.match(/\d{2}:\d{2}/);
  };
  
  console.log(findTime('Breakfast at 09:00 in the room 123:456'));
  
  //que 3
  // Write a function that takes an array of numbers and returns an array where each element is multiplied by 2, but only if the original number is even. If the original number is odd, it should remain unchanged.
  
  const doubleEvenNumbers = (arr) => {
    return arr.map((ele) => (ele % 2 === 0 ? ele * 2 : ele));
  };
  console.log(doubleEvenNumbers([1, 2, 3, 4, 5, 6]));
  
  //que 4
  // Write a function that takes a string and returns true if the string is a palindrome (reads the same forwards and backwards), ignoring spaces, punctuation, and capitalization. Otherwise, it should return false.
  
  const isPalindrome = (str) => {
    let cleanedStr = str.replace(/[^\w]/g, '').toLowerCase();
    let reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };
  
  console.log(isPalindrome('A man, a plan, a canal, Panama'));
  console.log(isPalindrome('race car'));
  console.log(isPalindrome('hello'));
  console.log(isPalindrome('Was it a car or a cat I saw?'));
  
  //que 5
  // Write a function that takes an array of numbers and returns the product of all positive numbers in the array. If there are no positive numbers, the function should return 1.
  
  const productOfPositiveNumbers = (arr) => {
    let positiveNumbers = arr.filter((num) => num > 0);
    let product = positiveNumbers.reduce((acc, curr) => acc * curr, 1);
    return positiveNumbers.length > 0 ? product : 1;
  };
  
  console.log(productOfPositiveNumbers([1, 2, 3, 4, 5]));
  console.log(productOfPositiveNumbers([-1, -2, -3]));
  console.log(productOfPositiveNumbers([0, -1, 2, -3, 4]));
  
  //que 6
  // Write a function that takes an array of strings representing numbers and returns the array sorted in ascending order based on the numeric value of the strings. Assume all strings represent valid integers.
  
  const sortNumericStrings = (arr) => {
    return arr.sort((a, b) => {
      return parseInt(a) - parseInt(b);
    });
  };
  
  let numericStrings = ['10', '5', '7', '3', '20'];
  console.log(sortNumericStrings(numericStrings));
  
  // que 7
  // Write a JavaScript function to find the intersection of two arrays.
  
  const findIntersection = (arr1, arr2) => {
    return arr1.filter((element) => arr2.includes(element));
  };
  
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  console.log(findIntersection(arr1, arr2));
  