# js-practice

## **🎯 Goal of This Lesson**

- ✅ Intro
- ✅ Misconception About Hoisting
- ✅ Variable Hoisting
- ✅ Hoisting and let and const
- ✅ Temporal Dead Zone(TDZ)
- ✅ Functional Hoisting
- ✅ Hoisting and Function As an Expression
- ✅ Task and What’s Next?

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-09]](https://youtu.be/OqMxh1QdYEg 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Explain Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

```js
/*
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
```

![Image](https://github.com/user-attachments/assets/c1deaa7c-9abf-4c5b-a875-1e54bacf3bff)

## 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.

```js
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
```

![Image](https://github.com/user-attachments/assets/e268b511-aa90-4929-81ec-b91e1c96bc57)
