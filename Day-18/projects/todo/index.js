'use strict';
console.log('Project: TODO');
const errorText = document.getElementById('errorText');
const taskManagerValues = { new: 'new', edit: 'edit' }; // Object to store task manager values

// Custom error handler
function TaskManagerError(message) {
  this.name = 'TaskManagerError';
  this.message = message;
  this.stack = new Error().stack;
}

TaskManagerError.prototype = Object.create(Error.prototype);

// Validate task to be added
function validateNewTaskManager(taskManagerValues) {
  if (!taskManagerValues.new.trim()) {
    throw new Error('Please provide a valid new task to be added!');
  }
}

// Validate task to be updated
function validateEditTaskManager(taskManagerValues) {
  if (!taskManagerValues.edit.trim()) {
    throw new Error('Please provide a valid value to update the choosen task!');
  }
}

// Capitalize the first letter of an input text
function capitalizeFirstLetter(input) {
  let output = '';
  if (!input) return;
  output = input[0].toUpperCase().concat(input.slice(1));
  return output;
}

// Print an error message to the console
function showErrorMessageToConsole(message) {
  if (!message) return;
  console.error(message);
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  let task = taskInput.value;
  taskManagerValues.new = task;
  try {
    validateNewTaskManager(taskManagerValues);
    taskManagerValues.isError = false; // Error raised

    // Hide the error message
    errorText.classList.add('hidden');
    errorText.classList.remove('errorMessage');

    // Capitalize the task content when adding value
    task = capitalizeFirstLetter(task);

    const li = document.createElement('li');

    li.innerText = task;

    // Completed task button
    const completeBtn = document.createElement('button');
    completeBtn.innerText = '✅';
    completeBtn.classList.add('innerBtn');
    completeBtn.onclick = function () {
      li.classList.toggle('completed');
    };
    li.appendChild(completeBtn);

    // Edit task button
    const editBtn = document.createElement('button');
    editBtn.innerText = '✍️'; //'📝'
    editBtn.classList.add('innerBtn');
    editBtn.onclick = function (e) {
      try {
        // Get the new value inside the text input
        task = taskInput.value;
        taskManagerValues.edit = task;

        validateEditTaskManager(taskManagerValues);

        // Hide the error message
        errorText.classList.add('hidden');
        errorText.classList.remove('errorMessage');

        task = capitalizeFirstLetter(task);
        li.firstChild.textContent = task; // Update the value of the first child (Text)

        // Empty the text input
        taskInput.value = '';
      } catch (error) {
        // Message to be showned on the UI
        errorText.textContent = error.message;
        errorText.classList.add('errorMessage');
        errorText.classList.remove('hidden');

        // Message to be showned on the console
        showErrorMessageToConsole(
          `addTask => ${error.name} : ${error.message}\n${error.stack}`
        );
      }
    };
    li.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = '❌';
    deleteBtn.classList.add('innerBtn');
    deleteBtn.onclick = function () {
      li.remove();
    };
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Empty the text input
    taskInput.value = '';
  } catch (error) {
    // Message to be showned on the UI
    errorText.textContent = error.message;
    errorText.classList.add('errorMessage');
    errorText.classList.remove('hidden');

    // Message to be showned on the console
    showErrorMessageToConsole(
      `addTask => ${error.name} : ${error.message}\n${error.stack}`
    );
  }
}

function filterTasks() {
  // Implement the filter functionality
  const searchInput = document.getElementById('searchInput').value;
  const items = document.querySelectorAll('ul#taskList li');
  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(searchInput.toLowerCase())
      ? 'block'
      : 'none';
  });
}
