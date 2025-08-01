# js-practice

## **🎯 Goal of This Lesson**

- What are Operands, Operators, Expressions?
- What are difefrent types of Operators?
- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional Ternary Operator
- Bitwise Operator
- Relational Operator
- Grouping and Precedence
- typeof Operator
- instanceof Operator
- Tasks and Practices

## **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-03]](https://youtu.be/tVqy4Tw0i64 'Video')

# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

### 1. Odd or Even?

- [x] Take a number and find if the number is an odd or even number.
- [x] Print the number and result in the console.

  ```js
  let numberOddEven = 12;
  console.log(numberOddEven % 2 === 0 ? 'Even number.' : 'Odd number.'); // Even
  numberOddEven = 15;
  console.log(numberOddEven % 2 === 0 ? 'Even number.' : 'Odd number.'); // Odd
  ```

### 2. Do you have a Driving License?

Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

- [x] Manage `age` as a variable.
- [x] Check if the age is elligible for a driving license and print it on the console accordingly.

  ```js
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
  ```

### 3. Calculate CTC with a Bonus

Let's calculate how much you earn from your office.

- [x] You get 12,300 rupees as your monthly salary.
- [x] You get a 20% bonus on your annual salary.
- [x] How much money do you make per annum as a CTC?

  ```js
  const salary = 12300;
  const bonus = salary * 0.2;
  const CTC = salary * 12 + bonus;
  console.log('You get annualy amount (CTC) of ', CTC, 'USD');
  ```

### 4. Write a program for the Traffic Light Simulation.

Red Light... Green Light... Let's Play!

- [x] Create a `color` variable.
- [x] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.

  ```js
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
  ```

### 5. Create an Electricity Bill Calculator

Let's calculate how much you pay for electricity bills per month and annually.

- [x] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
- [x] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
- [x] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

  ```js
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
  ```

### 6. Leap Year Checker

Is 2025 a Leap Year?

- [x] Take `year` as input.
- [x] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.

  ```js
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
  ```

### 7. Max of Three Numbers

Find the max number from the lot.

- [x] Take three numbers and assign them to variables p, q, and r.
- [x] Now find the maximum of these three numbers using the comparison operators.

  ```js
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
  ```

### 8. Bitwise Doubling

A tricky one for you

- [x] Create a variable `count` and assign a value, say, 5.
- [x] Now use the Bitwise shift operator to make the number double.
- [x] Print it on the console.

  ```js
  const count = 5;
  console.log('Double value 5 with bitwise : ', 5 << 1); // 0101 << 1 = 1010   0010
  ```

### Screenshot

![Image](https://github.com/user-attachments/assets/083d0fcb-e9dc-4d51-aa4a-e43732585075)
