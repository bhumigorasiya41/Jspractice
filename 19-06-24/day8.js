//que 1
// Write a JavaScript function that takes a string as input and returns the string with all vowels removed.

const removeVowels = (str) => {
    return str.replace(/[AEIOUaeiou]/g, '');
  };
  console.log(removeVowels('hello world'));
  
  //que 2
  // Write a JavaScript function that takes an object as input and returns a new object with the same properties, but with all property values converted to uppercase.
  
  const uppercaseObject = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        String(value).toUpperCase(),
      ])
    );
  };
  console.log(uppercaseObject({ name: 'john', age: 30, isAdmin: true }));
  
  //que 3
  // Write a JavaScript function that takes an array of numbers as input and returns the sum of all the positive numbers in the array.
  
  const sumPositiveNumbers = (arr) => {
    return arr.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
  };
  console.log(sumPositiveNumbers([1, -2, 3, 4, -5, 6]));
  
  //que 4
  // Write a JavaScript function that takes a date string in the format "YYYY-MM-DD" as input and returns the first day of the week (Monday) of the same week as the input date.
  
  const firstDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    const dayOfWeek = date.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  
    date.setDate(date.getDate() - daysToSubtract);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };
  console.log(firstDayOfWeek('2024-06-19'));
  
  //que 5
  //Write  JavaScript Program to Swap First and Last Elements in an Array
  
  const swapElement = (arr) => {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  };
  console.log(swapElement([1, 4, 67, 3, 9]));
  
  //que 6
  // find maximum difference between this array
  
  const findMaxDiff = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[arr.length - 1] - arr[0];
  };
  console.log(findMaxDiff([2, 4, 3, 6, 7]));
  
  //que 7
  // find non digit from string
  
  const findNonDigitWord = (str) => {
    return str.match(/\D/g);
  };
  let text = 'visit, W3Schools,is, the, good, way,to, learn ';
  console.log(findNonDigitWord(text));
  