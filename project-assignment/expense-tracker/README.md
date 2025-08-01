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

// Validate user
function validateUser(user) {
  // user name validation.
  if (!user.name) {
    throw new ValidationUser('Empty username is not allowed!');
  }
  // budget validation.
  if (isNaN(user.budget) || user.budget < 0) {
    throw new ValidationUser('Empty or negative budget are not valids.');
  }
}

// Validate user by name
function validateUserByName(userName) {
  // user name validation.
  if (!userName) {
    throw new ValidationUser('Empty username is not allowed!');
  }
}

const users = [
  { name: 'Josue', budget: 5000 },
  { name: 'Asha', budget: 6000 },
];

const expenses = [
  { id: 1, amount: 100, category: 'Food', description: 'Lunch' },
  { id: 2, amount: 200, category: 'Shopping', description: 'New shoes' },
  { id: 3, amount: 150, category: 'Food', description: 'Breakfast' },
];

const userExpenses = [
  { name: 'Josue', expenseId: 1, budget: 4900 },
  { name: 'Josue', expenseId: 3, budget: 4750 },
  { name: 'Asha', expenseId: 2, budget: 5800 },
  { name: 'Josue', expenseId: 1, budget: 4800 },
  { name: 'Asha', expenseId: 3, budget: 5650 },
  { name: 'Josue', expenseId: 2, budget: 4600 },
];

// Get the last ID of expenses and return an incremented value by one
function incrementeExpenseId() {
  try {
    const incrementedID = expenses.reduce((accu, expense) => {
      return Math.max(accu, expense.id) + 1;
    }, 0);
    return incrementedID;
  } catch (error) {
    console.log(
      `incrementeExpenseId | Increm expense => ${error.name} : ${error.message}\n${error.stack}`
    );
  }
}

// Main application function with closure.
function createExpenseTracker() {
  return {
    addExpense: function (expense) {
      try {
        return expenses.push(expense);
      } catch (error) {
        console.log(
          `addExpense | Adding expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    removeExpense: function (expenseId) {
      try {
        // when Id is known, the array index is the Id - 1.
        const expenseIndex = expenses.findIndex((expense) => {
          return expense.id === expenseId;
        });

        // Once the index doesn't exist (objExpense is -1), the programm raised an error.
        if (expenseIndex == -1) {
          throw new ValidationExpense(
            `The provided Id '${expenseId}' doesn't exist.`
          );
        }
        // Remove the element at the specified index
        expenses.splice(expenseIndex, 1);
      } catch (error) {
        console.log(
          `removeExpense | Remove expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    updateExpense: function (expense) {
      try {
        // According to the expense passed as argument, update the current one
        const indexObjToChange = expenses.findIndex((exp) => {
          return exp.id === expense.id;
        });

        // Once the index doesn't exist (objToChange is -1), the programm raised an error.
        if (indexObjToChange === -1) {
          throw new ValidationExpense(
            `The provided Id '${expense.id}' doesn't exist.`
          );
        }
        expenses.splice(indexObjToChange, 1, {
          id: expense.id,
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
    getTotalExpenseByUser: function (user) {
      try {
        const totalExpenseByUser = userExpenses
          .filter((userExpense) => {
            // Get expense by user name
            return user.name === userExpense.name;
          })
          .map((expense) => {
            // Get only expense Id from expense done by user
            return expense.expenseId;
          })
          .reduce((accu, expenseId) => {
            // Get the amount corresponding to each expense Id
            const currentAmount = expenses.filter((expense) => {
              return expense.id === expenseId;
            })[0].amount;
            return accu + currentAmount; // Return the sum of all amount corresponding to expense Id done by the user
          }, 0);
        return totalExpenseByUser;
      } catch (error) {
        console.log(
          `getTotalExpenseByUser | Get the total expense by user => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getExpenseByCategory: function (categoryName) {
      try {
        const expensesByCategory = expenses.filter((expense) => {
          return expense.category === categoryName;
        });
        return expensesByCategory;
      } catch (error) {
        console.log(
          `getExpenseByCategory | Get expenses by category => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getHighestExpense: function () {
      try {
        const highestExpenseAmount = expenses.reduce((accu, expense) => {
          return Math.max(accu, expense.amount);
        }, 0);
        const highestExpense = expenses.filter((expense) => {
          return expense.amount === highestExpenseAmount;
        });
        return highestExpense;
      } catch (error) {
        console.log(
          `getHighestExpense | Get the highest expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getLowestExpense: function () {
      try {
        const lowestExpenseAmount = expenses
          .map((expense) => {
            return expense.amount;
          })
          .sort((a, b) => {
            return a === b ? 0 : a > b ? 1 : -1;
          })[0];
        const lowestExpense = expenses.filter((expense) => {
          return expense.amount === lowestExpenseAmount;
        });
        return lowestExpense;
      } catch (error) {
        console.log(
          `getLowestExpense | Get the lowest expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    getUserInfo: function (userName) {
      try {
        const userDetails = users.find((user) => {
          return user.name === userName;
        });

        // If user is not found from users array, then raised an error.
        if (!userDetails) {
          throw new ValidationUser(
            `The user with name '${userName}' doesn't exist!`
          );
        }
        return userDetails;
      } catch (error) {
        console.log(
          `getUserInfo | Get user info. => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    showAllExpenses: function () {
      try {
        return expenses;
      } catch (error) {
        console.log(
          `showAllExpenses | Show all expenses => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    updateUserData: function (newUser) {
      try {
        // check if the provided user name exist.
        const currentUserIndex = users.findIndex((user) => {
          return user.name === newUser.name;
        });

        // If the current user name doesn't exist, error is raised.
        if (currentUserIndex === -1) {
          throw new ValidationUser(
            `The provided user with name '${newUser.name}' doesn't exist!`
          );
        }
        users.splice(currentUserIndex, 1, {
          name: newUser.name,
          budget: newUser.budget,
        });
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
const executeExpenseTracker = createExpenseTracker();

// Add new expense
const newExpense = [
  {
    amount: 150,
    category: 'Movies',
    description: 'The new era',
  },
  {
    amount: 400,
    category: 'Sport',
    description: 'Golf',
  },
  {
    amount: 50,
    category: 'Entertainment',
    description: 'Roller-skate',
  },
  {
    amount: 10,
    category: 'Toy',
    description: 'Childrens cars',
  },
  {
    amount: 100,
    category: 'Tools',
    description: 'Gasmask',
  },
  {
    amount: 250,
    category: 'Learning',
    description: 'Online Course',
  },
  {
    amount: 300,
    category: 'Tech',
    description: '3D HD Camera',
  },
  {
    amount: 500,
    category: 'Reading',
    description: 'Master JavaScript',
  },
];
try {
  newExpense.forEach((expense) => {
    expense['id'] = incrementeExpenseId();
    validateExpense(expense);
    console.log(expense);
    executeExpenseTracker.addExpense(expense);
    console.log('New expense added successfully.');
  });
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}
// Print current expense
console.log('Current expense after adding : ', expenses);

// Remove expense with Id 6
try {
  const expenseId = 6;
  executeExpenseTracker.removeExpense(expenseId);
  console.log('Expense removed successfully.');
} catch (error) {
  console.log(`Failed to remove expense : ${error.message}`);
}
console.log('Current expense after removing : ', expenses);

// Update expense on the Id 10 ({id: 2, amount: 200, category: 'Shopping', description: 'New shoes' }) with new data
try {
  const newObject = {
    id: 2,
    amount: 300,
    category: 'Utilities',
    description: 'Electricity',
  };
  console.log('newObject : ', newObject);
  executeExpenseTracker.updateExpense(newObject);
  console.log('Expense updated successfully.');
} catch (error) {
  console.log(`Failed to update expense : ${error.message}`);
}

console.log('Current expense after updating : ', expenses);

// Get total expense by user
try {
  // Loop to find the total expense for each user
  const userNames = ['Josue', 'Asha'];
  userNames.forEach((userName) => {
    validateUserByName(userName);
    const user = executeExpenseTracker.getUserInfo(userName);
    const totalExpenseByUser =
      executeExpenseTracker.getTotalExpenseByUser(user);
    console.log(
      'The total expense by user "',
      user.name,
      '" is : ',
      totalExpenseByUser
    );
  });
} catch (error) {
  console.log(`Failed to get the total expense by user : ${error.message}`);
}

// Get expenses by category
try {
  const expenseCategory = 'Food';
  validateExpenseByCategory(expenseCategory);
  const expenseByCategory =
    executeExpenseTracker.getExpenseByCategory(expenseCategory);
  console.log(
    `The expense by category '${expenseCategory}' : `,
    expenseByCategory
  );
} catch (error) {
  console.log(`Failed to get expense by category : ${error.message}`);
}

// Get highest expense
try {
  const highestExpense = executeExpenseTracker.getHighestExpense();
  console.log('The highest expense : ', highestExpense);
} catch (error) {
  console.log(`Failed to get the highest expense  : ${error.message}`);
}

// Get lowest expense
try {
  const lowestExpense = executeExpenseTracker.getLowestExpense();
  console.log('The lowest expense : ', lowestExpense);
} catch (error) {
  console.log(`Failed to get the lowest expense  : ${error.message}`);
}

// Get user info
try {
  const userName = 'Josue';
  validateUserByName(userName);
  const userInfo = executeExpenseTracker.getUserInfo(userName);
  console.log(
    'The user info : \nName: ',
    userInfo.name,
    ', Budget: ',
    userInfo.budget
  );
} catch (error) {
  console.log(`Failed to get the user info  : ${error.message}`);
}

// Show all expenses
try {
  console.log('Show all epenses : ');
  executeExpenseTracker.showAllExpenses().forEach((expense) => {
    console.log(
      `Id: ${expense.id}, Amount: ${expense.amount}, Category: ${expense.category}, Decription: ${expense.description}`
    );
  });
} catch (error) {
  console.log(`Failed to get the lowest expense  : ${error.message}`);
}

// Update user data
try {
  const newUserData = { name: 'Josue', budget: 10000 };
  validateUser(newUserData);
  executeExpenseTracker.updateUserData(newUserData);
  console.log('User data updated successfully.');
  console.log('Current user data after updating : ', users);
} catch (error) {
  console.log(`Failed to update user data  : ${error.message}`);
}
```

## Screenshots

![Image](https://github.com/user-attachments/assets/121e0411-3b29-4b1e-a798-c13fd4563c86)

![Image](https://github.com/user-attachments/assets/b0ef825e-63f3-44a4-b8af-0cc2f0f7f1e3)
