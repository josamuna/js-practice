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
- ✅ Working with classLIst
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

> Traversing or navigating DOM means **Navigating through the DOM hierarchy**. This can be achieved by using a lot of methods or properties. First with properties _`parentElement`_ and _`parentNode`_. parentElement can be used recursively by adding a dot to retreive the parent of a parent element. These properties can be used interchangeably.

> Second with properties for children element, _`children`_ (return an _HTMLCollection_ which is an array like: It get only element and not all nodes) and _`childNodes`_ (return a **NodeList** and all nodes: text, li, etc.). Comments are also considered as node. Most of the time, children is used to get only element.

> _`firstChild`_, _`firstElementChild`_, _`lastChild`_ and _`lastElementChild`_ properties can be used to get the corresponding Element everything (including Nodes and Elements) of a specific node as their names suggest.

> _`nextSibling`_ and _`nextElementSibling`_ work the same as previous properties, but for subling (Nodes or Element).

**Notice**: Element are which maps with HTML Element.

### 6.1. parentElement and parentNode

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

//children and childNodes
const mainElement = document.getElementById('main-id');
console.log('Children : ', mainElement.children);
console.log('Child Nodes : ', mainElement.childNodes);

// fistChild, lastChild, firstElementChild and lastElementchild.
const mainElement = document.getElementById('main-id');
console.log('First Child : ', mainElement.firstChild);
console.log('First Element Child : ', mainElement.firstElementChild);

console.log('Last Child : ', mainElement.lastChild);
console.log('Last Element Child : ', mainElement.lastElementChild);
```

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
// nextSibling, nextElementSibling, previousSibling, previousElementSibling.
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

> Each HTML Element has an attribute called "style," which can be used to style it using inline style.

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

> As the way we are manipulating HTML id, HTML class can also be manipulated. Class can be changed dynamically with the property _`className`_ (read and set). The use of this property is not a flexible choice when a lot of classes are used.

> That is the case _`classList`_ comes to picture. the main purpose of classlist is to help to **add** or **remove** class dynamically.

```html
<div id="main-id" class="main-class">
  <p id="p-id">I love DOM</p>
</div>
```

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

```js
const mainDivElem = document.getElementById('main-id');
mainDivElem.className = 'secondary-class';
console.log(mainDivElem.className);
```

## 9. Controlling Visibilities

```js

```

## 10. Build Project(s)

### 10.1. Project 1

```js

```

### 10.2. Project 2

```js

```

### 10.3. Project 3

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

## 2. Add, delete, and search rows in a dynamic table

- A form to add rows (Name, Age, Role).
- Each row should have a “Delete” button to remove it.
- Add a search input that filters the rows by name.
- Use insertRow, deleteRow, and textContent/innerText.

## 3. Theme Switcher with Persistence

- Toggle theme using a button or switch.
- Persist the theme in localStorage and apply on page load.
- Change background and text color based on the theme.
