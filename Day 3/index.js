// 1. Even and Odd number

let numberOddEven = 12;
console.log(numberOddEven % 2 === 0 ? 'Even number.' : 'Odd number.'); // Even
numberOddEven = 15;
console.log(numberOddEven % 2 === 0 ? 'Even number.' : 'Odd number.'); // Odd

// 2. Getting driving licence

let age = 18;
console.log(
  age >= 18
    ? 'You are eligible to get a driving license.'
    : 'Sorry! You cannot get a driving license.'
); // Eligible

age = 14;
console.log(
  age >= 18
    ? 'You are eligible to get a driving license.'
    : 'Sorry! You cannot get a driving license.'
); // Not eligible

// 3. CTC Calculation
const salary = 12300;
const bonus = salary * 0.2;
const CTC = salary * 12 + bonus;
console.log('You get annualy amount (CTC) of ', CTC, 'USD');

// 4. Traffic Light Simulation
let color = 'Green';
console.log(
  color === 'Green'
    ? 'GO'
    : color === 'Red'
    ? 'STOP'
    : color === 'Yellow'
    ? 'WAIT'
    : 'WAIT'
);

color = 'Red';
console.log(
  color === 'Green'
    ? 'GO'
    : color === 'Red'
    ? 'STOP'
    : color === 'Yellow'
    ? 'WAIT'
    : 'WAIT'
);

color = 'Yellow';
console.log(
  color === 'Green'
    ? 'GO'
    : color === 'Red'
    ? 'STOP'
    : color === 'Yellow'
    ? 'WAIT'
    : 'WAIT'
);

// 5. Electricity Bill Calculator
const units = 10; // Electricity Unit consume per day
const unitaryPrice = 150;
const discountPercentage = 0.2;
const monthlyPaiement = unitaryPrice * units * 30;
const annualDiscount = monthlyPaiement * 12 * discountPercentage; // 20 Percent
const annualyPaiement = monthlyPaiement * 12 - annualDiscount;

console.log(
  'Your monthly bill is ',
  monthlyPaiement,
  ' And annually bill is ',
  annualyPaiement
);

// 6. Leap Year Checker
// Leap year when the remainder of year with 100 and 400 is 0.
let year = 2000;
const value1 = 100;
const value2 = 400;
console.log(
  year % value1 === 0 && year % value2 === 0
    ? year + ' is a Leap year.'
    : year + ' is not a Leap year.'
);

year = 2025;
console.log(
  year % value1 === 0 && year % value2 === 0
    ? year + ' is a Leap year.'
    : year + ' is not a Leap year.'
);

// 7. Max of Three Numbers
const p = 24,
  q = 100,
  r = 50;
console.log(
  p > q && p > r
    ? p + ' is the greather'
    : q > p && q > r
    ? q + ' is the greather'
    : r + ' is the greather'
);

// 8. Bitwise Doubling
const count = 5;
console.log('Double value 5 with bitwise : ', 5 << 1); // 0101 << 1 = 1010   0010
