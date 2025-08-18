# js-practice

## **🎯 Goal of This Lesson - DOM Manipulations**

- ✅ Module 3 & DOM
- ✅ Intro to DOM Manipulation
- ✅ What Will We Learn?
- ✅ Create Elements
- ✅ Inserting Elements - Before
- ✅ Inserting Elements - After
- ✅ Modify Content - innerHTML
- ✅ Security Risk of innerHTML
- ✅ Modify Content - textContent
- ✅ Removing Elements
- ✅ Travarsing DOM
- ✅ Manipulating Styles
- ✅ Manipulating Classes
- ✅ Working with classList
- ✅ Controlling Visibility
- ✅ Project 1 - Toggle Me
- ✅ Project 2 - Task Manager
- ✅ Tasks and Wrapping Up

---

# Keys Points of the video

This session will be all about DOM only.

## 1. Creating Elements

> To be able to create dynamically DOM elements, an API called _`createElement`_ make it faisible by creating some **DOM Nodes**. e.g. paragraphe, div, etc.

> To add a text dynamically inside a paragraph, the _`innerText`_ is most of time used. Once, it is appear in the **left side**, we set something in the paragraph, and when it is located on the **right side**, we fetch the value from it. Finally, to add an element to the body, we have to attach it, and to access the body, we must traverse the root node by using _`document.body.appendChild(Element)`_.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Day 18 Task</title>
  </head>
  <body>
    <h1>Day 18 Task of 40 days of JavaScript</h1>
    <p>Happy to learn 40 days of JavaScript</p>
  </body>
  <script defer src="./index.js"></script>
</html>
```

```js
const pElem = document.createElement('p');
pElem.innerText = 'This is a text added dynamically';
document.body.appendChild(pElem);
```

## 2. Inserting Elements

> While creating an Element helps to attach it to the DOM hierarchy, but _`inserting an Elelemnt`_ gives more dynamically natured behavior. `For exemple add an Element before or after a specific paragraph`. This could be done with _`document.body.insertBefore(span, pElem)`_ or _`document.body.insertBefore(span, pElem.nextElementSibling)`_ to simulate inserting after (meaning before the next sibling of the Element). The body (or the direct parent of the node to add before or after) should be invoked to access the parent of the current node, otherwirse, an error will be raised like that: _Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node_.

nextSibling Element is the next node of another. It can be accessed with the property _`nextElementSibling`_ of a Node Element.

```js
// Adding span before a paragraph.
const span = document.createElement('span');
span.innerText = 'I am a Span';
const pElem1 = document.querySelector('p');
document.body.insertBefore(span, pElem1);

// Adding a paragraph before a h1.
const para = document.createElement('p');
para.innerText = 'Para added before H1';
const h1Elem = document.querySelector('h1');
document.body.insertBefore(para, h1Elem);
```

```html
<body>
  <h1>Day 18 Task of 40 days of JavaScript</h1>
  <p>Happy to learn 40 days of JavaScript</p>
  <h2>A new Heading</h2>
</body>
```

```js
// Adding span before the next subling of a paragraph.
const span = document.createElement('span');
span.innerText = 'I am a Span';
const pElem = document.querySelector('p');
document.body.insertBefore(span, pElem.nextElementSibling);
```

When _`null`_ is passed as the second argument of _`insertBefore`_, the Element will be the last one. e.g.

```js
document.body.insertBefore(span, null);
```

## 3. Modifying Content

> To modify content, three properties can be used: _`innerText`_, _`innerHTML`_, or _`textContent`_. The difference between them is that when using innerHTML, we can pass **a complete markup** but innerText just use ** plain text**. The big issue of innerHTML is `the potential security breach` that it can be involved when used in an improper way, mainly the **XSS** (Cross site scripting attack, when an attacker injects a malicious script or string in your application). A possible scenario can be on a form that accepts user input, and an input field is used to get back user feedback, and an attacker can add malicious code inside this input field and may get it executing somewhere.

> The difference between innerText and textContent is that **innerText has not the CSS visibility but textContent consider it**.

**Notice**: Avoid using innerHTML; instead, use library like [_DOMPurify_]("https://www.npmjs.com/package/dompurify").

```js
// innerText
const pElem = document.querySelector('p');
pElem.innerText = '<u>Hello</u>'; // Plain text and shows the tag as it is.

// innerHTML
const pElem = document.querySelector('p');
pElem.innerHTML = '<u>Hello</u>'; // Format the text by underlining it.
```

**innerText and textContent**

```html
<div>
  <h2 style="display: none">Test</h2>
</div>
```

```js
const divElm = document.querySelector('div');
console.log('innerText: ', divElm.innerText); // Print nothing because the CSS Visibility is none.
console.log('textContent: ', divElm.textContent); // Print Test because has the CSS Visibility.
```

## 4. Removing Elements

> The _`remove()`_ method allows you to remove an element by traversing the DOM. The same result can also be achieved by using the _`removeChild(item)`_ method. The _`replaceChildren()`_ method can also be used with a bunch of arguments. This method can add a lot of Element at the same time; just separate them by commas.

```html
<ul id="myList">
  <li>A</li>
  <li>B</li>
  <li>C</li>
  <li>D</li>
  <li>E</li>
</ul>
```

```js
// remove() method
const list = document.querySelector('#myList');
const firstItemToRemove = list.children[0];
firstItemToRemove.remove();

// Remove an element directly
document.getElementById('myDiv').remove();

// Remove li by using innerText or textContent
list.innerText = ''; // Not working somethime like I
list.textContent = '';
```

```js
// removeChild() method
const list = document.querySelector('#myList');
const firstItemToRemove = list.children[0];
list.removeChild(firstItemToRemove);
```

```js
// Remove using replaceChildren()
list.replaceChildren();

// Remove using replaceChildren() by adding another Element
const pElem = document.querySelector('p');
list.replaceChildren(pElem);
```

## 5. Read, Write and Remove Attributes

> We can read properties using the _`getAttribute()`_ method. To write an attribute, we use the _`setAttribute('attributeName', 'attributeValue')`_ method. To remove an attribute, we use the _`removeAttribute('attributeName')`_. The method _`hasAttribute('attributeName')`_ allows you to check whether an element has or not the specified attribute. This method returns **true** or **false** once the attribute exists or not.

HTML

```html
<img src="image" alt="A Cat" />
```

JS

```js
// Get attribute value.
const imgElem = document.querySelector('img');
console.log(imgElem.getAttribute('src'));
console.log(imgElem.getAttribute('alt'));
```

HTML

```html
<a>This is my link</a>
```

JS

```js
// Add attribute.
const linkElem = document.querySelector('a');
linkElem.setAttribute('href', 'https://www.google.com');
console.log(linkElem.getAttribute('href'));
```

```js
// Remove attribute.
linkElem.removeAttribute('href');
console.log(linkElem.getAttribute('href')); // null
```

```js
console.log(linkElem.hasAttribute('href')); // true if the attribute exists, otherwise false.
console.log(linkElem.hasAttribute('img')); // false
```

## 6. Traversing / Navigating DOM

Traversing or navigating DOM means **Navigating through the DOM hierarchy**. This can be achieved by using a lot of methods or properties.

**Notice**: Element are which maps with HTML Element.

### 6.1. parentElement and parentNode

> By using the properties _`parentElement`_ and _`parentNode`_. **parentElement** can be used recursively by adding a dot to retreive the parent of a parent element. **These properties can be used interchangeably**.

HTML

```html
<div id="main-id">
  <p class="info">
    <span id="text">I love DOM</span>
  </p>
  <!-- This is a comment -->
</div>
```

JS

```js
const spanElem = document.getElementById('text');

// Same result with parentNode <p class="info"><span id="text">I love DOM</span></p>
console.log('Parent Element', spanElem.parentElement);
console.log('Parent Node', spanElem.parentNode);

// using parentElement as many it is needed. Same result with
// <div id="main-id"><p class="info"><span id="text">I love DOM</span></p></div>
console.log(
  'Parent Element of Parent Element',
  spanElem.parentElement.parentElement
);
console.log('Parent Node of Parent Node', spanElem.parentNode.parentNode);
console.log('Parent Node of Parent Element', spanElem.parentNode.parentElement);
```

### 6.2. children and childNodes

> Second with properties for children element, _`children`_ (return an _HTMLCollection_ which is an array like: It get only element and not all nodes) and _`childNodes`_ (return a **NodeList** and all nodes: text, li, etc.). **Node** means _everything get attached to the DOM_ (HTML Tag, text and everything) and **Element** _represents HTML Element_ (HTML Tag). Comments are also considered as node. Most of the time, children is used to get only element.

HTML

```html
<div id="main-id">
  <p class="info">
    <span id="text">I love DOM</span>
  </p>
  <!-- This is a comment -->
</div>
```

JS

```js
//children and childNodes
const mainElement = document.getElementById('main-id');
console.log('Children : ', mainElement.children);
console.log('Child Nodes : ', mainElement.childNodes);
```

### 6.3. fistChild, lastChild, firstElementChild and lastElementchild

> _`firstChild`_ and _`lastChild`_ properties are used to get the corresponding Nodes (everthing). _`firstElementChild`_, and _`lastElementChild`_ properties are used to get the corresponding Element (only HTML Elements).

HTML

```html
<div id="main-id">
  <p class="info">
    <span id="text">I love DOM</span>
  </p>
  <!-- This is a comment -->
</div>
```

JS

```js
const mainElement = document.getElementById('main-id');
console.log('First Child : ', mainElement.firstChild);
console.log('First Element Child : ', mainElement.firstElementChild);

console.log('Last Child : ', mainElement.lastChild);
console.log('Last Element Child : ', mainElement.lastElementChild);
```

### 6.4. nextSibling, nextElementSibling, previousSibling, previousElementSibling

> _`nextSibling`_, _`previousSibling`_, _`nextElementSibling`_ and _`previousElementSibling`_ properties work the same as previous properties, but for subling (Nodes or Element).

HTML

```html
<div id="div-traversing">
  <h1 id="something-id">Something</h1>
  <p id="something-id2">Something More</p>
  <p id="something-id3">Something Even more</p>
</div>
```

JS

```js
const mainDivTraversing = document.getElementById('div-traversing');

console.log('Next Sibling : ', mainDivTraversing.nextSibling);
console.log('Next Element Sibling : ', mainDivTraversing.nextElementSibling);

console.log('Previous Sibling : ', mainDivTraversing.previousSibling);
console.log(
  'Previous Element Sibling : ',
  mainDivTraversing.previousElementSibling
);

const header = document.getElementById('something-id');
console.log('Next Sibling of h1 : ', header.nextSibling); // text
console.log('Next Element Sibling of h1 : ', header.nextElementSibling); // p with something-id2

const p1 = document.getElementById('something-id2');
console.log('Next Sibling of p1 : ', p1.nextSibling); // text
console.log('Next Element Sibling of p1 : ', p1.nextElementSibling); // p with something-id3

const p2 = document.getElementById('something-id3');
console.log('Next Sibling of p2 : ', p2.nextSibling); // text
console.log('Next Element Sibling of p2 : ', p2.nextElementSibling); // null. Element has any Element Sibling
```

## 7. Manipulating Styles

> Each HTML Element has an attribute called "style," which can be used to style it using inline style. As the CSS properties use hyphen, in JS Code the Camel Case is used because to avoid getting errors.

Styling in HTML directly

```html
<h2 style="background-color: green; color: white;">Something</h2>
```

To be used dynamically, we use this property in JS code.

```html
<body>
  <h1>Day 18 Task of 40 days of JavaScript</h1>
  <p id="p-id">Life is good</p>
</body>
```

```js
const pElem = document.getElementById('p-id');
pElem.style.backgroundColor = 'green';
pElem.style.color = 'white';
```

## 8. Manipulating Classes

### 8.1. The className property

> As the way we are manipulating HTML id, HTML class can also be manipulated. Class can be changed dynamically with the property _`className`_ (read and set). The use of this property is not a flexible choice when a lot of classes are used. That is the case _`classList`_ comes to picture.

HTML

```html
<div id="main-id" class="main-class">
  <p id="p-id">I love DOM</p>
</div>
```

CSS

```css
.main-class {
  font-size: large;
  padding: 2px;
  border: 2px solid red;
  background-color: pink;
  border-radius: 5px;
}

.secondary-class {
  font-size: large;
  padding: 2px;
  border: 2px solid green;
  background-color: teal;
  border-radius: 5px;
}
```

JS

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.className = 'secondary-class';
console.log(mainDivElem.className);
```

### 8.2. The classList property

> the main purpose of classlist is to help to **add** or **remove** classes dynamically. It is also help doing conditional checking to know if a specific class is added or not. The classList proerty returns a _`DOMTokenList`_ type as a data structure.

HTML

```html
<div id="main-id" class="main-class layout">
  <p id="p-id">I love DOM</p>
</div>
```

> This property allows to access a bunch of methods or properties. For example:

1. _`add`_: Add a new class.

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.classList.add('test');
```

2. _`remove`_: Remove a class.

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.classList.remove('layout');
```

3. _`replace`_: Changes a class with another.

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.classList.replace('main-class', 'secondary-class');
```

4. _`contains`_: Check whether an Element contains the specified calss passed as argument.

```js
const mainDivElem = document.getElementById('main-id');
console.log('Does it have test? ', mainDivElem.classList.contains('test')); // flase
console.log(
  'Does it have secondary-class? ',
  mainDivElem.classList.contains('secondary-class')
); // true
```

5. _`toggle`_: It first internally checked if the class is added or not. If it is added, it removes it, and if is not added, it add it. So, reduce the number of needed code to write.

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.classList.toggle('test'); // test class will be added because it is not there.
mainDivElem.classList.toggle('test'); // test class is there, then removes it.
```

6. _`entries`_: Returns all the classes in form of keys-values pairs as array iterator and to be able to work with each class.

```js
const mainDivElem = document.getElementById('main-id');
for (let [key, value] of mainDivElem.classList.entries()) {
  console.log(key, value); // 0 'main-class' then 01 'layout'
}
```

7. _`values`_: Returns only all the classes as array iterator and to be able to work with each class.

```js
const mainDivElem = document.getElementById('main-id');
for (let value of mainDivElem.classList.entries()) {
  console.log(value); // main-class then layout
}
```

8. _`keys`_: Returns only all the classes key as array iterator and to be able to work with each class key.

```js
const mainDivElem = document.getElementById('main-id');
for (let key of mainDivElem.classList.keys()) {
  console.log(key); // 0 then 1
}
```

## 9. Controlling Visibilities

> Visibility can be controlled dynamically with JS by using some properties. _`display`_ (mainlly accepts values **none**, **inline** or **block** but remains using the space on the web page even if Element has value **none** to be hidden), _`visibility`_ (mainlly accepts values hidden but doesn't use more space on the web page when has value **hidden**) and _`opacity`_(gets value between **0** to **1**). opacity with value **'0'** also occupyied the space even if the element is not visible as display with value **'none'**.

HTML

```html
<div id="main-id" class="main-class layout">
  <p id="p-id">I love DOM</p>
</div>
```

JS

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.style.display = 'block'; // none, inline or block
```

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.style.visibility = 'hidden';
```

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.style.opacity = '0.2';
```

## 10. Build Project(s)

### 10.1. Project 1 - Toggle Paragraph Example

The project code is under project folder, precisely [./Day-18/projects/toggle/ui.html](#) folder.

![Image](https://github.com/user-attachments/assets/0aada338-9b1c-4b89-983e-434480d111d7)

### 10.2. Project 2 - Task Manager

The project code is inside project folder, precisely [./Day-18/projects/todo/ui.html](#) folder.

![Image](https://github.com/user-attachments/assets/801daa0e-3907-4ee6-8ef7-e0efb7ecf5b2)

![Image](https://github.com/user-attachments/assets/5737b8ae-e79c-4468-8515-125e9caeb0dc)

```js

```

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-18]](https://youtu.be/BoYgn_Mf0hA 'Video')

# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a form dynamically using JavaScript and manipulate its behavior

- Add input fields dynamically based on user selection e.g., text, email, number
- Add a submit button that logs all the input values as an object.
- Add a reset button that clears the form.
- Use createElement, appendChild, setAttribute, and addEventListener.

HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./ui.css" />
    <title>Day 18 Task</title>
  </head>
  <body>
    <h1 id="header">Day 18 Task of 40 days of JavaScript</h1>
  </body>
  <script defer src="./index.js"></script>
</html>
```

CSS

```css
body {
  background-color: #e7e8ef;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.roboto {
  font-family: 'Roboto', sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

.btn {
  font-size: large;
  color: white;
  border-color: rgb(71, 71, 243);
  background-color: rgb(3, 93, 247);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.input {
  font-size: large;
  padding: 10px 20px;
  margin: 5px;
  border-style: none;
  border-radius: 5px;
}

.inputError {
  border-color: red;
  border-style: solid;
}
```

JS

```js
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
```

## Screenshots for Task 1

![Image](https://github.com/user-attachments/assets/d4a63795-eab2-4541-8d76-b8248ece0274)

![Image](https://github.com/user-attachments/assets/a36c9555-5ce7-443b-89fa-82bd6e8e50ff)

## 2. Add, delete, and search rows in a dynamic table

- A form to add rows (Name, Age, Role).
- Each row should have a “Delete” button to remove it.
- Add a search input that filters the rows by name.
- Use insertRow, deleteRow, and textContent/innerText.

HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./ui.css" />
    <title>Day 18 Task</title>
  </head>
  <body>
    <h1 id="header">Day 18 Task of 40 days of JavaScript - Task 2</h1>
  </body>
  <script defer src="./index.js"></script>
</html>
```

CSS

```css
body {
  background-color: #d6d7de;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0px;
  padding: 0px;
}

.roboto {
  font-family: 'Roboto', sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-variation-settings: 'wdth' 100;
}

.btn {
  font-size: large;
  color: white;
  border-color: rgb(71, 71, 243);
  background-color: rgb(3, 93, 247);
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

h1 {
  margin: 20px;
  color: rgb(17, 2, 132);
}
```

JS

```js
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
```

## Screeshots

![Image](https://github.com/user-attachments/assets/34eb908f-04b2-4a9a-8830-0e28720507d0)

![Image](https://github.com/user-attachments/assets/75fafc62-3972-44f4-bc7a-65c76e58e6d5)

## 3. Theme Switcher with Persistence

- Toggle theme using a button or switch.
- Persist the theme in localStorage and apply on page load.
- Change background and text color based on the theme.
