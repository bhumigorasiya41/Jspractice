// que:1
// find  HTML-colors written as #ABCDEF: first # and then 6 hexadecimal characters from string.

const findHtmlColors = (string) => {
    return string.match(/#[a-f0-9]{6}/gi);
  };
  
  console.log(
    findHtmlColors(
      'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678'
    )
  );
  
  //que: 2
  //Given an array of objects representing students and their courses, create a function to find the average grade for each student.
  const studentCourses = [
    {
      name: 'Alice',
      courses: [
        { name: 'Math', grade: 85 },
        { name: 'Science', grade: 90 },
        { name: 'History', grade: 75 },
      ],
    },
    {
      name: 'Bob',
      courses: [
        { name: 'Math', grade: 92 },
        { name: 'Science', grade: 88 },
        { name: 'History', grade: 80 },
      ],
    },
    {
      name: 'Charlie',
      courses: [
        { name: 'Math', grade: 78 },
        { name: 'Science', grade: 85 },
        { name: 'History', grade: 92 },
      ],
    },
  ];
  
  const getAverageGrade = (students) => {
    return students.map((student) => {
      const grade1 =
        student.courses.reduce((sum, course) => sum + course.grade, 0) /
        student.courses.length;
  
      return { name: student.name, grade: grade1.toFixed(2) };
    });
  };
  console.log(getAverageGrade(studentCourses));
  
  //que 3
  // Can you write a function in JavaScript to find the longest word in a given sentence?
  
  const longestWord = (sentence) =>
    sentence
      .split(' ')
      .reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        ''
      );
  
  console.log(longestWord('The quick brown fox jumpss over the lazy dog'));
  
  //que 4
  // Can you write a function in JavaScript to calculate the cumulative sum of an array?
  const product = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 },
    { name: 'Tablet', price: 300, quantity: 7 },
  ];
  const cumulativeSum = (arr) => {
    return arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };
  
  console.log(cumulativeSum(product));
  
  //que 5
  // Can you write a JavaScript function to find the first non-repeated character in a given string?
  const firstNonRepeatedChar = (str) =>
    str.split('').find((char) => str.indexOf(char) === str.lastIndexOf(char));
  
  console.log(firstNonRepeatedChar('programming'));
  
  //que 6
  // Output should be:
  // {
  //   Electronics: [
  //     { name: "Laptop", category: "Electronics", price: 1000 },
  //     { name: "Smartphone", category: "Electronics", price: 800 },
  //     { name: "Headphones", category: "Electronics", price: 150 }
  //   ],
  //   Clothing: [
  //     { name: "T-shirt", category: "Clothing", price: 20 },
  //     { name: "Sneakers", category: "Clothing", price: 50 }
  //   ]
  // }
  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000 },
    { name: 'Smartphone', category: 'Electronics', price: 800 },
    { name: 'T-shirt', category: 'Clothing', price: 20 },
    { name: 'Sneakers', category: 'Clothing', price: 50 },
    { name: 'Headphones', category: 'Electronics', price: 150 },
  ];
  
  const groupByCategory = (arr) => {
    return arr.reduce((acc, curr) => {
      !acc[curr.category]
        ? (acc[curr.category] = [curr])
        : acc[curr.category].push(curr);
      return acc;
    }, {});
  };
  
  console.log(groupByCategory(products));
  
  //que 7
  // find all anagrams
  
  const findAnagrams = (arr) => {
    const map = new Map();
    arr.forEach((word) => {
      let sorted = word.toLowerCase().split('').sort().join('');
      map.set(sorted, word);
    });
    return [...map.values()];
  };
  console.log(
    findAnagrams(['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'])
  );
  
  //que 8
  // Output should be:
  // [
  //   { name: "Alice", highestGrade: 90 },
  //   { name: "Bob", highestGrade: 80 },
  //   { name: "Charlie", highestGrade: 100 }
  // ]
  const students = [
    { name: 'Alice', grades: [80, 85, 90] },
    { name: 'Bob', grades: [70, 75, 80] },
    { name: 'Charlie', grades: [90, 95, 100] },
  ];
  const getHighestGrades = (students) => {
    return students.map((student) => {
      const highestGrade = student.grades.reduce(
        (maxGrade, grade) => Math.max(maxGrade, grade),
        0
      );
      return { name: student.name, highestGrade };
    });
  };
  console.log(getHighestGrades(students));
  
  //que 9
  //get name of people who's age is grater then 25
  const peoples = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
  ];
  
  const getNamesOlderThan25 = (peoples) => {
    return peoples
      .filter((people) => people.age > 25)
      .map((people) => people.name);
  };
  console.log(getNamesOlderThan25(peoples));
  
  //que 10
  // Output should be:
  // {
  //   HR: { averageSalary: 55000, numberOfEmployees: 2 },
  //   Engineering: { averageSalary: 77500, numberOfEmployees: 2 },
  //   Marketing: { averageSalary: 62500, numberOfEmployees: 2 }
  // }
  const employees = [
    { name: 'Alice', department: 'HR', salary: 50000, joiningYear: 2015 },
    { name: 'Bob', department: 'Engineering', salary: 75000, joiningYear: 2014 },
    { name: 'Charlie', department: 'HR', salary: 60000, joiningYear: 2016 },
    { name: 'David', department: 'Marketing', salary: 70000, joiningYear: 2017 },
    { name: 'Eve', department: 'Engineering', salary: 80000, joiningYear: 2015 },
    { name: 'Frank', department: 'Marketing', salary: 55000, joiningYear: 2016 },
  ];
  const getDepartmentStats = (employees) => {
    return employees.reduce((acc, employee) => {
      !acc[employee.department]
        ? (acc[employee.department] = {
            averageSalary: employee.salary,
            numberOfEmployees: 1,
          })
        : (acc[employee.department] = {
            averageSalary:
              (acc[employee.department].averageSalary + employee.salary) / 2,
            numberOfEmployees: acc[employee.department].numberOfEmployees + 1,
          });
      return acc;
    }, {});
  };
  
  console.log(getDepartmentStats(employees));
  