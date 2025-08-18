'use strict';
console.log('Day 18 Task of 40 days of JavaScript.');

/*
  2. Add, delete, and search rows in a dynamic table

  - A form to add rows (Name, Age, Role).
  - Each row should have a “Delete” button to remove it.
  - Add a search input that filters the rows by name.
  - Use insertRow, deleteRow, and textContent/innerText.
 */

// Capitalize the first letter of an input text
function capitalizeFirstLetter(input) {
  let output = '';
  if (!input) return;
  output = input[0].toUpperCase().concat(input.slice(1));
  return output;
}

const form = document.createElement('form');
form.setAttribute('id', 'formData');

const personName = document.createElement('input');
personName.setAttribute('id', 'name');
personName.setAttribute('type', 'text');
personName.setAttribute('placeholder', "Person's name");
personName.setAttribute('autocomplete', 'true');
form.appendChild(personName);

const age = document.createElement('input');
age.setAttribute('id', 'age');
age.setAttribute('type', 'number');
age.setAttribute('placeholder', "Person's age");
form.appendChild(age);

const role = document.createElement('input');
role.setAttribute('id', 'role');
role.setAttribute('type', 'text');
role.setAttribute('placeholder', "Personn's role");
form.appendChild(role);

const search = document.createElement('input');
search.setAttribute('id', 'search');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Search ...');
form.appendChild(search);

const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add');
addBtn.setAttribute('type', 'button');
addBtn.innerText = 'Add';
form.appendChild(addBtn);

document.body.appendChild(form);

const table = document.createElement('table');
table.setAttribute('id', 'table');
table.setAttribute('border', 1);

const tableHeader = table.createTHead();
const rowHeader = tableHeader.insertRow(0);

// Create table header
const header1 = document.createElement('th');
const headerText1 = document.createTextNode('Name');
header1.appendChild(headerText1);
rowHeader.appendChild(header1);

const header2 = document.createElement('th');
const headerText2 = document.createTextNode('Age');
header2.appendChild(headerText2);
rowHeader.appendChild(header2);

const header3 = document.createElement('th');
const headerText3 = document.createTextNode('Role');
header3.appendChild(headerText3);
rowHeader.appendChild(header3);

const header4 = document.createElement('th');
const headerText4 = document.createTextNode('Action');
header4.appendChild(headerText4);
rowHeader.appendChild(header4);

// Table body
const tableBody = document.createElement('tbody');

// const cell2 = row.insertCell(1);
// const cell3 = row.insertCell(2);

// cell1.innerText = 'Text1';
// cell2.innerText = 'Text2';
// cell3.innerText = 'Text3';

// tableBody.appendChild(row);
table.appendChild(tableHeader);
table.appendChild(tableBody);

// const row = dynamicTable.insertRow(1);
// dynamicTable.appendChild(row);

// document.body.appendChild(dynamicTable);
// row = table.insertRow(0)
// cel1 = row.insertCell(0)
// cel2 = row.insertCell(1)
document.body.appendChild(table);

personName.focus();
personName.blur();

// Add button action
addBtn.addEventListener('click', function () {
  const nameInput = document.querySelector('#name');
  const ageInput = document.querySelector('#age');
  const roleInput = document.querySelector('#role');

  if (!nameInput.value.trim()) {
    nameInput.classList.add('inputError');
    return;
  } else {
    nameInput.value = capitalizeFirstLetter(nameInput.value);
    nameInput.classList.remove('inputError');
  }

  if (!ageInput.value.trim()) {
    ageInput.classList.add('inputError');
    return;
  } else {
    ageInput.value = capitalizeFirstLetter(ageInput.value);
    ageInput.classList.remove('inputError');
  }

  if (!roleInput.value.trim()) {
    roleInput.classList.add('inputError');
    return;
  } else {
    roleInput.value = capitalizeFirstLetter(roleInput.value);
    roleInput.classList.remove('inputError');
  }

  // Create table body
  const rowBody = tableBody.insertRow(0);

  // Add values
  const cellName = rowBody.insertCell(0);
  const textName = document.createTextNode(nameInput.value);
  cellName.appendChild(textName);

  const cellAge = rowBody.insertCell(1);
  const textAge = document.createTextNode(ageInput.value);
  cellAge.appendChild(textAge);

  const cellRole = rowBody.insertCell(2);
  const textRole = document.createTextNode(roleInput.value);
  cellRole.appendChild(textRole);

  const cellDelete = rowBody.insertCell(3);
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'deleteItem');
  deleteBtn.innerText = '❌';
  cellDelete.appendChild(deleteBtn);

  cellDelete.addEventListener('click', function () {
    rowBody.remove();
  });

  nameInput.focus();
});

// Add event listener to search on key up
search.addEventListener('keyup', function () {
  const tableData = document.getElementById('table');
  console.log(tableData.childNodes);
  console.log(tableData.childNodes[1].childNodes);
  console.log(tableData.childNodes[1]);
  console.log(tableData.childNodes[1].firstChild.firstChild.innerText);
  console.log(tableData.childNodes[1].childNodes);
});
