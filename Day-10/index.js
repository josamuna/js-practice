console.log('Day 10 Task of 40 days of JavaScript');
// ==>> Because of the behavior of Hosting, all outer() function have been renamed to match the correct output.
// 1. What will be the output of the following code and why?
let user = 'Alice';

function outer1() {
  function inner() {
    console.log(user);
  }
  let user = 'Bob';
  inner();
}

outer1();

// It will print Bob, because the near inner variable user overrides the outer variable user.

// 2. What is the mistake in the code below?
/* 
    The mistake is using a global variable inside a function to make calculations. 
    The final value depends on the change of the global variable instead of a local one, 
    making the result unpredictable.
*/
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5); // 0 + 5 = 5
add(10); // total already egal to 5 => 5 + 10 = 15, but the program expect to have 0 + 10 = 10.
console.log(total); // Print 15

// 3. Create a function with a nested function and log a variable from the parent function.
function outerFunc() {
  let outVar = 100;
  function innerFunc() {
    console.log('Print function from the parent function', outVar);
  }
  innerFunc();
}

outerFunc();

// 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
function functionLoop() {
  for (var i = 0; i < 10; i++) {}
  for (let j = 0; j < 10; j++) {}
  console.log('Print var variable outside the loop', i); // Variable i is accessible from the outside of the loop
  // console.log('Unable to print let variable outside the loop', j); // Variable j is inaccessible from the outside of the loop, ReferenceError will be raised.
}

functionLoop();

// 5. Write a function that tries to access a variable declared inside another function.
function f1() {
  var varOut = 20;
  let letOut = 30;
  const constOut = 10;
  const result = varOut + letOut + constOut;
}

function f2() {
  // console.log('var, let and const variables are not visible outside the function f1() variable ', varOut, letOut, constOut);
  /*
    those three variables are not visibles outside the function f1() 
  Why? => let and const are function scope, and var is block scope; that means they are not visible outside the f1() function.
  */
}

f2();

// 6. What will be the output and why?
/*
  The output will raise ReferenceError because of the TDZ, variable a is used without
  declaring it. The behavior will be different with a var declaration because it will be hoisted with the undefined value.
*/
// console.log(a);
// let a = 10;

// 7. Where is the `age` variable accessible?
function showAge() {
  let age = 25;
  console.log(age);
}

// console.log(age);
/*
  A: In Global
  B: Only inside showAge
  C: It will cause an error
  D: None of the above

  age variable is used outside the function showAge(), 
  it will be looking from the global scope, and because it is not visible,
  it will raise ReferenceError.
  Option A.
*/

// 8. What will be the output and explain the output?
let message = 'Hello';

function outer2() {
  let message = 'Hi';

  function inner() {
    console.log(message);
  }

  inner();
}

outer2();
/* 
  Output is Hi, because it will be looking from the near block, 
  which is outer, and not from the global scope.
*/

// 9. What will be the output and why?
/* 
  The output is Inner, because  the only near variable from the inner function has the same value, and let is block scope.
*/
let x = 'Global';

function outer3() {
  let x = 'Outer';

  function inner() {
    let x = 'Inner';
    console.log(x);
  }

  inner();
}

outer3();

// 10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--; // count = 0, then the next time 0 - 1 = -1
    console.log(count);
  };
}

const reduce = counter(); // The first time return 0, but the function was not called yet.
reduce(); // second time -1
reduce(); // Third time -2
