console.log('Day 12 Task of 40 days of JavaScript.');

// 1. What will be the output and why?
const user = { name: 'Alex', age: undefined };
console.log(user.age ?? 'Not provided'); // Not provided

// 2. What will happen if we try to modify a frozen object?
// Nothing will be happen and any error will be raised.
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a); // 1

// 3. Given an object with deeply nested properties, extract name, company, and location.city using destructuring
const Person = {
  name: 'Tapas',
  company: {
    name: 'tapaScript',
    location: {
      city: 'Bangalore',
      zip: '94107',
    },
  },
};

const {
  name: personName,
  company: {
    name: compName,
    location: { city },
  },
} = Person;

// const {
//   company: {
//     location: { city },
//   },
// } = person;
console.log(`Name = ${personName}, Compagny = ${compName} and City = ${city}`);

// 4. Build a Student Management System
/* 
    - Store student details in an object (name, age, grades).
    - Implement a method to calculate the average grade.
 */

const student = {
  name: 'Josue',
  age: 25,
  grade: {
    math: 75,
    french: 80,
    iot: 90,
    operatingSystem: 85,
  },

  average: function () {
    let sum = 0;
    const objSize = Object.keys(grade).length;
    for (let value of Object.values(grade)) {
      sum += value; // Adding grade one to another
    }

    // Calculate average by returning it
    return sum / objSize;
  },
};

const { name: stdName, age, grade, average } = student;
console.log(
  `Student ${stdName} has ${age} old, and has an average of ${average()}%.`
);

// 4. Book Store Inventory System
/* 
  - Store books in an object.
  - Add functionality to check availability and restock books.
*/

const booksObj = [
  {
    id: 1,
    isbn: '9781593279509',
    author: 'Marijn Haverbeke',
    title: 'Eloquent JavaScript, Third Edition',
    website: 'http://eloquentjavascript.net/',
    quantity: 3,
  },
  {
    id: 2,
    isbn: '9781491943533',
    author: 'Nicolás Bevacqua',
    title: 'Practical Modern JavaScript',
    website: 'https://github.com/mjavascript/practical-modern-javascript',
    quantity: 10,
  },
  {
    id: 3,
    isbn: '9781593277574',
    author: 'Nicholas C. Zakas',
    title: 'Understanding ECMAScript 6',
    website: 'https://leanpub.com/understandinges6/read',
    quantity: 30,
  },
  {
    id: 4,
    isbn: '9781449365035',
    author: 'Axel Rauschmayer',
    title: 'Speaking JavaScript',
    website: 'http://speakingjs.com/',
    quantity: 1,
  },
  {
    id: 5,
    isbn: '9781449331818',
    author: 'Addy Osmani',
    title: 'Learning JavaScript Design Patterns',
    website:
      'http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/',
    quantity: 5,
  },
  {
    id: 6,
    isbn: '9798602477429',
    author: 'Kyle Simpson',
    title: "You Don't Know JS Yet",
    website:
      'https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started',
    quantity: 7,
  },
  {
    id: 7,
    isbn: '9781484200766',
    author: 'Scott Chacon and Ben Straub',
    title: 'Pro Git',
    website: 'https://git-scm.com/book/en/v2',
    quantity: 2,
  },
  {
    id: 8,
    isbn: '9781484242216',
    author: 'Caitlin Sadowski, Thomas Zimmermann',
    title: 'Rethinking Productivity in Software Engineering',
    website: 'https://doi.org/10.1007/978-1-4842-4221-6',
    quantity: 20,
  },
  {
    id: 9,
    isbn: 'Unknown',
    author: 'Chinua Achebe',
    title: 'Things Fall Apart',
    website: 'https://en.wikipedia.org/wiki/Things_Fall_Apart\n',
    quantity: 50,
  },
  {
    id: 10,
    isbn: 'Unknown',
    author: 'Dante Alighieri',
    title: 'The Divine Comedy',
    website: 'https://en.wikipedia.org/wiki/Divine_Comedy\n',
    quantity: 100,
  },
];

// Adding new method to the Object book.
function checkAvailability(bookTitle) {
  const bookSize = booksObj.length;
  let found = false;
  let locationFoundAtArray = 0;
  const formattedTitle = bookTitle?.toLowerCase(); // The ?. operator avoid error when passing undefined
  for (let objCount = 0; objCount < bookSize; objCount++) {
    if (booksObj[objCount].title.toLowerCase() === formattedTitle) {
      found = true;
      locationFoundAtArray = objCount;
      break;
    }
  }

  if (found) {
    console.log(
      'The book with the Title "',
      bookTitle,
      '" exist. These are its details:\n',
      booksObj[locationFoundAtArray]
    );
  } else {
    console.log('The book is not available. Please book it from our shop.');
  }
}

checkAvailability('JavaScript definitive Guide'); // Not available.
checkAvailability('Eloquent JavaScript, Third Edition'); // Available and print its details.
checkAvailability('Learning JavaScript Design Patterns'); // Available and print its details.
checkAvailability("You Don't Know JS Yet"); // Available and print its details.
checkAvailability('Rethinking Productivity in Software Engineering'); // Available and print its details.
checkAvailability('The Divine Comedy'); // Available and print its details.
checkAvailability(undefined);

function restockBook(bookTitle, quantity) {
  const bookSize = booksObj.length;
  const formattedTitle = bookTitle?.toLowerCase(); // Handle undefined in the proper way with ?. operator.
  let found = false;
  let locationFoundAtArray = 0;
  for (let objCount = 0; objCount < bookSize; objCount++) {
    if (booksObj[objCount].title.toLowerCase() === formattedTitle) {
      // Book found and then increment quantity to restock.
      booksObj[objCount].quantity += quantity;
      found = true;
      locationFoundAtArray = objCount;
    }
  }

  if (found) {
    // Print current quatity.
    console.log(
      'Current quantity after restock is:',
      booksObj[locationFoundAtArray].quantity
    );
  } else {
    console.log(
      'The book is not available. Please buy it before to restock it!'
    );
  }
}

restockBook('JavaScript definitive Guide', 20); // Not available
restockBook('Eloquent JavaScript, Third Edition', 10); // 3 + 10 = 13
restockBook('Learning JavaScript Design Patterns', 5); // 5 + 5 = 10
restockBook("You Don't Know JS Yet", 40); // 7 + 40 = 47
restockBook('Rethinking Productivity in Software Engineering', 30); // 20 + 30 = 50
restockBook('The Divine Comedy', 3); // 100 + 3 = 103
restockBook(undefined, 1);

// 6. What is the difference between Object.keys() and Object.entries()? Explain with examples
const employee = {
  name: 'Yannick',
  jobTitle: 'Manager',
  address: { city: 'San diego', street: 'Tundra', number: 5 },
};

// Object.keys(employee) seek from the Object (employee) keys and return the related result as an Array.
console.log(Object.keys(employee)); // Return only keys: name, jobTitle and address

// Object.entries(employee) seek from both the Object (employee) keys and values and return the related result as an Array of key-value pairs.
console.log(Object.entries(employee)); //Return 'name':'Yannick', 'jobTitle':'Manager' and 'address':{ city:'San diego', street:'Tundra', number:5, }

// 7. How do you check if an object has a certain property?
// This is handled by using the in operator or by using Object.hasOwn() method.
console.log('salary' in employee); // false because the property not exist in Object.
console.log('address' in employee); // true because the property exist in Object.
console.log(Object.hasOwn(employee, 'hobby')); // false because the property not exist in Object.
console.log(Object.hasOwn(employee, 'name')); // yes because the property exist in Object.

// 8. What will be the output and why?
const person = { name: 'John' };
const newPerson = person;
newPerson.name = 'Doe';
/*
    Doe, because the two Object (person and newPerson) are pointing to the same location or same reference 
    and they are same.
    console.log(person === newPerson); return true.
*/
console.log(person.name);

// 9. What’s the best way to deeply copy a nested object? Expalin with examples
/*
    This is handled with structuredClone() method which is not impact the behavior of 
    nested object related to the copy. this is the case of Object.assign() method 
    which linked the nested Object with its clone.
*/

const obj1 = {
  a: 1,
  b: {
    c: 3,
  },
};

const obj2 = Object.assign({}, obj1); // obj1 and obj2 have the same values even if not the same reference.
obj2.a = 12; // Does not impact obj1.a.
obj2.b.c = 50; // Then impact the nested object too, obj1.b.c = 50
console.log('obj1.a = ', obj1.a, 'obj1.b.c = ', obj1.b.c);
console.log('obj2.a = ', obj2.a, 'obj2.b.c = ', obj2.b.c);

const obj3 = {
  a: 2,
  b: {
    c: 10,
  },
};

const obj4 = structuredClone(obj3); // obj1 and obj2 have the same values even if not the same reference.
obj4.a = 7; // Does not impact obj3.a.
obj4.b.c = 100; // Does not impact the nested object obj3.b.c = 10
console.log('obj3.a = ', obj3.a, 'obj3.b.c = ', obj3.b.c);
console.log('obj4.a = ', obj4.a, 'obj4.b.c = ', obj4.b.c);

// 10. Loop and print values using Object destructuiring
const users = [
  {
    name: 'Alex',
    address: '15th Park Avenue',
    age: 43,
  },
  {
    name: 'Bob',
    address: 'Canada',
    age: 53,
  },
  {
    name: 'Carl',
    address: 'Bangalore',
    age: 26,
  },
];

for (let user of users) {
  const { name, address, age } = user;
  console.log(`${name} has address ${address}, and is ${age} years old.`);
}
