console.log('Day 5 Task');

/*
1. Triangle pattern.

*
* *
* * *
* * * *
* * * * *

*/

const ligne = 5;
let strPattern = '';
for (let i = 0; i <= ligne; i++) {
  for (let j = 0; j < i; j++) {
    strPattern += '* ';
  }
  strPattern += '\n';
}
console.log(strPattern);

// 2. Multiplication Table.
const N = 3;
let maxRange = 10;

for (let i = 1; i <= maxRange; i++) {
  console.log(N + ' x ' + i + ' = ', N * i, '\n');
}

// 3. The summation of all odd numbers between 1 to 500.
maxRange = 500;
let sumValues = 0;
for (let i = 1; i <= maxRange; i++) {
  if (i % 2 !== 0) {
    // Odd Number found
    sumValues += i;
  }
}

console.log('The summation of all numbers between 1 to 500 is : ', sumValues);

// 4. Skipping Multiples of 3.
maxRange = 20;
for (let i = 1; i <= maxRange; i++) {
  if (i % 3 === 0) {
    // Multiple of 3 found and skip this itration.
    continue;
  } else {
    console.log('Not multiple of 3 : ', i);
  }
}

// 5. Reverse Digits of a Number.
const inputValue = 6789;
let newImput = '';
let counter = inputValue.toString().length;
while (counter >= 0) {
  newImput += inputValue.toString().charAt(counter); // Concat value.
  counter--;
}
console.log('Input ' + inputValue + ' becomes ' + newImput);

/*
  Proper way to handle this problem without using reversed method or string comversion.
  Three step could be used in a loop (while loop):

  Step 1 : The remainder of a number with 10, give the last digit. eg. 197 % 10 = 7.
  Step 2 : Use another variable to hold the reversed version by getting each last digit : 
  Multiply the variable by 10 and, add the last digit from previous step.
  Step 3 : Remove the last digit from the original number by applying Math.floor() after divided the number by 10. eg. Math.floor(197 * 10) = Math.floor(19.7) = 19. 7 is shifted.
*/

let number = 6789;
let reversedNumber = 0; // To hold the final reversed value.

console.log('Input  : ', number);

while (number > 0) {
  let eachLastDigit = number % 10; // Step 1.
  reversedNumber = reversedNumber * 10 + eachLastDigit; // Step 2.
  number = Math.floor(number / 10); // Step 3.
}

console.log('Output : ', reversedNumber);

// 6. The difefrences between for, while, and do-while loop.

/* 
    - for loop is initialized inside the loop itself and it is used for a fixed size of iterations. eg. 2, 10, 20, etc.
    - while loop initialize the loop outside the loop itself and it is used for an unknown number of iterations,
    that means one or n loop iterations, where n is not predicted in advanced.
    - do-while loop insures that the loop will be executed at least once and it evaluates the condition
    at the end of loop instructions block. 
*/
