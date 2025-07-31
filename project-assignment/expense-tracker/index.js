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
  this.stack = new Error('').stack;
}

ValidationExpense.prototype = Object.create(Error.prototype);

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
    throw new ValidationUser('Empty username are not allowed!');
  }
  // budget validation.
  if (isNaN(user.budget) || budget < 0) {
    throw new ValidationUser('Empty or negative budget are not valids.');
  }
}

const user = [
  { name: 'Josue', budget: 5000 },
  { name: 'Dan', budget: 10000 },
  { name: 'Alice', budget: 4000 },
  { name: 'John', budget: 12000 },
  { name: 'Peter', budget: 1000 },
  { name: 'Kubala', budget: 6000 },
  { name: 'Kunal', budget: 8000 },
  { name: 'Sifa', budget: 7000 },
  { name: 'Nyota', budget: 10000 },
  { name: 'Asha', budget: 6000 },
];

const expenses = [
  { id: 1, amount: 100, category: 'Food', description: 'Lunch' },
  { id: 2, amount: 200, category: 'Shopping', description: 'New shoes' },
  // { id: 3, amount: 150, category: 'Movies', description: 'The new era' },
  // { id: 4, amount: 400, category: 'Sport', description: 'Golf' },
  // { id: 5, amount: 50, category: 'Entertainment', description: 'Roller-skate' },
  // { id: 6, amount: 10, category: 'Toy', description: 'Childrens cars' },
  // { id: 7, amount: 100, category: 'Tools', description: 'Gasmask' },
  // { id: 8, amount: 250, category: 'Learning', description: 'Online Course' },
  // { id: 9, amount: 300, category: 'Tech', description: '3D HD Camera' },
  // { id: 10, amount: 500, category: 'Reading', description: 'Master JavaScript' },
];

// Get the last ID of expenses and return an incremented value by one
function incrementeExpenseId() {
  const incrementedID = expenses.reduce((accu, current) => {
    return Math.max(accu, current.id) + 1;
  }, 0);

  return incrementedID;
}

function createExpenseTracker() {
  return {
    addExpense: function (expense) {
      try {
        return expenses.push(expense);
      } catch (error) {
        console.log(
          `createExpenseTracker | Adding expense => ${error.name} : ${error.message}\n${error.stack}`
        );
        throw error;
      }
    },
    removeExpense: function (expenseId) {},
    updateExpense: function () {},
    getTotalExpenseByUser: function (user) {},
    getExpenseByCategory: function (categoryName) {},
    getHighestExpense: function () {},
    getLowestExpense: function () {},
    getUserInfo: function (userId) {},
    showAllExpenses: function () {},
    updateUserData: function (user) {},
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
const newExpense = {
  id: incrementeExpenseId(),
  amount: 150,
  category: 'Movies',
  description: 'The new era',
};
try {
  validateExpense(newExpense);
  executeExpenseTracker.addExpense(newExpense);
  console.log('New expense added successfully.');
} catch (error) {
  console.log(`Failed to add expense : ${error.message}`);
}
// Print current expense
console.log('Current expense : ', expenses);
