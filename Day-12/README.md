# js-practice

## **🎯 Goal of This Lesson**

- ✅ Welcome To Day 12
- ✅ What Will We Cover?
- ✅ JavaScript Objects
- ✅ Create Objects with Literal Syntax
- ✅ Accessing Object Properties
- ✅ Adding New Property to Object
- ✅ Keys With Special Characters
- ✅ Modifying Existing Property Value
- ✅ Deleting a Key From Object
- ✅ Accessing Dynamic Key Value
- ✅ Create Object With Dynamic Values
- ✅ Constructor Function To Create Objects
- ✅ Using Object Constructor
- ✅ Using Factory Function
- ✅ Object Shorthand
- ✅ Object Methods
- ✅ Nested Objects
- ✅ The “in” operator
- ✅ The for…in loop
- ✅ Object.keys() method
- ✅ Object References
- ✅ B.R.E.A.K
- ✅ Object.assign()
- ✅ Shallow Copy vs. Deep Copy
- ✅ Convert an Object to an Array
- ✅ Concert Map or Array to Object
- ✅ Immutability with freeze()
- ✅ Immutability with seal()
- ✅ The hasOwn() Method
- ✅ What is Object Destructuring?
- ✅ Create a New Variable
- ✅ Aliases
- ✅ Nested Object Destructuring
- ✅ Destructuring to Function Parameter
- ✅ Destructure a Function Return Value
- ✅ Destructuring in Loops
- ✅ Optional Chaining
- ✅ Are You Tired?

# Key Points of the video

## 1. Introduction to Objects

Objects plays a great role while structured data are needed likes Company data, Employe data, Custommer data, etc.
This can be made with `Object litterals Syntaxe`:

```js
let customer = {}; //Empty Object

// Non empty Object with keys values pairs.
let Compagny = {
  name: 'Coca-Cola',
  location: 'USA',
  employee: 5000,
};
```

## 2. Object Properties and Creational Patterns

> Properties are used to build Object structure using keys-values pairs, and this can be made throught differentes scenarios :

```js
// 1. Empty Object
let customer = {};

// 2. Non empty Object with keys values pairs.
let user = {
  name: 'Peter',
  age: 20,
  isCitizen: true,
  'is Student': false,
  temporaryStatus: 'Allowed',
};

console.log(user.name); // Peter
console.log(user.age); // 20
console.log(user.isCitizen); // true
console.log(user['is Student']); // false
console.log(user.temporaryStatus); // Allowed

// 3. Dynamically delete property.
delete user.temporaryStatus;

console.log(user);

// 4. Create Object Property from variables.
const newObjectKey = 'isAdmin';
user.newObjectKey = true;
console.log(user.newObjectKey); // true

// 5. Create Object Property from user input.
const programmingLanguage = prompt(
  'What is yous favorite programming language?'
);
const level = prompt('What is your programming level?');

let programmingLang = {
  [programmingLanguage]: level,
};

console.log(programmingLang);

// 6. Constructor Function : Allow to create Custom Object.
function Airplane(name, model) {
  this.name = name;
  this.model = model;
}

// Creation of an instance of Airplane using new keyword.
const airbusAirplane = new Airplane('Airbus', 'A380');
const boingAinplaine = new Airplane('Boing', '737');
console.log(airbusAirplane);
console.log(boingAinplaine);

// 7. Object creation with JavaScript Object type
const car = new Object();
car.name = 'BMW';
car.type = 'V6';
console.log(car);

// 8. Object creation with JavaSript Factory Function.
function createUser(name, age, compagny) {
  // Colons should be used only when the key is different from the value.
  return {
    name, // name: name
    age, // age: age
    compagny, // compagny: compagny
    greet() {
      console.log(`Hello ${this.name}.`);
    },
    bio: function () {
      console.log(`I am ${this.name}, and I work at ${this.compagny}.`);
    },
  };
}

const user1 = createUser('Bob', 45, 'Microsoft');
const user2 = createUser('Alice', 65, 'IBM');
console.log(user1);
console.log(user2);
user1.greet();
user2.greet();
user1.bio();
user2.bio();
```

## 3. Nested Object

> This uses Object inside others Objects with any needed deep level.

```js
let profile = {
  name: 'Alice',
  compagny: 'Amazone',
  address: {
    city: 'Kinhasa',
    pinCode: 1011,
    state: 'Kinshasa',
    country: 'DRC',
    greeting: function () {
      console.log(`Welcome to ${this.country}`);
    },
  },
};

console.log(profile.address.country);
profile.address.greeting();

console.log(profile?.salary); // Proper way the checked nested properties
console.log('salary' in profile);

// Loop through Object keys with for ... in loop.
for (let key in profile) {
  console.log(key); // Keys
  console.log(profile[key]); // Values
}

// Loop through Object keys using Javascript Object.
console.log(Object.keys(profile));

// Loop through Object values using Javascript Object.
console.log(Object.values(profile));
```

## 4. Object References

> Objects use the _`Heap`_ instead of the _`Stack`_, because they are not primitives type. That why, they can not have the same reference even if their values are exactly the same.

```js
let fruit1 = { name: 'mango', color: 'yellow-green' };
const fruit2 = { name: 'mango', color: 'yellow-green' };
console.log(fruit1 === fruit2); // false, because references are not the same even if match.
console.log(fruit1 == fruit2); // false, because references are not the same even if match to.

fruit1 = fruit2; // The two Objects pointe to the same reference, so they are same.

console.log(fruit1 === fruit2); // true, because two Objects are the same reference in the Heap.
```

## 5. Object Static Methods

### 5.1. Object.assign()

> Copies source Object (Properties values) to a target Object and return a new Object : Clone an Object.
> It copies source values to target Object but, copie `the references` for nested Object from source to target. For this scenario, the method `structuredClone()` should be used instead of `Object.assign()` method.

```js
const target = { p: 1, q: 2 };
const source = { a: 3, b: 5 };

const copiedObj = Object.assign(target, source);
console.log(copiedObj);

const obj = { name: 'Helen' };
const obj2 = Object.assign({}, obj);
console.log('obj2 = ', obj2);
console.log('obj === obj2 : ', obj === obj2); // Objects have same values but not same references.

const obj3 = { a: 1, b: { c: 2 } };
const obj4 = Object.assign({}, obj3);
console.log('obj4 = ', obj4); // { a: 1, b: { c: 2 } }

obj4.b.c = 3;
console.log('obj4.b.c = ', obj4.b.c); // 3

console.log('obj3.b.c = ', obj3.b.c); // Change from 2 to 3 becaue obj4.cb.c has changes too.
console.log('obj3 === obj4 : ', obj3 === obj4); // Same values, but not same references with impact in nested Object using Object.assign() method.
```

### 5.2. structuredCloned()

> This method is used to avoid the source Object to be copied to the target by reference for its nested Object.

```js
const obj3 = { a: 1, b: { c: 2 } };

const obj5 = structuredClone(obj3);

obj5.a = 30;
obj5.b.c = 100;

console.log('obj5.a = ', obj5.a); // 30
console.log('obj3.a = ', obj3.a); // 1

console.log('obj5.b.c = ', obj5.b.c); // 100
console.log('obj3.b.c = ', obj3.b.c); // 2

console.log('obj3 === obj5 : ', obj3 === obj5); // Same values, but not same references without impact in nested Object using structuredCloned() method.
```

### 5.3. Object.entries()

> This methot translate an `Object` to an `Array`. Useful method when getting data from an _`API`_ and then loop through them to populate the UI (As example).

```js
const myBook = {
  name: 'JavaScript, The Definitive Guide',
  edition: 2020,
};

const myArr = Object.entries(myBook);
console.log(myArr);
```

### 5.4. Object.fromEntries()

> Do the opposit of the method `Object.entries()`, that means translate an `Array` to an `Object`.

```js
const entries = new Map(['mango', 'apple'], ['allen', 20]);
const objFromMap = Object.fromEntries(entries);
console.log(objFromMap);
```

### 5.5. Object.freeze()

> This method freeze an Object to enforce _`Immutability`_ (A readonly Object). Deny any adding, deleting or modifying properties.

```js
const employee = {
  salary: 200,
};

Object.freeze(employee); // Employee becomes readonly Object.

employee.salary = 400;
employee.state = 'India'; // Not Allowed, but no error raised.
delete employee.state; // Not allowed, but no error raised.

console.log(employee); // 200
console.log(Object.isFrozen(employee)); // true
```

### 5.6. Object.seal()

> This method freeze an Object to enforce a partial _`Immutability`_ (A readonly Object), but allow modifications.

```js
const department = {
  name: 'Finance',
};

Object.seal(department); // Department becomes readonly Object.

department.location = 'Uvira'; // Not Allowed, but no error raised.
delete department.location; // Not allowed, but no error raised.

console.log(department); // Finance
department.name = 'IT'; // Allowed
console.log(department); // IT

console.log(Object.isSealed(department)); // true
```

### 5.7. Object.hasOwn()

> Return `true` once an Object has at least _`one or more properties`_ int its, and `false` otherwise.

```js
const book = {
  name: 'Mastering JavaScript',
  edition: 2021,
};

console.log(Object.hasOwn(book, 'edition')); // true, because the Object book has property edition
console.log(Object.hasOwn(book, 'pages')); // false, because the Object book has not property pages
```

## 7. Object Destructuring

> Help dealing with complexe data structure. When structure an Object and takes it out for a couple of raisons. We store data in Object to retreive them `on the need`.

```js
const student = {
  name: 'John Williamson',
  age: 9,
  std: 3,
  subjects: ['Maths', 'English', 'EVS'],
  parents: {
    father: 'Brown Williamson',
    mother: 'Sophia',
    email: 'john-parents@abcde.com',
  },
  address: {
    street: '65/2, brooklyn road',
    city: 'Carterton',
    country: 'New Zealand',
    zip: 5791,
  },
};

// 1. Creating variables with destructuring Object.
const { name, age, meal = 'Bread' } = student;
const city = student.address.city;
console.log('Name = ', name, ', Age = ', age, 'and City = ', city);

const { subjects, numberOfSubjects = subjects.length } = student;
console.log(numberOfSubjects); // 3

// 2. Using alias with destructuring.
const { std: standard } = student;
console.log(standard);

// 3. Dealing with nested Object using destructuring.
const {
  address: { zip },
} = student;
// const { zip } = address.zip;
console.log('zip = ', zip);

/* const {
  parents: { email },
} = student;
console.log('email = ', email); */

function sendEmail({ parents: { email } }) {
  console.log(`Sent email to ${email}`);
}

sendEmail(student);

// 4. Using function with destructuring.

const getStudent = () => {
  return {
    name: 'John Williamson',
    age: 9,
    std: 3,
    subjects: ['Maths', 'English', 'EVS'],
    parents: {
      father: 'Brown Williamson',
      mother: 'Sophia',
      email: 'john-parents@abcde.com',
    },
    address: {
      street: '65/2, brooklyn road',
      city: 'Carterton',
      country: 'New Zealand',
      zip: 5791,
    },
  };
};

/* const anotherStudent = getStudent();
const anotherName = anotherStudent.name;
const anotherSubjects = anotherStudent.subjects;

console.log(anotherName, anotherSubjects); */

// better way with destructuring
const { name: anotherName, subjects: anotherSubjests } = getStudent();
console.log(anotherName, anotherSubjests);

// 5. Destructuring within a loop
const students = [
  {
    name: 'William',
    grade: 'A',
  },
  {
    name: 'Tom',
    grade: 'A+',
  },
  {
    name: 'Bob',
    grade: 'B',
  },
];

for (let { name, grade } of students) {
  console.log(`${name} has grade ${grade}.`);
}
```

## 8. Optional Chaining

> Help avoinding raised error when property or nested property doesn't exist using _`?.`_ `operator`.

```js
let car = {
  name: 'BMW',
  wheel: {
    number: 4,
    type: 'Iron',
  },
};

console.log(car?.velocity?.number); // Return undefined if the property doesn't exist instead of raised an error
```

> In the other end, the _`??`_ `operator` can also be used as a conditional instruction with Objects.

```js
const user = { name: 'Alex', age: undefined };
const prop = user.age ?? 'Avoid returning undefined';
console.log(prop); // Print Avoid returning undefined because the property of user's Object is undefined.
```

## 9. Prototypes and Oriented Object Programming (OOP)

> Theses parts will be covered in the OOP concepts later.

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-12]](https://youtu.be/c5vEfYj5yZM 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: 'Alex', age: undefined };
console.log(user.age ?? 'Not provided'); // Not provided, because age is undefined.
```

## 2. What will happen if we try to modify a frozen object?

```js
// Nothing will be happen and any error will be raised.
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);
```

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: 'Tapas',
  company: {
    name: 'tapaScript',
    location: {
      city: 'Bangalore',
      zip: '94107',
    },
  },
};
```

```js
const {
  name: personName,
  company: {
    name: compName,
    location: { city },
  },
} = Person;

console.log(`Name = ${personName}, Compagny = ${compName} and City = ${city}`);
```

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

```js
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
```

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

```js
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
```

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

```js
const employee = {
  name: 'Yannick',
  jobTitle: 'Manager',
  address: { city: 'San diego', street: 'Tundra', number: 5 },
};

// Object.keys(employee) seek from the Object (employee) keys and return the related result as an Array.
console.log(Object.keys(employee)); // Return only keys: name, jobTitle and address

// Object.entries(employee) seek from both the Object (employee) keys and values and return the related result as an Array of key-value pairs.
console.log(Object.entries(employee)); //Return 'name':'Yannick', 'jobTitle':'Manager' and 'address':{ city:'San diego', street:'Tundra', number:5, }
```

## 7. How do you check if an object has a certain property?

```js
// This is handled by using the in operator or by using Object.hasOwn() method.
console.log('salary' in employee); // false because the property not exist in Object.
console.log('address' in employee); // true because the property exist in Object.
console.log(Object.hasOwn(employee, 'hobby')); // false because the property not exist in Object.
console.log(Object.hasOwn(employee, 'name')); // yes because the property exist in Object.
```

## 8. What will be the output and why?

```js
/*
    Doe, because the two Object (person and newPerson) are pointing to the same location or same reference 
    and they are same.
    console.log(person === newPerson); return true.
*/

const person = { name: 'John' };
const newPerson = person;
newPerson.name = 'Doe';
console.log(person.name);
```

## 9. What’s the best way to deeply copy a nested object? Expalin with examples

```js
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
```

## 10. Loop and print values using Object destructuiring

```js
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
```

```js
for (let user of users) {
  const { name, address, age } = user;
  console.log(`${name} has address ${address}, and is ${age} years old.`);
}
```

## Screenshots

![Image](https://github.com/user-attachments/assets/d57a2884-371d-4ebf-8e3e-bf5b067a510f)

![Image](https://github.com/user-attachments/assets/e746b4eb-76e0-4d14-9370-cc424dd83748)
