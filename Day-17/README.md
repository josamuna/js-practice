# js-practice

## **🎯 Goal of This Lesson**

- ✅ Module 3 & DOM
- ✅ Expense Tracker Project
- ✅ What is DOM?
- ✅ DOM and JavaScript
- ✅ What else to Cover?
- ✅ DOM Types
- ✅ Accessing DOM
- ✅ Get Element By ID
- ✅ Get Element By Class Name
- ✅ Get Element By Tag Name
- ✅ Query Selector
- ✅ Query Selector All
- ✅ Mini Project 1
- ✅ Mini Project 2
- ✅ About Task
- ✅ Playing With DOM on DevTools

---

# Keys Points of the video

## 1. Expense Tracker Project

> Completed and available on this link : [Expense Tracker Poject Link](https://github.com/js-practice/tree/main/project-assignment/expense-traker-project)

## 2. What is DOM?

> When the browser load HTML page, each element is organized as a tree like structure called _`the DOM`_. This structure has node that represent **HTML Document**. The root of this tree is called _`document`_.

> The **DOM** (_Document Object Model_) is a programing interface (an **API**) for web document and make able to structure the Html document. Is not a programing language but allow us to interact with dynamically with a html document.

## 3. DOM Types

### 3.1. Document

> _`Document`_ is the root node. It represent the entire document.

```js
console.log(document); // allow to get all the node structure with sub items like.
console.log('Document title: ', document.title); // Print the document title => Day 17 Task.
console.log('Document body: ', document.body); // Print the entire body tag content.
console.log('Document URL: ', document.URL); // Print the Base document url => http://127.0.0.1:5500/Day-17/
```

### 3.2. Node

> _`Node`_ is a generic term for any elements in the DOM tree. Is could be **Element Node**, **Text Node** or **Attribute Node**.

### 3.3. Element

> _`Element`_ is a specific type of node that represents HTML tags/elements.

### 3.4. NodeList

> _`NodeList`_ is an array of Nodes. This is an **order list** or **array**.

### 3.5. Attr

> _`Attr`_ represents the attribute of a node.

```js
// <img src="/" alt="some image" />
// Attributes are src and alt.
```

### 3.6. NameNodeMap

> _`NameNodeMap`_ is a collection of Attr (attributes). _Instead of an array, is a collection_.

## 4. DOM and JavaScript

> Using JavaScript, we are able to access HTML element easily. They are lot of way to access the DOM elements.

## 5. Get Element By ID

> Use the _`id`_ attribute of an element to be accessed.

```js
const titleElem = document.getElementById('heading');
console.log(titleElem);
```

## 6. Get Element By Class Name

> Select the element using the _`class`_ attributes. The main difference between id and class is that **id is unique** but **class can be repeated**

```js
const infoElem = document.getElementsByClassName('info');
console.log(infoElem);
[...infoElem].forEach((element) => {
  console.log(element);
});
```

## 7. Get Element By Tag Name

> This is done by using only the _element_ or _tag name_.

```js
const pTagElem = document.getElementsByTagName('p');
console.log(pTagElem);
[...pTagElem].forEach((element) => {
  console.log(element);
});
```

## 8. Query Selector

> _`querySelector`_ is an API of DOM responsible to return the first matching element where a **CSS Selector** is passed as parameter.

```js
const para = document.querySelector('p.info');
console.log(para);

const home = document.querySelector('#heading');
console.log(home);
```

## 9. Query Selector All

> _`querySelectorAll`_ instead of returning a single element like querySelector, return a _`NodeList`_. NodeList can be directly manipulated as an array. It also takes a **CSS Selector** as parameter.

```js
const paras = document.querySelectorAll('p.info');

console.log(paras[0]);
console.log(paras[1]);

paras.forEach((element) => {
  console.log(element);
});
```

## 10. Mini Project 1: Highlighther App

This project changes the colors of something (a paragraph) dynamically.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../Day-8/style.css" />
    <title>Day 17 Task</title>
  </head>
  <body>
    <h1 id="heading">Mini Project 1 - Highlighther</h1>
    <p class="info">First paragraph of the Mini project 1.</p>
    <p class="info">Second paragraph of the Mini project 1.</p>
    <button onclick="highlightText()">Highlight</button>
  </body>
  <script defer src="index.js"></script>
</html>
```

```js
function highlightText() {
  console.log('Log message');
  const elements = document.querySelectorAll('p.info'); // Return a NodeList (Can be loop through) instead of HTMLCollection
  elements.forEach((element) => {
    element.style.backgroundColor = 'yellow';
  });
}
```

## 11. Mini Project 2 - Search engine

> Performing search from a predined list using a text as fied to type from. To get an element as a text, we use the property **innerText**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../Day-8/style.css" />
    <title>Day 17 Task</title>
  </head>
  <body>
    <h1 id="heading">Mini Project 2 - Filter from the UI</h1>
    <input
      type="text"
      id="searchInput"
      placeholder="Search..."
      onkeyup="filterList()"
    />
    <ul id="itemList">
      <li>Apple</li>
      <li>Banana</li>
      <li>Cherry</li>
      <li>Grappes</li>
      <li>Oranges</li>
      <li>Mangoes</li>
      <li>Pineaple</li>
    </ul>
  </body>
  <script defer src="index.js"></script>
</html>
```

```js
// Remove the black point of li items
const items = document.querySelectorAll('ul#itemList li'); // Match all li inside ul with id itemList
items.forEach((element) => {
  element.style.listStyle = 'none';
});

function filterList() {
  const inputElem = document.getElementById('searchInput');
  const input = inputElem.value;
  items.forEach((item) => {
    // item.style.backgroundColor = item.innerText
    //   .toLowerCase()
    //   .includes(input.toLowerCase())
    //   ? 'green'
    //   : '';
    item.style.display = item.innerText
      .toLowerCase()
      .includes(input.toLowerCase())
      ? 'block'
      : 'none';
  });
}
```

## 12. Playing With DOM on DevTools

> The _`Elements Tab`_ represents the entire Html Page and we can inspect any element. In this Tab, the value of element can be changes directly wihout editing the main html file. In the same way, new elements can be dynamically manipulated by right-clicking on an element: We can **add**, **duplicate**, **edit**, **copy**, **cut**, **paste**, **delete**, **add attribute**, **edit attribute**, etc. an element.

> To have a direct access of a specific element on the console, just **select it on Elements Tab**, then type _`$0`_ on the console. It is also possible to store the expected element inside a global variable, just by **right-clicking on the element** from the console, and choose **store as global variable**. By default, it takes a variable name like _temp1_, _temp2_, etc.
> Then, this variable can be used to change the element behavior (color, width, etc.).
> eg.

```js
temp1.style.backgroundColor = 'pink';
```

> Once, your are not sure about what to pass to the _`querySelector()`_ or _`querySelectorAll()`_, you can get it directly from the DevTools itself. For that on the _Elements Tab_ **right-clicking** on an element, then choose **Copy**, then **Copy selector** and past it on the console to use it on your code and it will work properly. Other options are available like **Copy element**, **Copy outerHTML**, **Copy selector**, **Copy JS path**, **Copy styles**, **Copy XPath** and **Copy full XPath**.

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-17]](https://youtu.be/F4mVSaj6uls 'Video')

# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Find the Most Frequent Word in a Paragraph

Consider the follwoing HTML:

```html
<div id="text">This is a test. This test is only a test.</div>
```

Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

Hints:

- Use document.querySelector() or getElementById() to select the paragraph.
- Convert the text into an array of words.
- Use querySelector() to display the most frequent word along with the count inside another `<div>`.

**HTML File**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Day 17 Task</title>
  </head>
  <body>
    <h1 id="heading">Day 17 Task of 40 days of JavaScript</h1>
    <div id="text">This is a test. This test is only a test.</div>
    <div id="showText"></div>

    <ul id="cars">
      <li>BMW</li>
      <li>Mahindra</li>
      <li>Audi</li>
      <li>Toyota</li>
      <li>Honda</li>
      <li>Hundai</li>
      <li>Tata</li>
      <li>Suzuki</li>
    </ul>
    <p class="test">First test paragraph.</p>
    <p class="test">Second test paragraph.</p>
    <p id="40-days-js">Enjoy the 40 days of JavaScript.</p>
    <p id="capital" class="course">NEW COURSE WITH <em>TAPASCRIPT</em>.</p>
    <p class="course">Last course session with Tapas.</p>
  </body>
  <script defer src="./index.js"></script>
</html>
```

**JS File**

```js
const divElm = document.querySelector('#text');

// Split the string by space to get an array with each word.
const arrWord = divElm.innerText.split(' ');

// Get the frequence of each word inside an object.
const wordRepeated = arrWord.reduce((accu, word) => {
  accu[word] = (accu[word] || 0) + 1;
  return accu;
}, {});

// Get the maximun frequence of repetition from object values
const maximumFrequence = Math.max(...Object.values(wordRepeated));

// Finally, filter All objects which match the maximum repeated frequence and return it (them).
const mostRepeated = Object.keys(wordRepeated).filter((key) => {
  return wordRepeated[key] === maximumFrequence;
});

// Get div reference.
const divShowElm = document.querySelector('#showText');
let textToAppend = 'The most most repeated values is/are: \n'; // The word to append in the div.
mostRepeated.forEach((word) => {
  textToAppend += word + '\n';
});
textToAppend += `And each word is/are repeated ${maximumFrequence} time.`;
divShowElm.innerText = textToAppend;
divShowElm.style.backgroundColor = 'pink'; // applying a style to highliht the text.
```

## 2. Create a zebra pattern

Consider the following HTML:

```html
<ul id="cars">
  <li>BMW</li>
  <li>Mahindra</li>
  <li>Audi</li>
  <li>Toyota</li>
  <li>Honda</li>
  <li>Hundai</li>
  <li>Tata</li>
  <li>Suzuki</li>
</ul>
```

Now put alternate colors and background colors to each of the list tags. for example,

- If tne BMW is in white color text, the background should be in black color.
- Then for the next car it will be reversed, the color is black and the background is white.
- Then again the next one is white color and background black
- So on.

```js
const carsElm = document.querySelectorAll('#cars > li');
carsElm.forEach((element, index) => {
  if (index % 2 === 0) {
    // Even li
    element.style.backgroundColor = 'gray'; // black hidden the text content. Gray to allow to view text content.
  } else {
    element.style.backgroundColor === 'white';
  }
});
```

## 3. Write different ways we can access DOM and what they returns

```js
/* 
  DOM can be accessed using 
  1. getElementById()        => Return an Element using its ID
  2. getElementByClassName() => Return an HTMLCollection that match the class name
  3. getElementByTagName()   => Return an HTMLCollection that match the corresponding Tag names. 
  4. querySelector()         => Return a single the first matched element the criteria (ID, class or CSS Selector) passed as argument. 
  5. querySelectorAll()      => Return a NodeList (an order list) thant match the criteria (class os CSS Selector) passed as argument.
*/

// 1. getElementById()       => Return an Element using its ID
const paraJSElm = document.getElementById('40-days-js');
paraJSElm.style.color = 'red';

// 2. getElementByClassName()    => Return an HTMLCollection that match the class name
const paraTestElm = document.getElementsByClassName('test');
[...paraTestElm].forEach((element) => {
  element.style.marginLeft = '50px';
});

// 3. getElementByTagName()   => Return an Html Collection that match the corresponding Tag names.
const paraElm = document.getElementsByTagName('p');
[...paraElm].forEach((element) => {
  element.innerText = element.textContent + ' Text added using p Tag.';
});

// 4. querySelector()         => Return a single the first matched element the criteria (ID, class or CSS Selector) passed as argument.
const paraCapitalToLower = document.querySelector('p.course');
paraCapitalToLower.innerText = paraCapitalToLower.textContent.toLowerCase();

// 5. querySelectorAll()      => Return a NodeList (an order list) thant match the criteria (class os CSS Selector) passed as argument.
const allParaEl = document.querySelectorAll('p');
allParaEl.forEach((element) => {
  element.style.backgroundColor = 'yellow';
});
```

## 4. Find and Replace Text Inside a Page

Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.

## 5. Extract and Count Unique Links from a Page

Count all the unique hyperlinks (`<a>`) in a page and display their count.

## Screenshots

![Image]()

![Image]()
