// que 1
// Find the Median

const findMedian = (arr) => {
    const mid = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      return (arr[mid - 1] + arr[mid]) / 2;
    } else {
      return arr[mid];
    }
  };
  
  console.log(findMedian([1, 2, 3]));
  console.log(findMedian([4, 5, 6, 7]));
  
  //que 2
  // Write a function called filterNumbers that takes an array containing numbers and strings as input and returns a new array containing only the numbers.
  
  const filterNumbers = (arr) => {
    return arr.filter((ele) => typeof ele === 'number');
  };
  console.log(filterNumbers(['apple', 10, 'banana', 3]));
  
  // que 3
  // Write a function called groupAnagrams that takes an array of strings as input and returns a new array of arrays. Each sub-array should contain strings that are anagrams of each othe
  
  const groupAnagrams = (arr) => {
    const result = arr.reduce((acc, curr) => {
      let sortedString = curr
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');
      acc[sortedString]
        ? acc[sortedString].push(curr)
        : (acc[sortedString] = [curr]);
      return acc;
    }, {});
    return Object.values(result);
  };
  console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
  
  //que 4
  // Find total price and get item according to basketIds
  
  const products = [
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Jeans', price: 30 },
    { id: 3, name: 'Mug', price: 5 },
    { id: 4, name: 'Book', price: 10 },
  ];
  
  const basketIds = [1, 2, 3];
  
  const buildShoppingBasket = (products, basketIds) => {
    return products.reduce(
      (acc, curr) => {
        if (basketIds.includes(curr.id)) {
          acc['item'].push(curr);
          acc['totalPrice'] = acc['totalPrice'] + curr.price;
        }
        return acc;
      },
      { item: [], totalPrice: 0 }
    );
  };
  console.log(buildShoppingBasket(products, basketIds));
  
  //que 5
  // Write a function called findUpcomingEvents that takes an array of event objects and a date as input. The function should return a new array containing only the event objects that occur after the provided date (inclusive).
  
  const events = [
    { name: 'Concert', date: new Date('2024', '06', '21') },
    { name: 'Meeting', date: new Date('2024', '06', '20') },
    { name: 'Workshop', date: new Date('2024', '06', '19') },
  ];
  
  const findUpcomingEvents = (events, targetDate) => {
    return events.filter((ele) => ele.date > targetDate);
  };
  
  const today = new Date('2024', '06', '20');
  
  console.log(findUpcomingEvents(events, today));
  
  //que 6
  // Write a function called createWordCloud that takes an array of strings as input (representing words) and returns an object representing a word cloud. The object should have the following properties:
  
  // words: An object where keys are unique words (lowercase) and values are the number of times each word appears in the input array.
  // mostFrequent: The word that appears the most frequently (including its count).
  
  const words = [
    'javascript',
    'programming',
    'javascript',
    'web',
    'development',
    'fun',
  ];
  
  const createWordCloud = (words) => {
    const wordCounts = words.reduce((acc, word) => {
      const lowerWord = word.toLowerCase();
      acc[lowerWord] = (acc[lowerWord] || 0) + 1;
      return acc;
    }, {});
    const mostFrequent = Object.entries(wordCounts).reduce(
      (acc, [nextWord, nextCount]) => {
        if (acc['count'] < nextCount) {
          acc['count'] = nextCount;
          acc['word'] = nextWord;
        }
        return acc;
      },
      { word: '', count: 0 }
    );
  
    return { words: wordCounts, mostFrequent };
  };
  
  console.log(createWordCloud(words));
  
  //que 7
  // Write a function called filterProductsByCategoryAndPrice that takes an array of product objects and two parameters (category and maxPrice) as input. The function should return a new array containing only the product objects that:
  
  // Belong to the specified category (or all categories if category is empty).
  // Have a price less than or equal to the provided maxPrice.
  
  const productsArr = [
    { name: 'Shirt', category: 'Clothing', price: 20 },
    { name: 'Jeans', category: 'Clothing', price: 30 },
    { name: 'Mug', category: 'Kitchen', price: 5 },
    { name: 'Book', category: 'Books', price: 10 },
    { name: 'Pen', category: 'Office Supplies', price: 1 },
  ];
  const filterProductsByCategoryAndPrice = (products, category, maxPrice) => {
    return products.filter(
      (product) => product.category === category && product.price <= maxPrice
    );
  };
  
  console.log(filterProductsByCategoryAndPrice(productsArr, 'Clothing', 25));
  