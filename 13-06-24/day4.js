//que 1
// create a function that takes this array as input and returns an object containing information about the sentences. The object should have three properties:

// totalSentences: The total number of sentences in the array.
// longestSentence: The longest sentence in the array.
// averageLength: The average length of all the sentences rounded to the nearest whole number.
const sentences = [
    'The quick brown fox jumps over the lazy dog.',
    'I am the walrus.',
    'To be or not to be, that is the question.',
    'This is a short sentence.',
  ];
  
  const analyzeSentences = (arr) => {
    let obj = {};
  
    obj['totalSentences'] = arr.length;
  
    obj['longestSentence'] = arr.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
    const totalCharacters = arr.reduce(
      (total, sentence) => total + sentence.length,
      0
    );
    obj['averageLength'] = Math.round(totalCharacters / arr.length);
    return obj;
  };
  
  console.log(analyzeSentences(sentences));
  
  //que 2
  //Write a JavaScript function to get the difference between two dates in days.
  
  const diffInDays = (date1, date2) => {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
  };
  console.log(diffInDays('01/25/2014', '03/01/2014'));
  
  //que 3
  //remove duplicate object of array
  
  const cseStudentsDetails = [
    {
      student_id: 1,
      student_name: 'Aman',
      student_age: 23,
    },
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
  
  const removeduplicateObj = (arr) => {
    return arr.filter((obj, index) => {
      return index === arr.findIndex((ele) => ele.student_id === obj.student_id);
    });
  };
  console.log(removeduplicateObj(cseStudentsDetails));
  
  //que 4
  //given a string and a string dictionary.find the longest string in the dictionary that can be formed by deleting some charcters of the given string.
  
  const findString = (arr, string) => {
    let longestString = '';
    arr.forEach((ele) => {
      let i = 0,
        j = 0;
      while (i < ele.length && j < string.length) {
        if (ele[i] === string[j]) {
          i++;
        }
        j++;
      }
      i === ele.length
        ? longestString.length > ele.length
          ? null
          : (longestString = ele)
        : null;
    });
    return longestString;
  };
  console.log(findString(['ale', 'apple', 'monkey', 'plea'], 'abpcplea'));
  
  //que 5
  //give an array of sorted integers.we need to find the closest value to the given number.array may contain duplicate values and negative numbers.
  
  const findNearestValue = (arr, target) => {
    let diff = Infinity || Math.max(...arr);
    let nearestValue = 0;
    arr.forEach((ele) => {
      if (Math.abs(ele - target) < diff) {
        diff = Math.abs(ele - target);
        nearestValue = ele;
      }
    });
    return nearestValue;
  };
  console.log(findNearestValue([1, 2, 4, 5, 6, 6, 8, 9], 11));
  
  //que 6
  //Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
  
  const fillArray = (start, end, step) => {
    let array = [];
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);
    while (start <= end) {
      array.push(String.fromCharCode(start));
      start += step;
    }
    return array;
  };
  console.log(fillArray('a', 'z', 3));
  
  //que 7
  //get maximum date from array
  
  const maxDate = (arr) => {
    let maxDt = arr[0];
    maxDtObj = new Date(arr[0]);
    arr.forEach((date) => {
      let currDtObj = new Date(date);
      if (currDtObj > maxDt) {
        maxDt = date;
        maxDtObj = new Date(date);
      }
    });
    return maxDt;
  };
  console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));
  