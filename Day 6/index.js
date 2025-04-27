console.log('Day 6 Task');

// 1. Convert Celsius to Fahrenheit. (Celsius * 9/5) + 32 = Fahrenheit,
const celsiusTemp = 25.9;
function celsiusToFahrenheit(celsius = 0) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusTemp + '°C == ', celsiusToFahrenheit(celsiusTemp) + ' °F');

// 2. The Maximum of Two Numbers.
function findMax(num1, num2) {
  return num1 > num2
    ? 'Between ' +
        num1 +
        ' and ' +
        num2 +
        ', ' +
        num1 +
        ' is the maximun number.'
    : 'Between ' +
        num1 +
        ' and ' +
        num2 +
        ', ' +
        num2 +
        ' is the maximun number.';
}

console.log(findMax(4, -1));
console.log(findMax(-10, -3));
console.log(findMax(80, 100));

// 3. Check if a String is a Palindrome.
function isPalindrome(str = '') {
  let newStr = '';
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if (str.charAt(i) === str.charAt(j)) {
      newStr += str.charAt(i);
    }
  }
  if (str == newStr) {
    return true;
  }
  return false;
}
let word = 'noon';
isPalindrome(word)
  ? console.log(word + ' is a Palindrome.')
  : console.log(word + ' is not a Palindrome.');
word = 'king';
isPalindrome(word)
  ? console.log(word + ' is a Palindrome.')
  : console.log(word + ' is not a Palindrome.');

// 4. Factorial of a Number.
function factorial(n = 0) {
  let factorial = 1;
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return;
  }
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

let number = 5;
console.log(number, '! = ', factorial(number));
number = -1;
console.log(number, '! = ', factorial(number) ?? 'Does not exist.');
number = 0;
console.log(number, '! = ', factorial(number));

// 5. Count Vowels in a String
word = 'Vowels'; // 2 vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str = '') {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str.charAt(i) === vowels[j]) {
        counter++;
        break;
      }
    }
  }
  return counter;
}

console.log('The word "' + word + '" has ', countVowels(word), ' Vowels.');
word = 'The king of the city has borned'; // 8 vowels
console.log('The word "' + word + '" has ', countVowels(word), ' Vowels.');

// 6. Function to Capitalize the First Letter of Each Word in a Sentence.
function capitalizeWords(sentence = '') {
  let newSentence = '';
  // Capitalize the first letter and then add it to the new string sentence
  const firstLetter = sentence.charAt(0).toUpperCase();
  newSentence += firstLetter;
  let iterationToSkip = 0;
  for (let i = 0; i < sentence.length; i++) {
    // a space is found and the next character exist (Not end of sentence),
    // then add the next char after it is uppercased.
    if (sentence.charAt(i) === ' ' && sentence.charAt(i + 1)) {
      newSentence += sentence.charAt(i); // Add the space first.
      newSentence += sentence.charAt(i + 1).toUpperCase(); // Add the next char after it is uppercased.
      iterationToSkip = i + 1;
    } else {
      // Skip the uppercased letter
      if (i === iterationToSkip) {
        continue;
      } else {
        // Add the rest of sentence characters.
        newSentence += sentence.charAt(i);
      }
    }
  }
  return newSentence;
}

word = 'the king of the city has borned.';
console.log(
  'From the string "' + word + '" the new one is :',
  capitalizeWords(word)
);

word = 'once the job is done, then told me what is going one.';
console.log(
  'From the string "' + word + '" the new one is :',
  capitalizeWords(word)
);

// 7. IIFE (Immediately Invoked Function Expression) to Print “Hello, JavaScript!”
(function printMessage(message = '') {
  console.log('Hello, ' + message);
})('JavaScript');

// 8. Create a Simple Callback Function
function greet(name, callback) {
  callback(name);
}
const nameUser = 'Josue';
greet(nameUser, (name) => {
  console.log('Hello, ' + name);
});

// 9. Callstack execution diagram
function f1() {}
function f2() {
  f1();
}
f2();

/*
f2() is called first, then f1() is called, that means f1() will go out the callstack first, 
f2(). This follow the LIFO (Last In First Out) model.

OUT ^             | IN
    |  ---------  |
    |     f1      |
    |  ---------  |
    |     f2      |
    |  ---------  v
*/

// 10. Callstack execution diagram
function f1() {}
function f2() {}
function f3() {
  f1();
}
f2();
f3();
f1();

/*
f2() is called first, then f3() is called, which called f1() and finally f1() is called again,
 that means f1() will go out the callstack twice first, then f3() will go out, an finally f2() 
will also go out the call stack.

OUT ^             | IN
    |  ---------  |
    |     f1      |
    |  ---------  |
    |     f1      |
    |  ---------  |
    |     f3      |
    |  ---------  |
    |     f2      |
    |  ---------  v
*/
