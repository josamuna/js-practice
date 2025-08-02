# js-practice

## **🎯 Goal of This Lesson**

- ✅ Day 11
- ✅ What is Closure in JavaScript?
- ✅ Understanding Closure With Lexical Scope
- ✅ Closure Memorizing Outer Values
- ✅ Closure Real World Use Case
- ✅ Function Factory With Closure
- ✅ Closure & Memory Leak
- ✅ Advantages of Closure
- ✅ Closure & Event Handlers

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-11]](https://youtu.be/lA7CGz3iHyI 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?

```js
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
```

## 2. What will be the output and why?

```js
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
console.log(testClosure()());
```

## 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.

```js
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
```

## 4. Write a function `createMultiplier(multiplier)` that returns another function to multiply numbers.

```js
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
```

## 5. What happens if a closure references an object?

- 1. The object is garbage collected immediately
- 2. The object remains in memory as long as the closure exists
- 3. The object is automatically cloned
- 4. None of the Above.

```js
/*
  Assertion 2, the object will be remains in memory, because the closure will keeps it.
*/
```

## 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.

```js
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
```

## Screenshot

![Image](https://github.com/user-attachments/assets/822c9ad1-0413-419d-90fa-4b3116da5f6f)

![Image](https://github.com/user-attachments/assets/96c9210c-1b9b-46a8-89d0-98676a50ea80)
