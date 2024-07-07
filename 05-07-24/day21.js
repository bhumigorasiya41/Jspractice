// Que1
// Write a JavaScript function to remove a specific character from a string.

const removeCharacter = (str, removeChar) => str.split(removeChar).join('');

console.log(removeCharacter('Hello, World!', '!'));
console.log(removeCharacter('Hello, World!', 'l'));

// que 2
// Write a JavaScript function to insert a string within a string at a particular position.

const addString = (originalStr, stringToInsert, position) => {
  return (
    originalStr.slice(0, position) +
    stringToInsert +
    originalStr.slice(position)
  );
};
console.log(addString('Hello World', 'beutiful', 6));

//Que 3
// find out the maximum date from the array

const dates = [
  new Date('2022-06-15'),
  new Date('2023-09-20'),
  new Date('2021-03-10'),
  new Date('2024-01-05'),
];

const maxDate = new Date(Math.max(...dates));
console.log(maxDate);

// que 4
// Write a JavaScript function to test if a number is a power of 2

const isPowerOfTwoAlternative = (num) => {
  if (num <= 0) return false;
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num /= 2;
  }
  return true;
};

console.log(isPowerOfTwoAlternative(16));

// que 5
// Write a JavaScript function to calculate the percentage (%) of a number.

const calculatePercentage = (number, percent) => {
  if (isNaN(number) || isNaN(percent)) {
    throw new Error('Invalid input: Please provide valid numbers');
  }
  return (number / 100) * percent;
};
console.log(calculatePercentage(1000, 47.12));

// que 6
// Write a JavaScript function to create a random background color

const randomBackgroundColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
};
console.log(randomBackgroundColor());

// que 7
// Calculate difference between two dates in hours, minutes, and seconds give solution

const getTimeDifference = (date1, date2) => {
  const timeDiffInMs = date2.getTime() - date1.getTime();
  const timeDiffInSeconds = Math.floor(timeDiffInMs / 1000);
  const hours = Math.floor(timeDiffInSeconds / 3600);
  const minutes = Math.floor((timeDiffInSeconds % 3600) / 60);
  const seconds = Math.floor(timeDiffInSeconds % 60);

  return {
    hours,
    minutes,
    seconds,
  };
};
console.log(getTimeDifference(new Date('2024-03-10'), new Date('2024-03-12')));
