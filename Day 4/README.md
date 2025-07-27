# js-practice

## **🎯 Goal of This Lesson**

- What is Control Flow and Branching
- Understanding if-else all possible scenarios
- Undersatanding switch-case all possible scenarios
- Comparioson study between if-else and switch-case
- Test and Assignments

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-04]](https://youtu.be/Fn_DhBu3VyU 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of this code snippet and why?

```js
// This code will print It's a normal day. because JavaScript is case sensitive
// and Monday is different than mondy
let day = 'Monday';

switch (day) {
  case 'monday':
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
```

## 2. Build an ATM Cash Withdrawal System

Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

```js
let amount = 50;
const multipleOf = 100;
// amount is a multiple of 100
if (amount % multipleOf === 0) {
  console.log('Withdrawal successful of ', amount);
} else {
  console.log('Invalid amount of ', amount);
}
```

## 3. Build a Calculator with switch-case

Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.

```js
let firstNumber = 120,
  secondNumber = 35;
let operator = '%';

switch (operator) {
  case '+':
    console.log(
      firstNumber + ' + ' + secondNumber + ' = ',
      firstNumber + secondNumber
    );
    break;
  case '-':
    console.log(
      firstNumber + ' - ' + secondNumber + ' = ',
      firstNumber - secondNumber
    );
    break;
  case '*':
    console.log(
      firstNumber + ' * ' + secondNumber + ' = ',
      firstNumber * secondNumber
    );
    break;
  case '%':
    console.log(
      firstNumber + ' % ' + secondNumber + ' = ',
      firstNumber % secondNumber
    );
    break;
  case '/':
    console.log(
      firstNumber + ' / ' + secondNumber + ' = ',
      firstNumber / secondNumber
    );
    break;
}
```

## 4. Pay for your movie ticket

Imagine, the INOX charges ticket prices based on age:

- Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8

Write a program that prints the ticket price based on the person’s age.

```js
const age = 65;
if (age < 18) {
  // Children
  console.log('You have to pay $3.');
} else if (age >= 18 && age <= 60) {
  // Adults
  console.log('You have to pay $10.');
} else if (age > 60) {
  // Senior
  console.log('You have to pay $8.');
}
```

## 5. Horoscope Sign Checker

Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.

```js
const monthOfBirth = 'February';
switch (monthOfBirth) {
  case 'January':
    console.log('Your Horoscope Sign is Aquarius.');
    break;
  case 'February':
    console.log('Your Horoscope Sign is Pisces.');
    break;
  case 'March':
    console.log('Your Horoscope Sign is Aries.');
    break;
  case 'April':
    console.log('Your Horoscope Sign is Taurus.');
    break;
  case 'May':
    console.log('Your Horoscope Sign is Gemini.');
    break;
  case 'June':
    console.log('Your Horoscope Sign is Cancer.');
    break;
  case 'July':
    console.log('Your Horoscope Sign is Leo.');
    break;
  case 'August':
    console.log('Your Horoscope Sign is Virgo.');
    break;
  case 'Semptember':
    console.log('Your Horoscope Sign is Libra.');
    break;
  case 'October':
    console.log('Your Horoscope Sign is Scorpio.');
    break;
  case 'November':
    console.log('Your Horoscope Sign is Sagittarius.');
    break;
  case 'December':
    console.log('Your Horoscope Sign is Capricorn.');
    break;
  default:
    console.log('Please type a valid month, January to December.');

    break;
}
```

## 6. Which Triangle?

A triangle has 3 sides. A Triangle type is determined by its sides:

- All sides equal is called, `Equilateral Triangle`.
- Two sides equal is called, `Isosceles Triangle`.
- All sides different is called, `Scalene Triangle`.

Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.

```js
const a = 30,
  b = 30,
  c = 30;
// const a = 10, b = 20, c = 30; // Scalene
// const a = 30, b = 10, c = 20; // Scalene
// const a = 20, b = 30, c = 10; // Scalene
// const a = 10, b = 10, c = 20; // Isosceles
// const a = 30, b = 10, c = 10; // Isosceles
// const a = 20, b = 10, c = 20; // Isosceles
// const a = 30, b = 30, c = 30; // Equilateral
if (a === b && a === c) {
  console.log('Equilateral Triangle');
} else if (a === b || b === c || c === a) {
  console.log('Isosceles Triangle');
} else {
  console.log('Scalene Triangle');
}
```

### Screenshot

![Image](https://github.com/user-attachments/assets/7bb59039-a795-4e8f-b26b-260a00b7b5d4)
