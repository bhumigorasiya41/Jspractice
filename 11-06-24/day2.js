const doctorsWithNurses = [
    {
      id: 1,
      firstName: 'Dr. Alice',
      lastName: 'Smith',
      department: 'Cardiology',
      salary: 180000,
      managerId: null,
      subordinates: [
        {
          id: 2,
          firstName: 'Bob',
          lastName: 'Johnson',
          department: 'Cardiology',
          salary: 75000,
          managerId: 1,
        },
        {
          id: 3,
          firstName: 'Charlie',
          lastName: 'Brown',
          department: 'Cardiology',
          salary: 77000,
          managerId: 1,
        },
      ],
    },
    {
      id: 4,
      firstName: 'Dr. David',
      lastName: 'Wilson',
      department: 'Neurology',
      salary: 190000,
      managerId: null,
      subordinates: [
        {
          id: 5,
          firstName: 'Emily',
          lastName: 'Garcia',
          department: 'Neurology',
          salary: 80000,
          managerId: 4,
        },
        {
          id: 6,
          firstName: 'Frank',
          lastName: 'Anderson',
          department: 'Neurology',
          salary: 82000,
          managerId: 4,
        },
      ],
    },
    {
      id: 7,
      firstName: 'Dr. Grace',
      lastName: 'Martinez',
      department: 'Pediatrics',
      salary: 170000,
      managerId: null,
      subordinates: [
        {
          id: 8,
          firstName: 'Hannah',
          lastName: 'Thomas',
          department: 'Pediatrics',
          salary: 70000,
          managerId: 7,
        },
        {
          id: 9,
          firstName: 'Isaac',
          lastName: 'Roberts',
          department: 'Pediatrics',
          salary: 72000,
          managerId: 7,
        },
      ],
    },
  ];
  
  //que 1
  // Concatenate the full names of all doctors and their nurses into a single string separated by commas.
  //o/p: "Dr. Alice Smith, Bob Johnson, Charlie Brown, Dr. David Wilson, Emily Garcia, Frank Anderson, Dr. Grace Martinez, Hannah Thomas, Isaac Roberts"
  
  //solution 1
  // const getFullName = (doctors, arr) => {
  //   doctors.forEach((doctor) => {
  //     arr.push(`${doctor.firstName} ${doctor.lastName}`);
  //     doctor.subordinates ? getFullName(doctor.subordinates, arr) : null;
  //   });
  //   return arr.join(',');
  // };
  
  //solution 2
  const getFullName = (doctors) => {
    return doctors
      .reduce((acc, doctor) => {
        acc.push(`${doctor.firstName} ${doctor.lastName}`);
        if (doctor.subordinates) {
          acc = acc.concat(getFullName(doctor.subordinates));
        }
        return acc;
      }, [])
      .join(',');
  };
  
  console.log(getFullName(doctorsWithNurses, []));
  
  //que 2
  //Find the doctor with the highest total salary (including their nurses).
  
  const getTotalSalary = (arr) => {
    return arr.map((doctor) => {
      let totalSalary = doctor.salary;
      if (doctor.subordinates) {
        totalSalary += getTotalSalary(doctor.subordinates).reduce(
          (acc, curr) => acc + curr,
          0
        );
      }
      return totalSalary;
    });
  };
  const highestSalary = Math.max(...getTotalSalary(doctorsWithNurses));
  const doctorIndex = getTotalSalary(doctorsWithNurses).findIndex(
    (salary) => salary === highestSalary
  );
  console.log(
    'doctor:',
    doctorsWithNurses[doctorIndex].firstName,
    'highestSalary:',
    highestSalary
  );
  
  //que 3
  //Check if any nurse has a last name containing a specific letter
  
  const hasNurseWithLetter = (arr, letter) => {
    return arr.filter(
      (item) =>
        item.subordinates.filter((ele) => ele.lastName.includes(letter)).length
    );
  };
  console.log(hasNurseWithLetter(doctorsWithNurses, 'a'));
  
  //que 4
  //Create a function that takes a doctor's ID and returns their full details (including their nurses).
  const findDoctor = (arr, id) => {
    const doctor = arr.find((ele) => ele.id === id);
    if (!doctor) {
      return 'not found';
    }
    const nurses = doctor.subordinates.map(
      (nurse) => `${nurse.firstName} ${nurse.lastName}`
    );
    return {
      id: id,
      name: `${doctor.firstName} ${doctor.lastName}`,
      department: doctor.department,
      salary: doctor.salary,
      nurses,
    };
  };
  
  console.log(findDoctor(doctorsWithNurses, 4));
  //que 5
  // Implement a method to  count the total number of nurses for each doctor.
  
  const countTotalNurse = (arr) => {
    return arr.map((doctor) => ({
      name: doctor.firstName,
      totalNurse: doctor.subordinates.length,
    }));
  };
  console.log(countTotalNurse(doctorsWithNurses));
  
  //que 6
  // Write a JavaScript function to convert a string into abbreviated form.
  
  const convertStringToAbbreviated = (string) => {
    const arrOfString = string.split(' ');
    return arrOfString.length > 0
      ? arrOfString[0] + ' ' + arrOfString[1].charAt(0) + '.'
      : arrOfString[0];
  };
  console.log(convertStringToAbbreviated('hello world'));
  
  //que 7
  // Write a JavaScript function to insert a string within a string at a particular position
  
  const addString = (string, inputString = ' ', pos = 0) => {
    return string.slice(0, pos) + inputString + string.slice(pos);
  };
  console.log(addString('We are doing some exercises.'));
  console.log(addString('We are doing some exercises.', 'JavaScript '));
  console.log(addString('We are doing some exercises.', 'JavaScript ', 18));
  
  //que 8
  //find url from string
  
  const extractURLs = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex);
  
    return urls || [];
  };
  const text =
    'Check out this website: https://www.example.com, and also visit https://en.wikipedia.org/wiki/Regular_expression';
  console.log(extractURLs(text));
  
  //que 9
  //get all unique genres
  const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Fiction',
      pages: 218,
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
      pages: 324,
    },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian', pages: 328 },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      genre: 'Fiction',
      pages: 277,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      genre: 'Romance',
      pages: 279,
    },
  ];
  
  const getAllGenre = (books) => {
    return [...new Set(books.flatMap((book) => book.genre))];
  };
  console.log(getAllGenre(books));
  
  //que 10
  //find average of  pages of all books
  const getAveragePages = (books) => {
    return (
      books.map((book) => book.pages).reduce((acc, pages) => acc + pages) /
      books.length
    );
  };
  console.log(getAveragePages(books));
  