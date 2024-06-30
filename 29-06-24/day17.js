// que 1
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
// Return the sorted String.

const frequencySort = (s) => {
    const freqMap = {};
    for (let char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
    const sortedChars = Object.entries(freqMap).sort((a, b) => b[1] - a[1]);
    let result = '';
  
    for (let [char, freq] of sortedChars) {
      result += char.repeat(freq);
    }
    return result;
  };
  console.log(frequencySort('baabca'));
  
  // que 2
  // Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
  
  const firstPalindrome = (words) => {
    return words.find((word) => word === word.split('').reverse().join('')) || '';
  };
  console.log(firstPalindrome(['abc', 'car', 'ada', 'racecar', 'cool']));
  
  // que 3
  // Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
  
  const sortedSquares = (nums) => {
    return nums.map((x) => x * x).sort((a, b) => a - b);
  };
  console.log(sortedSquares([-4, -1, 0, 3, 10]));
  
  // que 4
  // Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.
  
  // Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
  
  const findCommonElement = (nums1, nums2) => {
    return nums1.filter((x) => nums2.some((y) => x === y))[0] || -1;
  };
  console.log(findCommonElement([1, 2, 3], [2, 4]));
  
  // que 5
  // Given an array arr of n positive integers, your task is to find all the leaders in the array. An element of the array is considered a leader if it is greater than all the elements on its right side or if it is equal to the maximum element on its right side. The rightmost element is always a leader.
  
  const findLeaders = (arr) => {
    const leaders = [];
    let maxRight = arr[arr.length - 1];
    leaders.push(maxRight);
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i] >= maxRight) {
        maxRight = arr[i];
        leaders.push(maxRight);
      }
    }
    return leaders.reverse();
  };
  
  const input = [16, 17, 4, 3, 5, 2];
  console.log(findLeaders(input));
  
  // que 6
  //  Write a JavaScript program to find all values in an object that are of a specific type.
  
  const mixedData = {
    id: 101,
    name: 'Bob',
    isStudent: true,
    grade: 85.5,
    courses: ['Math', 'Science'],
  };
  
  const filterData = (mixedData, type) => {
    return Object.entries(mixedData).filter(
      ([key, value]) => typeof mixedData[key] === type
    );
  };
  console.log(filterData(mixedData, 'string'));
  
  // que 7
  // Write a JavaScript function to capitalize the first letter of each word in a sentence.
  
  const capitalizeWords = (sentence) => {
    return sentence
      .split(' ')
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  console.log(capitalizeWords('hello world'));
  