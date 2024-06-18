//que 1
// Find the key with the maximum value in an object

const getMaxKey = (obj) => {
    return Object.keys(obj).reduce((maxKey, currentKey) => {
      return obj[maxKey] > obj[currentKey] ? maxKey : currentKey;
    }, '');
  };
  
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  console.log(getMaxKey(obj));
  
  //que 2
  // Filter out duplicate objects in an array
  
  // const removeDuplicates = (arr) => {
  //   const uniqueIds = [...(new Set(arr.map((obj) => obj.id)))];
  //   return uniqueIds.map((id) => arr.find((obj) => obj.id === id));
  // }
  const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 1, name: 'John' },
    { id: 3, name: 'Bob' },
    { id: 2, name: 'Jane' },
  ];
  const removeDuplicates = (arr) => {
    return arr.filter(
      (obj, index, self) => self.findIndex((o) => o.id === obj.id) === index
    );
  };
  
  const uniqueArr = removeDuplicates(arr);
  console.log(uniqueArr);
  
  //que 3
  // Find the first duplicate in an array
  
  const findFirstDuplicate = (arr) => {
    const seen = {};
    for (let i = 0; i < arr.length; i++) {
      if (seen[arr[i]]) {
        return arr[i];
      }
      seen[arr[i]] = true;
    }
    return undefined;
  };
  
  const array = [2, 1, 3, 5, 3, 2];
  console.log(findFirstDuplicate(array));
  
  //que 4
  // Implement a function to find the second largest number in an array
  
  const findSecondLargest = (arr) => {
    arr.sort((a, b) => b - a);
    if (arr[0] === arr[1]) {
      return null;
    } else {
      return arr[1];
    }
  };
  console.log(findSecondLargest([1, 5, 8, 4, 5, 8, 9]));
  
  //que 5
  // Implement a function to add a specified number of days to a given date
  
  const addDays = (date, days) => {
    const result = new Date(date.getTime());
    result.setDate(result.getDate() + days);
    return result;
  };
  
  const originalDate = new Date('2024-06-30T00:00:00.000Z');
  console.log(addDays(originalDate, 3));
  
  //que 6
  // Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
  
  const myFunction = (...arrays) => {
    let result = [];
    arrays.forEach((arr) => {
      result.push(...arr);
    });
    return result;
  };
  console.log(myFunction([1, 2, 3], [4, 5, 6]));
  console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
  console.log(myFunction([true, true], [1, 2], ['a', 'b']));
  
  //que 7
  // Write a function that takes an array of strings as argument. Group those strings by their first letter.
  
  const groupByFirstCharacter = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr[0].toLowerCase()]
        ? acc[curr[0].toLowerCase()].push(curr)
        : (acc[curr[0].toLowerCase()] = [curr]);
      return acc;
    }, {});
  };
  
  console.log(groupByFirstCharacter(['Alf', 'Alice', 'Ben']));
  