//que 1
// Write a JavaScript function to get the number of days in a year.

const dayOfYear = (year) => {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;
  };
  console.log(dayOfYear(2025));
  
  //que 2
  // give score of N athletes,find their relative ranks and the people with the top three highest scores,who will be awarded medals:"gold medal","silver medal" and "bronze modal".
  
  const findRank = (scores) => {
    let scoreWithIndex = scores.map((score, index) => ({ score, index }));
    scoreWithIndex.sort((a, b) => b.score - a.score);
    let result = [];
    scoreWithIndex.forEach((ele, i) => {
      if (i === 0) {
        result[ele.index] = 'Gold Medal';
      } else if (i === 1) {
        result[ele.index] = 'Silver Medal';
      } else if (i === 2) {
        result[ele.index] = 'Bronze Medal';
      } else {
        result[ele.index] = i + 1;
      }
    });
    return result;
  };
  console.log(findRank([2, 4, 1, 5, 3]));
  
  //que3
  //Given an integer n,you need to print all numbers less than n which are having digits only 1 or 3 or both.
  
  const printNumber = (num) => {
    let i = 1;
    while (i <= +num) {
      if (i.toString().includes('3') || i.toString().includes('1')) {
        console.log(i);
      }
      i++;
    }
  };
  printNumber(10);
  
  //que 4
  // Write a JavaScript function which returns the n rows by n columns identity matrix.
  
  const matrix = (m, n) => {
    const arr = new Array(m).fill(0);
    const result = arr.map((ele) => new Array(n).fill(0));
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result[i].length; j++) {
        if (i === j) {
          result[i][j] = 1;
        }
      }
    }
    return result;
  };
  console.table(matrix(3, 3));
  
  //que 5
  // Merging Objects in an Array
  
  const mergeObject = (arr) => {
    return arr.reduce((acc, curr) => ({ ...acc, ...curr }), {});
  };
  console.log(
    mergeObject([
      { a: 1, b: 2 },
      { a: 3, c: 4 },
      { b: 5, d: 6 },
    ])
  );
  
  //que 6
  //Merging Two Objects with Deep Properties
  const obj1 = {
    a: 1,
    b: 2,
    c: {
      d: 3,
      e: 4,
    },
  };
  
  const obj2 = {
    a: 10,
    c: {
      d: 30,
      f: 40,
    },
  };
  
  const mergeDeep = (obj1, obj2) => {
    return Object.keys({ ...obj1, ...obj2 }).reduce((acc, key) => {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        acc[key] = mergeDeep(obj1[key], obj2[key]);
      } else {
        acc[key] = obj2[key] || obj1[key];
      }
      return acc;
    }, {});
  };
  
  const mergedObject = mergeDeep(obj1, obj2);
  
  console.log(mergedObject);
  
  //que 7
  // Finding the Intersection of Two Arrays
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  
  const intersection = arr1.filter((element) => arr2.includes(element));
  
  console.log(intersection);
  