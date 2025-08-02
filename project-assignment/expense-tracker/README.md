# js-practice: `Expense Tracker Project`

You have just finished the module 2. You have learned many important concepts till the session(day) 16. It is time to put everything together and do a project.

## Project Requirements

Create a simple expense tracker where user can **add**, **remove**, **edit**, and **categorize expenses**.

> Please Note: This will be a console-based project (no DOM), focusing only on JavaScript logic.

### Features to Implement

Create a `createExpenseTracker()` function that takes a username and an initial budget to expose the following functioanlities:

- Adding Expense
- Removing Expense
- Updating Expense
- Getting total expenses done by the user
- Getting expense by category
- Get the Highest Expense
- Get the Lowest Expense
- Get the user info
- Show all the expenses
- Update User data

Please make use of the factory function, closure to keep data private and return only the required features/methods.

## Sample User Data Structure

```js
 user: {
    name: "Tapas",
    budget: 5000,
  },
```

## Sample Expense Data Structure

```js
expenses: [
    { id: 1, amount: 200, category: "Food", description: "Lunch" },
    { id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
],
```

## Discussion and Follow up

Once done, submit the GitHub link on [Discord](https://discord.com/invite/ux9BchWEW3). Please feel free to discuss about the tasks, if you need help. Also, help others to complete it.

## Proposed Solution

```js
'use strict';
console.log(
  '**********************************************************************\n'
);
console.log(
  '=== 40 Days of Javascript - Expense Tracker Projectconst employees===\n'
);
console.log(
  '**********************************************************************'
);

/*
  In this project, we will assume it has two parts: 'The Backend' and 'The Frontend'.
  The Backend will hold data and factory functions and, the Frontend will use its functionalities. 
  to provide services to the user.

  In this way, the error will be handled on the backend, and the user will just get back the error message
  to be shown on the UI (console in this case).
  We will use custom errors.
  To distinguish log messages for debugging purposes and the UI, the backend will log errors with more details than the frontend.
*/

/*
 ********************************************
 *****************BACKEND PART***************
 ********************************************
 */

// Handling User Error with Custom error.
function ValidationUser(message) {
  this.name = 'ValidateUser';
  this.message = message;
  this.stack = new Error().stack;
}

ValidationUser.prototype = Object.create(Error.prototype);

function ValidationExpense(message) {
  this.name = 'ValidateExpense';
  this.message = message;
  this.stack = new Error().stack;
}

ValidationExpense.prototype = Object.create(Error.prototype);

// Validate expense by category.
function validateExpenseByCategory(expenseCategoryName) {
  if (!expenseCategoryName) {
    throw new Error('Empty category is not valid!');
  }
}

// Validate expense.
function validateExpense(expense) {
  // id validation.
  if (isNaN(expense.id) || expense.id <= 0) {
    throw new ValidationExpense(
      'Empty, zero or negative expense Id are not valids!'
    );
  }
  // amount validation.
  if (isNaN(expense.amount) || expense.amount <= 0) {
    throw new Error('Empty, zero or negative expense amount are not valids!');
  }
  // category validation.
  if (!expense.category) {
    throw new Error('Empty category is not valid!');
  }

  // description validation.
  if (!expense.description) {
    throw new Error('Empty description is not valid!');
  }
}

// Validate new user by name
function validateNewUserByName(userName) {
  // user name validation.
  if (!userName) {
    throw new ValidationUser('Empty username is not allowed!');
  }
}

// Validate user by name
function validateUserByName(userName) {
  // user name validation.
  if (!userName) {
    throw new ValidationUser('Empty username is not allowed!');
  }

  // If user is not found from user, then raised an error.
  if (!(userName === user.name)) {
    throw new ValidationUser(`The user with name '${userName}' doesn't exist!`);
  }
}

// Validate user by budget
function validateUserByBudget(userBudget) {
  // budget validation.
  if (isNaN(userBudget) || userBudget < 0) {
    throw new ValidationUser('Empty or negative budget are not valids!');
  }

  if (userBudget === 0) {
    throw new ValidationUser('The budget should be greather than zero!');
  }
}

const user = { name: 'Josue', budget: 5000 };

const expenses = [
  { id: 1, amount: 100, category: 'Food', description: 'Lunch' },
  { id: 2, amount: 200, category: 'Shopping', description: 'New shoes' },
  { id: 3, amount: 150, category: 'Food', description: 'Breakfast' },
  { id: 4, amount: 150, category: 'Movies', description: 'The new era' },
  { id: 5, amount: 400, category: 'Sport', description: 'Golf' },
  {
    id: 6,
    amount: 50,
    category: 'Entertainment',
    description: 'Roller-skate',
  },
  { id: 7, amount: 10, category: 'Toy', description: 'Childrens cars' },
  { id: 8, amount: 100, category: 'Tools', description: 'Gasmask' },
  { id: 9, amount: 250, category: 'Learning', description: 'Online Course' },
  { id: 10, amount: 300, category: 'Tech', description: '3D HD Camera' },
  {
    id: 11,
    amount: 500,
    category: 'Reading',
    description: 'Master JavaScript',
  },
];

const userExpenses = []; // { id: operationId, name: 'username', expenseId: expenseId, budget: budget }

function incrementeUserExpenseId() {
  try {
    let incrementedId = 0;
    // If the userExpense array is empty, we initialize the id with 1
    if (userExpenses.length === 0) {
      incrementedId = 1;
    } else {
      // Otherwise get the last Id and then add one
      incrementedId = userExpenses.reduce((accu, userExpense) => {
        return Math.max(accu, userExpense.id) + 1;
      }, 0);
    }
    return incrementedId;
  } catch (error) {
    console.log(
      `incrementeUserExpenseId | Incremente user expense Id => ${error.name} : ${error.message}\n${error.stack}`
    );
  }
}

// Main application function with closure.
function createExpenseTracker(userName, initialBudget) {
  // let username = userName;
  let userBudget = initialBudget;

  // Update userBudget uses the powerfull of closure to get user budget updated.
  user.budget = userBudget;

  return {
    addExpense: function (username, expense) {
      try {
        if (expense.amount > user.budget) {
          throw new ValidationUser(
            `Insufficient user budget! User hold '${user.budget}' and can't spend '${expense.amount}.'`
          );
        }
        const userExpense = {
          id: incrementeUserExpenseId(),
          username: username,
          expenseId: expense.id,
          amount: expense.amount,
          category: expense.category,
          description: expense.description,
        };
        // Update the user budget
        userBudget -= expense.amount;
        user.budget = userBudget;
        return userExpenses.push(userExpense);
      } catch (error) {
        console.log(
          `addExpense | Adding expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    removeExpense: function (username, expense) {
      try {
        const userExpenseIndex = userExpenses.findIndex((userExpense) => {
          return (
            expense.id === userExpense.expenseId &&
            userExpense.username === username
          );
        });

        // Once the index doesn't exist (objExpense is -1), the programm raised an error.
        if (userExpenseIndex == -1) {
          throw new Error(`The provided expense doesn't exist!`);
        }
        // Update user budget by adding the removed amount
        userBudget += expense.amount;
        user.budget = userBudget;

        // Remove the element at the specified index
        userExpenses.splice(userExpenseIndex, 1);
      } catch (error) {
        console.log(
          `removeExpense | Remove expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    updateExpense: function (username, expense) {
      try {
        let userExpenseId = -1;
        // According to the expense passed as argument, update the current one
        const userExpenseIndex = userExpenses.findIndex((userExpense) => {
          // Get the current user expense Id because when the  splice method will be applied, it will be lost.
          userExpenseId = userExpense.expenseId;
          return (
            expense.id === userExpense.expenseId &&
            userExpense.username === username
          );
        });

        // Once the index doesn't exist (userExpenseIndex is -1), the programm raised an error.
        if (userExpenseIndex === -1) {
          throw new ValidationExpense(`The provided expense doesn't exist!`);
        }

        // Before updating the expense from userExpense, update the user budget
        const amountBeforeRestoringUserBudget =
          userExpenses.at(userExpenseIndex).amount;

        // Once the updated budget becomes insufficient for the update, we raise an error
        if (
          user.budget + amountBeforeRestoringUserBudget - expense.amount <
          0
        ) {
          throw new ValidationUser(
            `Insufficient user budget! The new User budget '${
              user.budget + amountBeforeRestoringUserBudget - expense.amount
            }' can't be spent for '${expense.amount}.'`
          );
        }

        // If the user budget will be sufficient then update current user budget
        userBudget += amountBeforeRestoringUserBudget - expense.amount;
        user.budget = userBudget;
        userExpenses.splice(userExpenseIndex, 1, {
          id: userExpenseId,
          username: username,
          amount: expense.amount,
          category: expense.category,
          description: expense.description,
        });
      } catch (error) {
        console.log(
          `updateExpense | Update expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    // For this case, we are going to suppose that each user has already added expenses
    // stored in a array.
    getTotalExpenseByUser: function (username) {
      try {
        const totalExpenseByUser = userExpenses
          .filter((userExpense) => {
            // Get expense by user name
            return username === userExpense.username;
          })
          .map((userExpense) => {
            // Get only expense amount from expense done by user
            return userExpense.amount;
          }) // Sum all user expense amount
          .reduce((accu, currentUserExpenseAmount) => {
            return accu + currentUserExpenseAmount;
          }, 0);
        return totalExpenseByUser;
      } catch (error) {
        console.log(
          `getTotalExpenseByUser | Get the total expenses done by the user => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getExpenseByCategory: function (username, categoryName) {
      try {
        const expensesByCategory = userExpenses.filter((userExpense) => {
          return (
            userExpense.category === categoryName &&
            userExpense.username === username
          );
        });
        return expensesByCategory;
      } catch (error) {
        console.log(
          `getExpenseByCategory | Get user expenses by category => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getHighestExpense: function (username) {
      try {
        const highestUserExpenseAmount = userExpenses
          .filter((userExpense) => {
            return userExpense.username === username;
          })
          .reduce((accu, userExpense) => {
            return Math.max(accu, userExpense.amount);
          }, 0);
        return highestUserExpenseAmount;
      } catch (error) {
        console.log(
          `getHighestExpense | Get the highest expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getLowestExpense: function (username) {
      try {
        const lowestUserExpenseAmount = userExpenses
          .filter((userExpense) => {
            return userExpense.username === username;
          })
          .map((userExpense) => {
            return userExpense.amount;
          })
          .sort((a, b) => {
            return a === b ? 0 : a > b ? 1 : -1;
          })[0]; // The first element of the sorted ascending array is the lowest amount.
        return lowestUserExpenseAmount;
      } catch (error) {
        console.log(
          `getLowestExpense | Get the lowest expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getUserInfo: function (username) {
      try {
        return { name: username, budget: userBudget };
      } catch (error) {
        console.log(
          `getUserInfo | Get user info. => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    showAllExpenses: function (username) {
      try {
        const allUserExpense = userExpenses.filter((userExpense) => {
          return userExpense.username === username;
        });
        return allUserExpense;
      } catch (error) {
        console.log(
          `showAllExpenses | Show all user expenses => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    updateUserData: function (newUsername, budget) {
      try {
        user.name = newUsername;
        user.budget = budget;
        return user;
      } catch (error) {
        console.log(
          `updateUserData | Update user data => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
  };
}

/*
 ********************************************
 ****************FRONTEND PART***************
 ********************************************
 */

// Create new instance of
let executeExpenseTracker;

try {
  const userInitialBudget = 5000; // Budget 1300 raise error when updating
  const username = 'Josue';
  const expense = expenses.at(0);
  validateUserByName(username);
  validateExpense(expense);
  validateUserByBudget(userInitialBudget);

  executeExpenseTracker = createExpenseTracker(username, userInitialBudget);
  console.log(
    `Expense initialized to ${userInitialBudget} for user '${user.name}'.`
  );
} catch (error) {
  console.log(`Failed to initialze expense : ${error.message}`);
}

// Add first expense for the user 100, 150, 400, 100, 250, 300 => User budget will become 3700
try {
  const username = 'Josue';
  const expense = expenses.at(0);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Add third expense for the user
try {
  const username = 'Josue';
  const expense = expenses.at(2);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Add fifth expense for the user
try {
  const username = 'Josue';
  const expense = expenses.at(4);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Add eighth expense for the user
try {
  const username = 'Josue';
  const expense = expenses.at(7);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Add nineth expense for the user
try {
  const username = 'Josue';
  const expense = expenses.at(8);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Add tenth expense for the user
try {
  const username = 'Josue';
  const expense = expenses.at(9);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.addExpense(username, expense);
  console.log('New expense added successfully.');

  // Print current User expense
  console.log('User expense after adding : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}

// Remove the fourth user expense with id 8 => { id: 8, amount: 100, category: 'Tools', description: 'Gasmask' } and new budget = 3700 + 100 = 3800
try {
  const username = 'Josue';
  const expense = expenses.at(7);
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.removeExpense(username, expense);
  console.log('Expense removed successfully.');

  // Print current User expense
  console.log('User expense after removing : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to remove expense : ${error.message}`);
}

// Update expense on the Id 10 => { id: 10, amount: 300, category: 'Tech', description: '3D HD Camera' } with new data, and new budget = 3800 + 300 - 500 = 3600
try {
  const username = 'Josue';
  const expense = {
    id: 10,
    amount: 500,
    category: 'Utilities',
    description: 'Electricity',
  };
  validateExpense(expense);
  validateUserByName(username);
  executeExpenseTracker.updateExpense(username, expense);
  console.log('Expense updated successfully.');

  // Print current User expense
  console.log('User expense after updating : ', userExpenses);
  // Print current User budget
  console.log('Current user budget : ', user.budget);
} catch (error) {
  console.log(`Failed to update expense : ${error.message}`);
}

// Get total expense by user
try {
  // 100 + 150 + 400 + 250 + 500 = 1400
  const username = 'Josue';
  validateUserByName(username);
  const totalExpenseByUser =
    executeExpenseTracker.getTotalExpenseByUser(username);
  console.log(
    'The total expenses done by user "',
    username,
    '" is : ',
    totalExpenseByUser
  );
} catch (error) {
  console.log(
    `Failed to get the total expenses done by the user : ${error.message}`
  );
}

// Get user expenses by category
try {
  const username = 'Josue';
  const expenseCategory = 'Food';
  validateUserByName(username);
  validateExpenseByCategory(expenseCategory);
  const expenseByCategory = executeExpenseTracker.getExpenseByCategory(
    username,
    expenseCategory
  );
  console.log(
    `The total user expenses done by category '${expenseCategory}' : `,
    expenseByCategory
  );
} catch (error) {
  console.log(
    `Failed to get users expenses done by category : ${error.message}`
  );
}

// Get highest expense
try {
  const username = 'Josue';
  validateUserByName(username);
  const highestExpense = executeExpenseTracker.getHighestExpense(username);
  console.log('The highest user expense : ', highestExpense);
} catch (error) {
  console.log(`Failed to get the highest user expense  : ${error.message}`);
}

// Get lowest expense
try {
  const username = 'Josue';
  validateUserByName(username);
  const lowestExpense = executeExpenseTracker.getLowestExpense(username);
  console.log('The lowest user expense : ', lowestExpense);
} catch (error) {
  console.log(`Failed to get the lowest suers expense  : ${error.message}`);
}

// Get user info
try {
  const username = 'Josue';
  validateUserByName(username);
  const userInfo = executeExpenseTracker.getUserInfo(username);
  console.log(
    'The user info : \nName: ',
    userInfo.name,
    ', Budget: ',
    userInfo.budget
  );
} catch (error) {
  console.log(`Failed to get the user info  : ${error.message}`);
}

// Show all user expenses
try {
  const username = 'Josue';
  validateUserByName(username);
  console.log(`Show all epenses done by the user '${username}' : `);
  executeExpenseTracker.showAllExpenses(username).forEach((userExpense) => {
    console.log(
      `Id: ${userExpense.id}, Expense_Id: ${userExpense.expenseId}, Amount: ${userExpense.amount}, Category: ${userExpense.category}, Decription: ${userExpense.description}`
    );
  });
} catch (error) {
  console.log(`Failed to get all user expenses  : ${error.message}`);
}

// Update user data
try {
  const newUserData = { name: 'Tapas', budget: 10000 };
  validateNewUserByName(newUserData.name);
  validateUserByBudget(newUserData.budget);
  executeExpenseTracker.updateUserData(newUserData.name, newUserData.budget);
  console.log('User data updated successfully.');
  console.log('Current user data after updating : ', user);
} catch (error) {
  console.log(`Failed to update user data  : ${error.message}`);
}
```

## Screenshots

![Image](https://github.com/user-attachments/assets/e51a1f8c-237e-4cb7-bbd3-d7131e61875c)

![Image](https://github.com/user-attachments/assets/a0d84d1a-9018-4017-8e54-19fb764d724a)
