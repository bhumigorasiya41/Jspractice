//que 1
// Can you write a JavaScript function to convert a given number of minutes into hours and minutes?

const convertToHoursAndMinutes = (minutes) =>
    `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  
  console.log(convertToHoursAndMinutes(150));
  
  //que 2
  // Can you write a JavaScript function to generate an array of specified length filled with random numbers?
  
  const generateRandomArray = (length) =>
    Array.from({ length }, () => Math.floor(Math.random() * 100));
  
  console.log(generateRandomArray(5));
  
  // que 3
  // group by extension
  const files = [
    'report1.pdf',
    'image1.jpg',
    'report2.pdf',
    'image2.png',
    'image3.jpg',
  ];
  
  const groupByExtension = () =>
    files.reduce((acc, file) => {
      const match = file.match(/\.([a-z]+)$/i);
      if (match) {
        acc[match[1]] = (acc[match[1]] || 0) + 1;
      }
      return acc;
    }, {});
  
  console.log(groupByExtension(files));
  
  // que 4
  // Given an array of integers. Find the Inversion Count in the array.
  
  // Input: n = 5, arr[] = {2, 4, 1, 3, 5}
  // Output: 3
  // Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
  
  const inversionCount = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          count++;
        }
      }
    }
    return count;
  };
  let arr = [2, 4, 1, 3, 5];
  console.log(inversionCount(arr));
  
  // que 5
  // Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
  
  const findCommonElements = (arr1, arr2, arr3) => {
    let commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
    return commonElements;
  };
  
  let A = [1, 5, 10, 20, 40, 80];
  let B = [6, 7, 20, 80, 100];
  let C = [3, 4, 15, 20, 30, 70, 80, 120];
  
  console.log(findCommonElements(A, B, C));
  
  //que 6
  // Given two arrays A and B of equal size N, the task is to find if given arrays are equal or not. Two arrays are said to be equal if both of them contain same set of elements, arrangements (or permutation) of elements may be different though.
  
  const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [5, 4, 3, 2, 1];
  console.log(areArraysEqual(arr1, arr2));
  
  // que 7
  // Given an array arr[] of positive integers of size N. Reverse every sub-array group of size K.
  
  const reverseSubArray = (arr, num) => {
    return [
      ...arr.slice(0, num).reverse(),
      ...arr.slice(num, arr.length).reverse(),
    ];
  };
  console.log(reverseSubArray([1, 2, 3, 4, 5], 3));
  