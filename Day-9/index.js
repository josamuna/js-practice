console.log('Day 9 Task');

/*
    1. Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

    The Temporal Dead Zone (TDZ) is a block of code where variables can not be accessed until they are initialized.
    In this block, any access to a variable rise a ReferenceError.
*/

// {
//   console.log('Some code over here and started TDZ!');
//   console.log('More code over here in the TDZ');
//   console.log('Print a first value', firstNumber);
//   let firstNumber = 100; // End of TDZ because variable firstNumber has been initialized
//   console.log('New TDZ block start over here!');
//   console.log('More code over here in the second new TDZ');
//   console.log('Print a second value', secondNumber);
//   let secondNumber = 200; // End of new TDZ because variable secondNumber has been initialized
//   console.log('New TDZ block start over here!');
//   console.log('More code over here in the third new TDZ');
//   console.log('Print a third value', thirdNumber);
//   let thirdNumber = 200; // End of new TDZ because variable secondNumber has been initialized
// }

/* 
    2. Explain Variable and Function Hoisting with Example. Post the code as your answer.
    Hoisting is a way where variables or function are accessibles before their declarationm because 
    of JavaScript Context Execution which allows this kind of scenario.
*/

console.log('Variable Hoisting in action : ', varHoisting); // This line will not rise error.
console.log('The variable was used before his declaration.');
var varHoisting = 'I am using Hoisting variable'; // Declaration with let or const will rise a ReferenceError.

sayHello();
console.log(
  'Using function Hoisting function by calling function before his declaration'
);

function sayHello() {
  console.log('Hello! Nice Day-9-Task');
}
