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
personName.classList.add('input');
form.appendChild(personName);

const age = document.createElement('input');
age.setAttribute('id', 'age');
age.setAttribute('type', 'number');
age.setAttribute('placeholder', "Person's age");
age.classList.add('input');
form.appendChild(age);

const role = document.createElement('input');
role.setAttribute('id', 'role');
role.setAttribute('type', 'text');
role.setAttribute('placeholder', "Personn's role");
role.classList.add('input');
form.appendChild(role);

const search = document.createElement('input');
search.setAttribute('id', 'search');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Search ...');
search.classList.add('input');
form.appendChild(search);

const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add');
addBtn.setAttribute('type', 'button');
addBtn.innerText = 'Add';
addBtn.classList.add('btn');
form.appendChild(addBtn);

document.body.appendChild(form);

const table = document.createElement('table');
table.setAttribute('id', 'table');
// table.setAttribute('border', 1);

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

// Append Table Header and Table body to the table
table.appendChild(tableHeader);
table.appendChild(tableBody);
table.classList.add('tableStyle');

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
  cellDelete.style.textAlign = 'center';
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('id', 'deleteItem');
  deleteBtn.innerText = '❌';
  deleteBtn.classList.add('innerBtn');
  cellDelete.appendChild(deleteBtn);

  cellDelete.addEventListener('click', function () {
    rowBody.remove();
  });

  personName.value = '';
  age.value = '';
  role.value = '';
  personName.focus();
});

// Add event listener to search on key up
search.addEventListener('keyup', function () {
  // Get Table and input reference
  const tableData = document.querySelector('#table');
  const searchInput = document.querySelector('#search').value;

  // The rows of table. The first childNode is Table header and the second the Table body
  const rows = tableData.childNodes[1].childNodes;

  // Iterate each rows to found an text match to apply a the correct style
  rows.forEach((row) => {
    row.style.display = row.firstChild.innerText
      .toLowerCase()
      .includes(searchInput.toLowerCase())
      ? '' // When match, any style is apply
      : 'none'; // When no match hide the row.

    // Code using if ... else
    // if (
    //   row.firstChild.innerText.toLowerCase().includes(searchInput.toLowerCase())
    // ) {
    //   // Match is found
    //   console.log('found');
    //   row.style.display = '';
    // } else {
    //   row.style.display = 'none';
    // }
  });
});
