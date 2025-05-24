console.log('Day 4 Task.');

// 1. Switch - Case
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

// 2. ATM Cash Withdrawal System
let amount = 50;
const multipleOf = 100;
// amount is a multiple of 100
if (amount % multipleOf === 0) {
  console.log('Withdrawal successful of ', amount);
} else {
  console.log('Invalid amount of ', amount);
}

// 3. Calculator with switch-case
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

// 4. Pay for your movie ticket
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

// 5. Horoscope Sign Checker
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

// 6. Which Triangle?
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
