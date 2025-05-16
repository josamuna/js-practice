console.log('Day 11 Task of 40 days of JavaScript');

// 1. What will be the output of the following code and why?
/*
    The output of this code will be 1 and then 2 because the inner function keeps the count value
    even if the outer function execution is over; this is the behavior of a closure.
*/
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer(); // 0
counter(); // 1
counter(); // 2

// 2. What will be the output and why?
/*
    The this code, the closure is used like a IIFE (Immediately Invoked Function Expression), which implies the
    direct execution of the inner function and returns the result of 100 after the call of outer function testclosure().
*/

function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); // 100

// 3. Create a button dynamically and attach a click event handler using a closure.
// The handler should count and log how many times the button was clicked.

function buttonCountDynamically() {
  let count = 0;
  document.getElementById('btn').addEventListener('click', () => {
    // Incremente the counter value by one
    count++;
    console.log(`Button clicked ${count} times!`);
  });
}

buttonCountDynamically();

// 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.
function createMultiplier(multiplier) {
  let currentValue = multiplier;
  return function mult(value) {
    currentValue = currentValue * value;
    console.log(`The current value is ${currentValue}.`);
  };
}

const multiply = createMultiplier(10); // 10 * 10 = 10
multiply(10); // 10 * 10 = 100
multiply(2); // 2 * 100 = 200
multiply(5); // 5 * 200 = 1000
multiply(12); // 12 * 1000 = 12000

/*
  5. What happens if a closure references an object?

  - 1. The object is garbage collected immediately
  - 2. The object remains in memory as long as the closure exists
  - 3. The object is automatically cloned
  - 4. None of the Above.

  Assertion 2, the object will be remains in memory, because the closure will keeps it.
*/

// 6. Write a function factory of counter to increment, decrement, and reset a counter.
// Use closure to refer the count value across the functions.

function managedCounter() {
  let count = 0;
  return {
    increment: () => {
      count++;
      console.log(`The current count value is decremented to ${count}.`);
    },
    decrement: () => {
      count--;
      console.log(`The current count value is decremented to ${count}.`);
    },
    reset: () => {
      count = 0;
      console.log(`The current count value is reseted to ${count}.`);
    },
  };
}

const counterValue = managedCounter(); // 0
counterValue.increment(); // 1
counterValue.increment(); // 2
counterValue.increment(); // 3
counterValue.increment(); // 4
counterValue.decrement(); // 3
counterValue.decrement(); // 2
counterValue.reset(); // 0
counterValue.increment(); // 1
