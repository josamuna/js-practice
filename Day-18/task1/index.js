'use strict';
console.log('Day 18 Task of 40 days of JavaScript.');

/*
  1. Create a form dynamically using JavaScript and manipulate its behavior

  - Add input fields dynamically based on user selection e.g., text, email, number
  - Add a submit button that logs all the input values as an object.
  - Add a reset button that clears the form.
  - Use createElement, appendChild, setAttribute, and addEventListener.
 */

const text = document.createElement('input');
text.setAttribute('id', 'text');
text.setAttribute('type', 'text');
text.setAttribute('placeholder', 'Add a text');
text.classList.add('input');

const email = document.createElement('input');
email.setAttribute('id', 'email');
email.setAttribute('type', 'email');
email.setAttribute('placeholder', 'youremail@example.com');
email.setAttribute('autocomplete', 'true');
email.classList.add('input');

const number = document.createElement('input');
number.setAttribute('id', 'number');
number.setAttribute('type', 'number');
number.setAttribute('placeholder', 'Provide a number');
number.classList.add('input');

const submitBtn = document.createElement('button');
submitBtn.setAttribute('id', 'submit');
submitBtn.setAttribute('type', 'submit');
submitBtn.innerText = 'Submit';
submitBtn.classList.add('btn');

const resetBtn = document.createElement('button');
resetBtn.setAttribute('id', 'reset');
resetBtn.setAttribute('type', 'reset');
resetBtn.innerText = 'Reset';
resetBtn.classList.add('btn');

// Append Element on the body
document.body.appendChild(text);
document.body.appendChild(email);
document.body.appendChild(number);

document.body.appendChild(submitBtn);
document.body.appendChild(resetBtn);

// Set text focus
text.focus();

// Get field reference
const textInput = document.querySelector('#text');
const emailInput = document.querySelector('#email');
const numberInput = document.querySelector('#number');

// Handle submit action
submitBtn.addEventListener('click', function () {
  if (!textInput.value) {
    textInput.classList.add('inputError');
    return false;
  } else {
    textInput.classList.remove('inputError');
  }

  if (!emailInput.value) {
    emailInput.classList.add('inputError');
    return false;
  } else {
    emailInput.classList.remove('inputError');
  }

  if (!numberInput.value) {
    numberInput.classList.add('inputError');
    return false;
  } else {
    numberInput.classList.remove('inputError');
  }
  const objData = {
    text: textInput.value,
    email: emailInput.value,
    number: numberInput.value,
  };
  // Print object values
  console.log(objData);
});

// Handle reset action
resetBtn.addEventListener('click', function () {
  textInput.value = '';
  emailInput.value = '';
  numberInput.value = '';
  textInput.focus();
});
