// que 1
// Chef needs to park her car while she watches a movie. The parking charges at the theater are as follows:

// Rs. 𝑋 for the first 1 hour
// Rs. Y for every extra hour after the first hour
// If Chef parks her car for  H hours, what is the total parking charges that she should pay?

const calculateParkingCharges = (X, Y, H) => {
    return H <= 1 ? X : X + (H - 1) * Y;
  };
  
  console.log(calculateParkingCharges(10, 5, 2));
  
  //que 2
  // Search by title (case-insensitive)
  const library = [
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      publicationDate: '2001-12-01',
      borrowed: true,
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      publicationDate: '1937-09-21',
      borrowed: false,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publicationDate: '1813-01-28',
      borrowed: true,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publicationDate: '1960-07-11',
      borrowed: false,
    },
  ];
  
  const searchByTitle = (searchTerm) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return library.filter((book) =>
      book.title.toLowerCase().includes(lowerSearchTerm)
    );
  };
  
  console.log(searchByTitle('pride'));
  
  // que 3
  // Write a function that takes a string containing parentheses ((), [], {}) and determines if the parentheses are balanced and valid.
  
  const isValidParenthesis = (str) => {
    const stack = [];
    const openingToClosing = {
      '(': ')',
      '[': ']',
      '{': '}',
    };
  
    for (let char of str) {
      if (char in openingToClosing) {
        stack.push(char);
      } else {
        const expectedClosing = openingToClosing[stack.pop()];
        if (char !== expectedClosing) {
          return false;
        }
      }
    }
    return stack.length === 0;
  };
  
  console.log(isValidParenthesis('()'));
  console.log(isValidParenthesis('([)]'));
  console.log(isValidParenthesis('{([])}'));
  console.log(isValidParenthesis('('));
  
  // que 4
  // Return a Boolean if a number is divisible by 10  give solution
  
  const isDivisibleBy10 = (number) => {
    return number % 10 === 0;
  };
  
  console.log(isDivisibleBy10(20));
  console.log(isDivisibleBy10(25));
  
  // que 5
  // Can you write a one-liner in JavaScript to find the longest consecutive sequence of a specific element in an array?
  
  const longestConsecutiveSequence = (arr, element) =>
    Math.max(
      ...arr
        .join('')
        .split(element)
        .map((group) => group.length)
    );
  
  console.log(longestConsecutiveSequence([1, 2, 3, 7, 8, 9, 4, 5, 6], 4));
  
  //  que 6
  //Can you write a function in JavaScript to create a countdown from a given number?
  
  const countdown = (n) => Array.from({ length: n }, (_, i) => n - i);
  
  console.log(countdown(5));
  
  // que 7
  // Can you write a function in JavaScript to convert a decimal number to its binary representation?
  
  const decimalToBinary = (num) => num.toString(2);
  
  console.log(decimalToBinary(7));
  