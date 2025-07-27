'use strict';
/*
  1. Create a table of two columns, `situation` and `value`. 
  Now add the rows for every situations and the value of `this` in that situation. 
  Please cover the following situations
*/
// At the Global - window
console.log('The current value of this is :', this);

// Inside an Object Method
const customer = {
  firstName: 'Evan',
  lastName: 'Hilton',
  age: 21,
  customerInfo: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
  },
};

customer.customerInfo();

// Inside the Standalone non-Arrow Function - window (in non strict mode) or undefined (in strict mode)
function sayHello() {
  console.log('Hello, I am printing the this value: ', this);
}

sayHello();

// Inside an Arrow Function(standalone) - Refer to the parent of the Arrow Function
const returnThis = () => this;
console.log(
  `The current value of this in standalone arrow function is`,
  returnThis()
); // window

// Inside an Arrow Function(as object method) - Refer to the parent of the Arrow Function
const userSite = {
  username: 'Tapas',
  website: 'www.tapascript.io',
  printUser: () => {
    console.log(`${this.username} and my website is ${this.website}`); // undefined, the parent is Global Scope.
  },
};

userSite.printUser();

// Inside an object created with the Constructor Function - Refer to the Object inside which it is created.
function Student(rolNumber, department) {
  this.rolNumber = rolNumber;
  this.department = department;
  this.printStudent = function () {
    console.log(
      `The sudent has rollNumber of ${this.rolNumber} and, studying in ${this.department} department.`
    );
  };
}

const student = new Student('ST20876', 'Computer Science');
student.printStudent();

// 2. What is the problem here? Fix it to log the correct name and explain the fix
/*
  The arrow function is used inside an object as a method but, as it behave by looking for the this in the parent scope 
  (The Global Scope in this case), this results to an undefined value.
  To fix the issue, we have to level down the arrow function scope once by returning an arrowfunction and,
  finally, we have to call greet() function as a closure by passing its return's value to another.
*/
const user1 = {
  name: 'tapaScript',
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

const resultUser = user1.greet();
resultUser();

// 3. Can you explain what is the problem here and fix the issue to log the correct name?
/*
  greet is a method and doesn't return a function. To fix the problem, just call obj.greet()
  with parenthesis as a function.
*/
const obj = {
  name: 'Tom',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

obj.greet();

// 4. What is the problem with the following code? Why isn't it logging the name correctly?
/*
  The inner function has the value undefined in strict mode (It's look at the parent scope, inside greet function) and, 
  raised an error but, and empty string in non-strict mode.
  The solution is to down once the sope of inner function by returning arrow function.
 */
const user = {
  name: 'Alex',
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`); // undefined
    };
    // inner();
  },
};

const userFunction = user.greet();
userFunction();

/* 
  5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and 
  assigns them using `this` keyword. Then, create two sports instances and log their details
*/
const Sports = function (name, players) {
  this.name = name;
  this.players = players;

  this.details = function () {
    console.log(`${this.name} and ${this.players}`);
  };
};

const sportGame1 = new Sports('Ada', 10);
sportGame1.details();

const sportGame2 = new Sports('Hassan', 5);
sportGame2.details();

// 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of
const car1 = {
  brand: 'Audi',
  model: 'A8',
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: 'BMW',
  model: 'X1',
};

// Bind car2 Object the call method
car1.describe.call(car2);
car2.describe;

// Bind car2 Object the apply method
car1.describe.apply(car2);
car2.describe;

// Bind car2 Object the bind method
const bindCar2 = car1.describe.bind(car2);
bindCar2();

// 7. What will be the output of the following code and why?
/*
C is the result because sayHello is a method of person Object but sayHelloArrow has window as 
the parent (block of code outside person) which result as undefined and becomes empty string.

  Options are:

  A: "Charlie" and "Charlie"
  B: "Charlie" and undefined
  C: "Charlie" and "" (empty string)
  D: undefined and "Charlie"
*/

const person = {
  name: 'Charlie',
  sayHello: function () {
    console.log(this.name); // Charlie
  },
  sayHelloArrow: () => {
    console.log(this.name); // undefined which result as emty string.
  },
};

person.sayHello();
person.sayHelloArrow();
