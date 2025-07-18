'use strict';
console.log('Day 14 Task of 40 days of JavaScript.');

/*
    1. What will be the output of the following code?
    - ReferenceError
    - SyntaxError
    - TypeError
    - No error, it prints 10
    This code raised a ReferenceError (variable p is not declared), catched in catch block.
*/
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log('An error occurred:', error.name);
}

// 2. Write a function processPayment(amount) that checks if the amount is positive
// and not exceeding balance. If any condition fails, throw appropriate errors

function processPayment(amount) {
  try {
    let balance = 100;
    if (amount >= 0 && amount <= balance) {
      console.log('Process paiement.');
    } else {
      throw new Error('The amount must be positive and not exceeding balance!');
    }
  } catch (error) {
    console.error('Invalid payment:', error.message);
  }
}

processPayment(120); // Raised Error
processPayment(-10); // Raised Error
processPayment(20); // Pass

/*
  3. Implement a custom error handling system for an e-commerce website that categorizes errors as
  - UserError
  - PaymentError
  - ServerError
  - EmailError
*/
// UserError
function UserError(message) {
  this.name = 'UserError';
  this.message = message;
  this.stack = new Error('').stack;
}

UserError.prototype = Object.create(Error.prototype);

// PayementError
function PayementError(message) {
  this.name = 'PayementError';
  this.message = message;
  this.stack = new Error('').stack;
}

PayementError.prototype = Object.create(Error.prototype);

// ServerError
function ServerError(message) {
  this.name = 'ServerError';
  this.message = message;
  this.stack = new Error('').stack;
}

ServerError.prototype = Object.create(Error.prototype);

// EmailError
function EmailError(message) {
  this.name = 'EmailError';
  this.message = message;
  this.stack = new Error('').stack;
}

EmailError.prototype = Object.create(Error.prototype);

// Use created custom error

function ValidateEcommerceData(
  username,
  userPayementAmount,
  userBalanceAmount,
  serverName,
  email
) {
  if (!username) {
    throw new UserError('Username is mandatory!');
  }

  // When User paiement amount is negative or greather than the user's balance amount
  if (userPayementAmount < 0 || userPayementAmount > userBalanceAmount) {
    throw new PayementError(
      'The payement amount should be positive and sufficient to proceed with the payement!'
    );
  }

  if (!email) {
    throw new EmailError('Email is mandatory!');
  } else if (!email.toString().includes('@')) {
    throw new EmailError('Please provide a valid email address!');
  }

  if (!serverName) {
    throw new ServerError('Server is mandatory!');
  }

  return 'Payement completed successfully.';
}

// UserError testing
try {
  const message = ValidateEcommerceData(
    '',
    200,
    200,
    'TapaScript',
    'peter@tapascript.com'
  );
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// PaymentError testing
try {
  const message = ValidateEcommerceData(
    'Peter',
    200,
    100,
    'TapaScript',
    'peter@tapascript.com'
  );
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// ServerError testing
try {
  const message = ValidateEcommerceData(
    'Peter',
    200,
    200,
    '',
    'peter@tapascript.com'
  );
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// EmailError testing
try {
  const message = ValidateEcommerceData('Peter', 200, 200, 'TapaScript', '');
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// EmailError testing
try {
  const message = ValidateEcommerceData(
    'Peter',
    200,
    200,
    'TapaScript',
    'peter.tapascript.com'
  );
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// Valide data testing
try {
  const message = ValidateEcommerceData(
    'Peter',
    200,
    200,
    'TapaScript',
    'peter@tapascript.com'
  );
  console.log(message);
} catch (error) {
  console.error(`${error.name}: ${error.message}\n${error.stack}`);
}

// 4. Simulate an API call function fetchData(url).
// If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch
function fetchData(url) {
  try {
    if (!url.toString().startsWith('https')) {
      throw new Error('Invalid URL.');
    }
    return url;
  } catch (error) {
    throw error;
  }
}

// Bad URL testing : URL witout https at the begining
try {
  const url = fetchData('http://tapascript.com');
  console.log(`Provided URL: ${url}`);
} catch (error) {
  console.error(`Error occur when fetching data: ${error.message}`);
}

// Good URL testing
try {
  const url = fetchData('https://tapascript.com');
  console.log(`Provided URL: ${url}`);
} catch (error) {
  console.error(`Error occur when fetching data: ${error.message}`);
}

/* 
  5. Implement a custom error type ValidationError using constructor functions to handle form validation errors
  
  Example
  const userInput = { username: '', age: -2 };
  validateUser(userInput);

  Output:
  ValidationError: Username cannot be empty
  ValidationError: Age must be a positive number
*/
function ValidationError(message) {
  this.name = 'ValidationError';
  this.message = message;
  this.stack = new Error('').stack;
}

ValidationError.prototype = Object.create(Error.prototype);

function validateUser(userInput) {
  if (!userInput.username) {
    throw new ValidationError('Username cannot be empty.');
  }
  if (userInput.age < 0) {
    throw new ValidationError('Age must be a positive number.');
  }

  return userInput;
}

// Bad Input testing : Empty username
try {
  const userInput = { username: '', age: 25 };
  validateUser(userInput);
  console.log(userInput);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Bad Inputs : Negative age
try {
  const userInput = { username: 'Peter', age: -2 };
  validateUser(userInput);
  console.log(userInput);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

// Good Inputs data
try {
  const userInput = { username: 'Peter', age: 25 };
  validateUser(userInput);
  console.log(userInput);
} catch (error) {
  console.error(`${error.name}: ${error.message}`);
}

/*
  6. Write a function readFile(filePath) that simulates reading a file. 
  If the file does not exist (simulate with a condition), throw a "File not found" error. 
  Handle the error with try...catch. Make sure you have code to handle releasing the IO resources
*/

function readFile(filePath) {
  if (!filePath || !filePath.toString().startsWith('c:\\')) {
    throw new Error('File not found!');
  }
  return filePath;
}

// Empty file
try {
  const filePath = readFile('');

  console.log(filePath);
} catch (error) {
  console.error(`Error while reading the file: ${error.message}`);
} finally {
  console.log('Releasing IO ressources.');
}

// Existing file
try {
  const filePath = 'c:\\Documents\\file.txt';
  const result = readFile(filePath);
  console.log(result);
} catch (error) {
  console.error(`Error while processing the file: ${error.message}`);
} finally {
  console.log('Releasing IO ressources.');
}

// 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse().
// If parsing fails, catch the error and return "Invalid JSON"
function parseJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    throw new Error('Invalid JSON.');
  }
}

// Bad Data : JSON Input
try {
  const jsonData = '{username:"Peter", "address:50 Sao Polo, salary:200}';
  const objData = parseJson(jsonData);
  console.log(objData);
} catch (error) {
  console.error(`Failed to parse JSON Data: ${error.message}`);
}

// Good Data
try {
  const jsonData =
    '{"username":"Peter", "address":"50 Sao Polo", "salary":200}';
  const objData = parseJson(jsonData);
  console.log(objData);
} catch (error) {
  console.error(`Failed to parse JSON Data: ${error.message}`);
}

/*
  8. What is the purpose of throw in JavaScript?
  B (It stops the execution of a program) and C (It creates a new error manually).

  A. It catches an error
  B. It stops the execution of a program
  C. It creates a new error manually
  D. It prints an error message
*/

/*
  9. What does the finally block do in a try...catch statement?
  C. Runs regardless of whether an error occurs or not.

  A. Runs only if an error occurs
  B. Runs only if no error occurs
  C. Runs regardless of whether an error occurs or not
  D. Stops the execution of the script
*/

// 10. Create a table explaining the usages of try, catch, throw, rethrow, error object
