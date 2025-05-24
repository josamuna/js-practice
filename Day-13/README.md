# js-practice

## **🎯 Goal of This Lesson**

- ✅ Welcome to Day 13
- ✅ What is “this”?
- ✅ this in Global
- ✅ Implicit Binding
- ✅ this Inside an Arrow Function
- ✅ Explicit Binding
- ✅ The call() method
- ✅ The apply() method
- ✅ The bind() method
- ✅ The new Keyword and this Keyword
- ✅ A Quick Recap
- ✅ Interview Questions and Answers
- ✅ Task and What’s Next?

# Key Points of the video

The `this` keyword behave differently where exactly it is used and not where it is placed.

## 1. Global Ececution Context (GEC)

> In this case, it is behave as the _`window`_ Object.

```js
console.log(
  'In the Global Execution Context this = window',
  this,
  this === window
); // window, true
```

## 2. Inside an Object or a Method (Binding)

> In this scenario the _`this`_ keyword return the Object its self. When we invoke an method from an Object, the _`this`_ keyword refer to the Object in which this method (Function inside an Object) is invoked.
> **Implicit binding** refer to the scenario where we invoked a method of an Object using the `dot notation` and, the _`this`_ keywork is bound to the Object on which we have invoked the method. The context of **this** will be bound on the Objet its self.

```js
const employee = {
  name: 'Alex',
  jobTitle: 'HR',
  salary: 300,

  returnThis: function () {
    return this;
  },
  getFullName: function () {
    return `${this.name}, ${this.jobTitle}, ${this.salary}`;
  },
};

console.log(employee.returnThis()); // Return the employee Object.
console.log(employee.getFullName());
```

> Using implicit binding by passing an Object as an argument.

```js
const tom = {
  name: 'Tom',
  age: 7,
};
const jerry = {
  name: 'Jerry',
  age: 3,
};

function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old.`);
  };
  console.log(obj);
}

greetMe(tom);
tom.logMessage(); // Tom is 7 years old.

greetMe(jerry);
jerry.logMessage(); // Jerry is 3 years old.
```

## 3. Inside an Function

### 3.1. Standalone Function

> When a function is not linked with an Object, the _`this`_ keywork return the `window Object` (The parent scope of the function) or `undefined` in the **strict mode** (Which is a mode on which JavaScript follows a certain philosophy that makes the code more **strict** and, avoid mistake: this is made by adding at the to of JavaScript file the instruction _`'use strict'`_'.).

```js
function sayName() {
  console.log('This is inside a function', this);
}

sayName(); // Print the window Object
```

### 3.2. Nested Function

> The behavior will be the same as using standalone function.

```js
function outer(a) {
  console.log('This is inside an outer function ', this);

  return function inner(b) {
    console.log('This is inside an inner function', this);
  };
}

const outerResult = outer(5); // window
outerResult(3); // window
```

### 3.3. Inside Arrow Function

> In Arrow function, the _`this`_ keyword is bound to the **parent scope** in which its defined. When it is defined in the Global Scope, the parent becomes the `window Object`.

```js
'use strict';
const getFood = () => this;
console.log(
  'this inside the Arrow function defined in global scope',
  getFood()
); // window  because defined in Global Scope
```

> When Arrow function is inside an Object, the _`this`_ keywork is resolved as **undefined**, but to resolve it in a proper way, is needed to wrap it inside **a method** has showened in the below code.

```js
const food = {
  name: 'mango',
  color: 'yellow',

  // getDesc: () => `${this.name} is ${this.color}`, // Resolved as undefined when getDesc() is called.

  // getDesc() is defined inside a block which has the parent as the Global Scope where name and color are not defined.

  getDesc: function () {
    return `${this.name} is ${this.color}`;
  },
};

console.log(food.getDesc());
```

> Another fix using arrow function is by using `the scope` or making the inside block of arrow function _`One level down`_ as shown in the code below.

```js
'use strict';
const food = {
  name: 'mango',
  color: 'yellow',

  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  },
};

const descFunc = food.getDesc();
console.log(descFunc());
```

## 4. Explicit binding

> **Implicit binding** is a way to `attach` a standalone function to an Object and manage how the _`this`_ keyword should behaves. This is archieved with the help of three methods: _`call`_,_`apply`_ and _`bind`_.

### 4.1. call

> Bind a specific function to the context of a desired Object to be used as its `method`.

```js
function greeting() {
  console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const user = {
  name: 'Natasha',
  address: '10 Merlon, Santiago',
};

greeting.call(user); // Passing thr Object to bind.
```

> The `call` function can also be used to pass argument to the function we need to bind to the object.

```js
'use strict';

const likes = function (hobby1, hobby2, hobby3) {
  console.log(`${this.name} likes ${hobby1}, ${hobby2} and ${hobby3}`);
};

const person = {
  name: 'Habbas',
};

likes.call(person, 'Teaching', 'Blogging', 'Playing soccer.');
```

### 4.2. apply

> The `apply` function is used the same as `bind`, but with a list of arguments passed as an array instead of singles values.

```js
'use strict';

const likes = function (hobby1, hobby2, hobby3) {
  console.log(`${this.name} likes ${hobby1}, ${hobby2} and ${hobby3}`);
};

const person = {
  name: 'Habbas',
};

const hobbiesToApply = ['Sleeping', 'Eating', 'Playing'];

likes.apply(person, hobbiesToApply);
```

### 4.3. bind

> `bind` work the same as `call` and `apply`, but instead of returning a value, **it is return a function** to be executed to get the final result. Also, `bind` doesn't accept arguments as an array like `apply` does.

```js
'use strict';

const newHobbies = function (hobby1, hobby2, hobby3) {
  console.log(`${this.name} likes ${hobby1}, ${hobby2} and ${hobby3}`);
};

const officer = {
  name: 'Bob',
};

const newFunction = newHobbies.bind(officer, 'Sleeping', 'Eating', 'Playing');
newFunction();
```

## 5. Constructor Function

> The `Constructor Function` use the `new` keyword to create new Object.

```js
'use strict';
const Cartoon = function (name, animal) {
  this.name = name;
  this.animal = animal;
  this.log = function () {
    console.log(this.name + ' is a ' + this.animal);
  };
};
const tomCartoon = new Cartoon('Tom', 'Cat');
const jerrCartoon = new Cartoon('Jerry', 'Mouse');

tomCartoon.log();
jerrCartoon.log();
```

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-13]](https://youtu.be/c5vEfYj5yZM 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a table of two columns, `situation` and `value`. Now add the rows for every situations and the value of `this` in that situation. Please cover the following situations

- At the Global
- Inside an Object Method
- Inside the Standalone non-Arrow Function
- Inside an Arrow Function(standalone)
- Inside an Arrow Function(as object method)
- Inside an object created with the Constructor Function

Please add examples for each of the scenarios.

## 2. What is the problem here? Fix it to log the correct name and explain the fix

```js
const user = {
  name: 'tapaScript',
  greet: () => {
    console.log(`Hello, ${this.name}!`);
  },
};

user.greet();
```

## 3. Can you explain what is the problem here and fix the issue to log the correct name?

```js
const obj = {
  name: 'Tom',
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn();
```

## 4. What is the problem with the following code? Why isn't it logging the name correctly?

```js
const user = {
  name: 'Alex',
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user.greet();
```

## 5. Create a `Sports` constructor function that takes `name` and `number of players` as arguments and assigns them using `this` keyword. Then, create two sports instances and log their details

## 6. Can you attach the car1's `describe()` method to car2 object? Give all possible solutions that you can think of

```js
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
```

## 7. What will be the output of the following code and why?

```js
const person = {
  name: 'Charlie',
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

person.sayHello();
person.sayHelloArrow();
```

Options are:

- A: "Charlie" and "Charlie"
- B: "Charlie" and undefined
- C: "Charlie" and "" (empty string)
- D: undefined and "Charlie"

## Screenshots

![Image](https://github.com/user-attachments/assets/7e4e37d8-1e9c-4233-9fde-0691d54d6984)

![Image](https://github.com/user-attachments/assets/8d3a6a86-6e63-4a19-ae50-7ef4c7aaefd6)
