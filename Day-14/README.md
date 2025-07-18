# js-practice

## **🎯 Goal of This Lesson**

- ✅ Why Error Handling
- ✅ What Will We Learn?
- ✅ Errors in JavaScript
- ✅ Handling Errors With try and catch
- ✅ The Error Object
- ✅ Real World Use Cases
- ✅ Throwing Error
- ✅ A Few More Error Cases
- ✅ Rethrowing Error
- ✅ The finally
- ✅ Custom Errors
- ✅ The Self Assignment Operator(dream so far!)
- ✅ Task and What’s Next?

# Key Points of the video

Handling error is a good practice while programming with JavaScript or any other programming language.

## 1. Different type of Error in JavaScript

> JavaScript has two types of error _`parsing error`_ (Syntacticall error or grammar error, when JavaScript is not able to interprete or parse the code.) and \_`runtime error` (When syntaxe is correct but the programm not match the expected execution result because of some mistakes or logic problem. Is the most commun type of error to handle.).

> **Exceptions** are runtime errors that disrupt program execution.

### Example 1

```js
console.log(x); // ReferenceError: x is not defined
```

### Example 2

```js
let obj = null;
console.log(obj.name); // TypeError: Cannot read properties of null (reading 'name')
```

### Example 3

```js
console.log('Hello'; // SyntaxError: missing ) after argument list (at index.js:2:13)
```

### Example 4

```js
let arr = new Array(-1);
console.log(arr); // RangeError: Invalid array length
```

> There are lot of Error that can occurs in JavaScript, and the proper way to handle them is by using the `try...catch` bloc.

## 2. try...catch syntax and flow

> Allow to catch error in the code and avoid application to crash.
> The `catch block` is ignored once any error is not found inside the `try bloc`, but in case of error occurs, the execution is suspended and then a proper message that explains what is happening is showned.

```js
try {
  // Logic or code
  console.log(x);
} catch (err) {
  // Error object
  // handle error
}
```

> An concret example.

```js
try {
  console.log('Execution starts here.');
  abc;
  console.log('Execution ends here.');
} catch (err) {
  console.error('An Error has occured');
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
```

## 3. Real-world use cases with try...catch

```js
const person = {
  name: 'Josue',
  address: {
    city: 'London',
  },
};

function getPostalCode(user) {
  try {
    console.log(user.address.country.postalCode);
  } catch (error) {
    console.error('Error accessing property:', error.message);
  }
}

getPostalCode(person);
```

## 4. Throwing Error

> The _`throw`_ keywork raised an error explicitly based on certain condition.

```js
function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error('Division by zero is not allowed!');
    }
    const result = a / b;
    console.log(`The result is ${result}`);
  } catch (error) {
    console.error('Get a Math Error', error.message);
  }
}
divideNumbers(10, 5);
divideNumbers(20, 0);
```

```js
function validateAge(age) {
  try {
    if (isNaN(age)) {
      throw new Error(
        `Invalid input: Age must be a number. Your current input is ${age}`
      );
    }
    console.log(`User's age is: ${age}.`);
  } catch (error) {
    console.error('Validation Error', error.message);
  }
}

validateAge(20);
validateAge('30');
validateAge('url');
```

## 5. Rethrowing Error

> _`Rethrowing`_ come to picture when error is catched in a block and, after its processing is throwned again (rethrowing) to tell the caller gets the exception back to do more with it. This help throw the error in the top level of hierarchie.
> In this scenario, when we want to show the error to the user with a proper UI, instead of showing all messages which will result of messi dialog message, we just shows the last one from the top level function and log the rest of message to the console.

```js
function validateForm(formData) {
  try {
    if (!formData.username) throw new Error('Username is mandatory!');
    if (!formData.email.includes('@')) throw new Error('Invalid email format!');
  } catch (error) {
    console.error(`Validation issues found: ${error.message}`);
    // rethrow
    throw error; // Not using new Error() because error is already an instance of this Constructor Function
  }
}

try {
  validateForm({ username: 'Jamal', email: 'bademail' });
} catch (error) {
  console.error(`Showing error message for user creation: ${error.message}`);
}
```

## 6. The try...catch...finally

> The `finally block` inside the `try...catch block` is used as **cleaned up** purpose (Closing database connection, IO process, realising resources, set variables to null, etc.). It has the particularity to be executed each time both `try` or `catch` block is executed.

```js
// GENERAL FORM
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs (cleanup action)
}
```

```js
function processInformation(information) {
  try {
    console.log('Processing Informations...');
    if (!information) throw new Error('No information available to process');
    console.log('Information processed');
  } catch (error) {
    console.error('Error', error.message);
  } finally {
    console.log('Cleanup: Closing database connection');
  }
}

processInformation('JS is amazing');
processInformation();
```

## 7. Creating Custom Error

> `Custom Error` are useful to deal with specific scenario in certain case. eg. `More custom message to the end user`,`debugging purpose`, `Differents functionalities in an application`, `Easy Managing project`.
> This is done by creating meaningful **Constructor Functions** with expected properties.

```js
function ValidationError(message) {
  // Properties
  this.name = 'ValidationError';
  this.message = message;
  this.stack = new Error('').stack;
}

ValidationError.prototype = Object.create(Error.prototype); // To be understood later.

function validateCitizen(age) {
  if (age < 60) {
    throw new ValidationError('You are not a senior citizen.');
  }

  return 'You are a senior citizen.';
}

try {
  const message = validateCitizen(45);
  console.log(message);
} catch (error) {
  console.log(`${error.name}: ${error.message}\n${error.stack}`);
}
```

## 8. Self Assignment Operator ?=

> This operator play the role of try...catch replacement.

```js
let x;
let y = 10;

x ??= 20; // x is undefined, so x becomes 20
y ??= 20; // y is already 10, so y remains 10

console.log(x); // Output: 20
console.log(y); // Output: 10
```

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-14]](https://youtu.be/XpMW-gxNYD8 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code?

```js
/*
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
```

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

```js
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
```

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

```js
/*
- ReferenceError
- SyntaxError
- TypeError
- No error, it prints 10

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError
<<<<<<< HEAD
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
```

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

```js
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
```

=======

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch

> > > > > > > 3c6b6f61a752ba9276777561f47afeaef647cd73

## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

Example:

```js
const userInput = { username: '', age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
<<<<<<< HEAD

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
=======
>>>>>>> 3c6b6f61a752ba9276777561f47afeaef647cd73
```

## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

<<<<<<< HEAD

```js
/*
Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.
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
```

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

```js
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
```

## 8. What is the purpose of throw in JavaScript?

```js
/*
  B (It stops the execution of a program) and C (It creates a new error manually).

  A. It catches an error
  B. It stops the execution of a program
  C. It creates a new error manually
  D. It prints an error message
*/
```

## 9. What does the finally block do in a try...catch statement?

```js
/*
  C. Runs regardless of whether an error occurs or not.

  A. Runs only if an error occurs
  B. Runs only if no error occurs
  C. Runs regardless of whether an error occurs or not
  D. Stops the execution of the script
*/
```

=======
Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

## 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
- It creates a new error manually
- It prints an error message

## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
- Runs regardless of whether an error occurs or not
- Stops the execution of the script
  > > > > > > > 3c6b6f61a752ba9276777561f47afeaef647cd73

## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

![Image](https://github.com/user-attachments/assets/9102c667-5ffe-4d77-ad4a-bb7043356bb9)

## Screenshots

![Image](https://github.com/user-attachments/assets/e011473e-ec1f-45c9-931d-f5c18363c058)

![Image](https://github.com/user-attachments/assets/2e633e0b-7b0a-44d0-a095-2734190866d0)
