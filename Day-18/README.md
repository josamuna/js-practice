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

> To add a text dynamically inside a paragraph, the _`innerText`_ is most of time used. Once, it is appear in the **left side**, we set something in the paragraph, and when it if locate at the **right side**, we featch value from it. Finally, to add an Element on the body, we have to attach, and to access the body, we have to traversing the Root Node by using _`document.body.appendChild(Element)`_.

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
pElem.innerText = '<u>Hello</u>';

// innerHTML
const pElem = document.querySelector('p');
pElem.innerHTML = '<u>Hello</u>';
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

> We can read properties using the _`getAttribute()`_ method. To write an attribute, we use the _`setAttribute('attributeName', 'attributeValue')`_ method. To remove an attribute, we use the _`removeAttribute('attributeName')`_. The method _`hasAttribute('attributeName')`_ allows you to check whether an element has or does not have the specified attribute. This method returns **true** or **false** once the attribute exists or not.

```html
<img src="image" alt="A Cat" />
```

```js
// Get attribute value.
const imgElem = document.querySelector('img');
console.log(imgElem.getAttribute('src'));
console.log(imgElem.getAttribute('alt'));
```

```html
<a>This is my link</a>
```

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

> Traversing or navigating DOM means **Navigating through the DOM hierarchy**.

### 6.1. parentElement and parentNode

```html
<div id="main-id">
  <p class="info">
    <span class="text">I love DOM</span>
  </p>
</div>
```

```js

```

## 7. Manipulating Styles

```js

```

## 8. Manipulating Classes

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
