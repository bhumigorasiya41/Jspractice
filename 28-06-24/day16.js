// que 1
// Write a function productExceptSelf that takes an array of integers and returns an array such that each element at index i is the product of all the numbers in the original array except the one at i.

const productExceptSelf = (nums) => {
    return nums.map((_, i) => {
      const leftProduct = nums.slice(0, i).reduce((acc, ele) => acc * ele, 1);
      const rightProduct = nums.slice(i + 1).reduce((acc, ele) => acc * ele, 1);
      return leftProduct * rightProduct;
    });
  };
  console.log(productExceptSelf([1, 2, 3, 4]));
  
  // que 2
  // Write a function maxArea that takes an array of integers where each element represents the height of a vertical line, and returns the maximum area of water it can contain
  
  const maxArea = (height) => {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
  
    while (left < right) {
      const width = right - left;
      const minHeight = Math.min(height[left], height[right]);
      const area = width * minHeight;
      maxArea = Math.max(maxArea, area);
  
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return maxArea;
  };
  
  console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
  
  // que 3
  // Write a function mergeIntervals that takes an array of intervals and merges all overlapping intervals.
  
  const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let current = intervals[0];
    for (const interval of intervals.slice(1)) {
      if (interval[0] <= current[1]) {
        current[1] = Math.max(current[1], interval[1]);
      } else {
        merged.push(current);
        current = interval;
      }
    }
    merged.push(current);
    return merged;
  };
  console.log(
    mergeIntervals([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ])
  );
  
  // que 4
  // Write a JavaScript program to get integers in the range (x, y) using recursion.
  
  const range = (x, y, result = []) => {
    if (x >= y) {
      return result;
    }
    result.push(x + 1);
    return range(x + 1, y, result);
  };
  
  console.log(range(2, 9));
  
  // que 5
  // Write a JavaScript function to get a two-digit year representation.
  
  const sortYear = (dt) => {
    return ('' + dt.getFullYear()).substring(2);
  };
  console.log(sortYear(new Date(2024, 10, 1)));
  
  // que 6
  // Write a JavaScript function to uncommelize a string.
  
  const uncamelize = (str, separator = ' ') => {
    return str.replace(/([A-Z])/g, (match) => separator + match.toLowerCase());
  };
  console.log(uncamelize('helloWorld', '_'));
  
  // que 7
  // Write a JavaScript function to concatenate a given string n times (default is 1).
  
  const repeatString = (str, n = 1) => {
    return Array(n + 1).join(str);
  };
  console.log(repeatString('ha', 3));
  