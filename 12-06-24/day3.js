//que 1
//Write a JavaScript program to get the length of a JavaScript object.
//sol 1
// const getLengthOfObject = (obj) => {
//   let count = 0;
//   for (let key in obj) {
//     obj.hasOwnProperty(key) ? count++ : null;
//   }
//   return count;
// };

//sol 2
const getLengthOfObject = (obj) => {
    return Object.keys(obj).length;
  };
  
  console.log(
    getLengthOfObject({
      id: 28802695164,
      date: 'December 31, 2016',
      data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
          active: 67,
          away: 13,
          busy: 8,
        },
      },
    })
  );
  
  //que 2
  // Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
  
  const getNewObj = (obj) => {
    let newObj = {};
    for (let key in obj) {
      newObj[obj[key]] = key;
    }
    return newObj;
  };
  console.log(getNewObj({ name: 'bhumi', age: 21 }));
  
  //que 3
  // compare two array of object is same or not
  const mechanical_students_details = [
    {
      student_id: 1,
      student_name: 'Ramesh',
      student_age: 22,
    },
    {
      student_id: 2,
      student_name: 'Suresh',
      student_age: 26,
    },
  ];
  
  const cse_students_details = [
    {
      student_id: 1,
      student_name: 'Aman',
      student_age: 23,
    },
    {
      student_id: 2,
      student_name: 'Chaitanya',
      student_age: 24,
    },
    {
      student_id: 3,
      student_name: 'Dharmendra',
      student_age: 21,
    },
  ];
  
  const compareTwoArray = (arr1, arr2) => {
    return (
      arr1.length === arr2.length &&
      arr1.every((ele) => {
        return arr2.some((item) => {
          return Object.keys(ele).every((key) => ele[key] === item[key]);
        });
      })
    );
  };
  console.log(compareTwoArray(mechanical_students_details, cse_students_details));
  
  //que 4
  //replace all special charcter with "_"
  
  const replaceString = (string) => {
    return string.replace(/[&\/\\#, +()$~%.'":*?<>{}]/g, '_');
  };
  console.log(replaceString('he/llo# $wor+ld:'));
  
  //que 5
  //Write a JavaScript function to get the month name from a particular date
  const getMonthName = (date) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[date.getMonth()];
  };
  
  console.log(getMonthName(new Date('10/11/2024')));
  
  //que 6
  //Display all the keys and values of a nested object
  
  const keyValuePrinter = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] !== 'object') {
        console.log('[' + key + ' : ' + obj[key] + ']');
      } else {
        keyValuePrinter(obj[key]);
      }
    }
  };
  
  keyValuePrinter({
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8,
      },
    },
  });
  
  //que 7
  //give an array of size n that has element ranging from 0 to n-1.all element may be not in array.if element is not present then there will be -1 present.rearrange the array such that A[i] = i if i is not present then put -1.
  
  const rearrangeArray = (arr) => {
    let newArray = new Array(arr.length).fill(null);
    return newArray.map((ele, index) => {
      return arr.includes(index) ? index : -1;
    });
  };
  
  console.log(rearrangeArray([0, -1, -1, 2, 3, 6, -1, 7]));
  