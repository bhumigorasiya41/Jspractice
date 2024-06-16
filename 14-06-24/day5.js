//que 1
// Can you write a JavaScript function to check if a given string has all unique characters?
const hasUniqueCharacters = (str) => new Set(str).size === str.length;
console.log(hasUniqueCharacters("hello"));

//que 2
// implement a function that shuffles elements of a given array. The given array, nums, consists of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
//  return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shufflesArray = (arr) => {
  let ans = [];
  let i = 0;
  let j = arr.length / 2;
  while (i < j && j < arr.length) {
    ans.push(arr[i]);
    ans.push(arr[j]);
    i++, j++;
  }
  return ans;
};
console.log(shufflesArray([2, 5, 1, 3, 4, 7]));

//que 3
// You have an array of objects representing orders, and each order has a customerId and an orderDate. You want to find the customer who has placed the most orders and return an object with the customer's ID and the count of their orders.

const orders = [
  { customerId: 1, orderDate: "2022-01-01" },
  { customerId: 2, orderDate: "2022-01-05" },
  { customerId: 1, orderDate: "2022-01-10" },
  { customerId: 3, orderDate: "2022-01-15" },
  { customerId: 2, orderDate: "2022-01-20" },
  { customerId: 1, orderDate: "2022-01-25" },
  { customerId: 4, orderDate: "2022-02-01" },
  { customerId: 3, orderDate: "2022-02-05" },
];

const findCustomerWithMostOrders = (orders) => {
  const orderCounts = orders.reduce((acc, curr) => {
    if (!acc[curr.customerId]) {
      acc[curr.customerId] = 0;
    }
    acc[curr.customerId]++;
    return acc;
  }, {});
  let maxOrders = 0;
  let customerWithMostOrders = null;

  Object.keys(orderCounts).forEach((customerId) => {
    if (orderCounts[customerId] > maxOrders) {
      maxOrders = orderCounts[customerId];
      customerWithMostOrders = customerId;
    }
  });
  return {
    customerId: customerWithMostOrders,
    orderCount: maxOrders,
  };
};
console.log(findCustomerWithMostOrders(orders));

//que 4
//Calculate the average score for each student and sort the students by their average score in descending order

const students = [
  { name: "John", scores: [90, 80, 70] },
  { name: "Jane", scores: [95, 85, 75] },
  { name: "Bob", scores: [80, 70, 60] },
  { name: "Alice", scores: [98, 92, 88] },
];

const sortedStudent = (students) => {
  return students
    .map((student) => {
      return {
        ...student,
        averageScore: (
          student.scores.reduce((acc, curr) => acc + curr) /
          student.scores.length
        ).toFixed(2),
      };
    })
    .sort((a, b) => b.averageScore - a.averageScore);
};
console.log(sortedStudent(students));

//que 5
//Write a JavaScript function to get the last day of a month.

const lastday = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};
console.log(lastday(2024, 1));

//que 6
// Can you write a function in JavaScript to rename a specific property in an object?

const renameProperty = (obj, oldName, newName) => {
  const oldValue = obj[oldName];
  delete obj[oldName];
  return { ...obj, [newName]: oldValue };
};
console.log(
  renameProperty(
    { firstName: "John", lastName: "Doe", age: 30 },
    "firstName",
    "first"
  )
);

//que 7
// Can you write a JavaScript function to find the missing number in an array of consecutive integers from 1 to N?

const findMissingNumber = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(i + 1)) {
      return i + 1;
    }
  }
  return null;
};
console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));
