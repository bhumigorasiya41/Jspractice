//que 1
// Write a JavaScript function that generates a string ID (specified length) of random characters.

const generateRandomId = (length) => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };
  console.log(generateRandomId(8));
  
  //que 2
  // Write a JavaScript function to convert an amount into  coins.
  
  const convertToCoins = (amount) => {
    const coins = [100, 50, 20, 10, 5, 2, 1];
    let remainingAmount = amount;
    const result = {};
    for (let coin of coins) {
      if (remainingAmount >= coin) {
        const count = Math.floor(remainingAmount / coin);
        result[coin] = count;
        remainingAmount -= count * coin;
      }
      if (remainingAmount === 0) {
        break;
      }
    }
    return result;
  };
  console.log(convertToCoins(173));
  
  // que 3
  // Write a JavaScript function to find the first not repeated character.
  
  const firstNonRepeatedWord = (str) => {
    let array = str.split('');
    const countOfChar = array.reduce((acc, char) => {
      acc[char] ? (acc[char] += 1) : (acc[char] = 1);
      return acc;
    }, {});
    for (let key in countOfChar) {
      if (countOfChar[key] === 1) {
        return key;
      }
    }
  };
  
  console.log(firstNonRepeatedWord('absvasv'));
  
  //que 4
  // Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
  
  const findLongestCountryName = (arr) => {
    return arr.reduce((acc, country) => {
      return acc.length < country.length ? country : acc;
    }, '');
  };
  console.log(
    findLongestCountryName(['Australia', 'Germany', 'United States of America'])
  );
  
  // que 5
  // Find Missing Number in Array
  
  const findMissingNumber = (nums) => {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum;
  };
  console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
  
  //que 6
  // Rotate Array
  
  const rotateArray = (arr, num) => {
    return [...arr.slice(num, arr.length), ...arr.slice(0, num)];
  };
  console.log(rotateArray([1, 2, 3, 4, 5], 3));
  
  //que 7
  // Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target.
  
  const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      map.set(nums[i], i);
    }
    return [];
  };
  
  console.log(twoSum([2, 7, 11, 15], 9));
  