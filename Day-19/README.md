# Day 19 - 40 Days of JavaScript

## **🎯 Goal of This Lesson - JavaScript Events**

- ✅ What Will We Learn Today?
- ✅ What is an Event?
- ✅ Event Handling in markup
- ✅ Event Handling in Script
- ✅ addEventListener
- ✅ removeEventListener
- ✅ Handling Multiple Listeners
- ✅ DOM Content Loaded
- ✅ Anatomy of Event Object
- ✅ Event Bubbling
- ✅ Event Capturing
- ✅ Event Delegation
- ✅ Stop Propagation
- ✅ Preventing Defaults
- ✅ Custom Events
- ✅ Project - FAQ
- ✅ The Task and Wrap Up

---

# Keys Points of the video

## 1. What is an Event?

> An **event** is just a signal that something happenened in the browser.
> eg. Someone click on a button, someone click on a ckeckbox, someone type something in a textbox, etc.

When a signal comme, we have to handle it by writing a proper function to capture the action a do something.

## 2. Event Handling in markup

> the way to handle the event on the markup is by using an attribute corresponding to the expected event name (in lower case mode as convention), like _`onclick`_, _`onkeyup`_, etc. Then the value of this attribute should be the function to call from JavaScript code.

HTML

```html
<button id="myBtn" onclick="handleClick()">Click Me</button>
```

JS

```js
function handleClick() {
  console.log('Button Clicked');
}
```

> When we have to passed an argument, just add it on the function called.

HTML

```html
<button id="myBtn" onclick="handleClick('Hello')">Click Me</button>
```

JS

```js
function handleClick(greeting) {
  console.log('Button Clicked with, ' + greeting);
}
```

## 3. Event Handling in Script

> Instead of handling event in markup, we can do thand directly from script because most of time the UI is generated from script code itself.

HTML

```html
<button id="myBtn2">Click Me 2</button>
```

JS

```js
// Get button reference
const myBtn2Elm = document.getElementById('myBtn2');
myBtn2Elm.onclick = function () {
  console.log('My  Nutton 2 Clicked');
};
```

But there is a problem, because we have defined the behavior of button click with a particular function. So, what will happended if we want to define another behavior? This will not be possible, because the new called will override the previous one.

```js
const myBtn2Elm = document.getElementById('myBtn2');

myBtn2Elm.onclick = function () {
  console.log('My  Nutton 2 Clicked');
};

// This click behavior will override the previous.
myBtn2Elm.onclick = function () {
  console.log('My  Nutton 2 Clicked Again');
};
```

> Another way to have the same result is by using named function called. When the function is referenced, the **()** should not be added because it is not _a call_ but just _a reference_ to the function.

```js
const myBtn2Elm = document.getElementById('myBtn2');

function handleClick() {
  console.log('My  Nutton 2 Clicked Again');
}

myBtn2Elm.onclick = handleClick;
```

> Once an argument should be passed, we can use an arrow function or a function called.

Function Called

```js
const myBtn2Elm = document.getElementById('myBtn2');

function handleClick(greeting) {
  console.log('My  Nutton 2 Clicked Again, ', greeting);
}

myBtn2Elm.onclick = function () {
  handleClick('Holla');
};
```

Arrow Function (More conscise in single line)

```js
const myBtn2Elm = document.getElementById('myBtn2');

function handleClick(greeting) {
  console.log('My  Nutton 2 Clicked Again, ', greeting);
}

myBtn2Elm.onclick = () => handleClick('Hello Hello');
```

## 4. addEventListener

> To mitigate this issue, the use of _`addEventListener`_ is the better way to handle event. The addEventListener takes three parameters. The two (**event type** like click, keyup, etc. and **the function handler**) are mandatory and the third is optional.

HTML

```html
<button id="countBtn">Count++</button>
```

JS

```js
let counter = 0;
myBtn2Elm.onclick = () => handleClick('Hello Hello');

const countBtnElm = document.getElementById('countBtn');
countBtnElm.addEventListener('click', function () {
  console.log('Counter: ', counter);
  counter++;
});
```

## 5. removeEventListener

> Without removing the event listener, the event will continous linked with the element. That why, is needed to removed an event.
> **Notice**: To avoid having _removeEventListener_ not work properly, it is recommanded to write the event listener handle function separately. This help to refeence the same function when the removeEventListener is hnadled.

Instead of doing this way:

```js
let counter = 0;
const countBtnElm = document.getElementById('countBtn');
countBtnElm.addEventListener('click', function () {
  console.log('Counter: ', counter);
  counter++;
});

countBtnElm.removeEventListener('click', function () {
  console.log('Counter: ', counter);
  counter++;
});
```

Do in this way:

```js
let counter = 0;
const countBtnElm = document.getElementById('countBtn');
const handleCount = function () {
  console.log('Counter: ', counter);
  counter++;
};

countBtnElm.addEventListener('click', handleCount);

countBtnElm.removeEventListener('click', handleCount);
```

## 6. Handling Multiple Listeners

> _`addEventListener`_ supports adding multiple events or function handlers.

```js
let counter = 0;
const countBtnElm = document.getElementById('countBtn');
const handleCount = function () {
  console.log('Counter: ', counter);
  counter++;
};

function greetMe() {
  console.log('Thank you');
}

countBtnElm.addEventListener('click', handleCount);
countBtnElm.addEventListener('click', greetMe);
```

As multiple functions are called, they are to be alse both removed.

## 7. DOM Content Loaded

> Many of the tine is needed to do an action when the DOM Content is completely loaded to avoid getting undefine (eg. Calling a button without being loaded from the DOM) or having wried behavior. For that, we use _`addEventListener`_ always.

```js
const checkDOMContentLoaded = function () {
  console.log('DOM Content Loaded...');
};

document.addEventListener('DOMContentLoaded', checkedDOMContentLoaded);
```

This allow to see the time the page gets to be loaded ans can be showned on the Network Tab (from the DevTools) at the bottom.

## 8. Anatomy of Event Object

Instead of handler, using _addEventListener_ return a _`implicit object`_ that contains a lot of information to deal with.

HTML

```html
<h2>Event Object</h2>
<input type="text" name="search" id="search-id" placeholder="Search..." />
```

JS

```js
const searchElm = document.getElementById('search-id');

function handleChange(event) {
  console.log(event);
  console.log('Target: ', event.target); // Where event happening: HTML Element
  console.log('Target Name: ', event.target.name); // The name of target Element
  console.log('Target Value: ', event.target.value); // The value inside target Element
  console.log('Event Type: ', event.type); // Change
  console.log('Current Target: ', event.currentTarget); // Element that trigger the event. Is the Element that eventListener is attached to
  console.log(this); // Refer to the Element on which the event listener is attached to
}

searchElm.addEventListener('change', handleChange);
```

Whenever we are refering this inside a event handler or function handler, its refers to the Element itself we have added the eventListener.

## 9. Event Bubbling

> Bubling is like a default behavior of an event.

HTML

```html
<h1>Event Bubbling, Capturing, and Delegation</h1>
<div id="grandparent">
  <div id="parent">
    <button id="child">Click Me</button>
  </div>
</div>
```

> When the event of the button Click Me happenen, it goes up through parent div and grandparent div till it reaches the document at the top level: This behavior is called _`Bubling`_.

> In the _`Event Bubling`_, the event starts from the target element and bubbles up through its ancestors. This means that the flow is: **Child → Parent → Grandparent → Document**.

JS

```js
document.addEventListener('click', () => {
  console.log('Document Clicked');
});

document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
```

> If the child button is clicked and the click event is also handled by its parents (parent and grandparent), then the called of these parents execution will also be called. If, the event is handling on the child, once parents handle those events, then those function will also be executed.

## 10. Event Capturing

> In _`Event Capturing`_, the event flows from the outmost ancestror down to the target element. It happens before the actual target handles the event. Capturing is disabled by default.
> Thes three phases showned in the bellow picture happens with events. _`Capture Phase`_ (Once enabled), _`Target Phase`_ and _`Bubling Phase`_.

![Image](https://github.com/user-attachments/assets/9e62fdc6-41c5-4a05-a506-011fe7ddf9d3)

> To activate the capturing or capture phase, we just add _`a true`_ as the _`last parameter`_ of the addEventListener. The Flow is: **Document → Grandparent → Parent → Child**. _Capturing is rarely used, but useful if you want to catch events before they reach the target_.

## 12. Event Delegation

> _`Event Delegation`_ is a technique where you add a single event listener to a parent element instead of each child. It uses event bubbling to handle events from dynamically added or existing child elements. It is efficient for handling events on lists, tables, or any repeated/dynamic content.

HTML

```html
<hr />
<ul id="itemList">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

JS

```js
document.getElementById('itemList').addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`You clicked on ${event.target.textContent}`);
  }
});
```

> _Once a new li is added, no need to add an id or modify the code_. This helps to write most efficient code and avoiding messi code and duplication. In this way, the code can be easy to maintain, to read and to debug.

## 13. Stop Propagation

> To stop the event from bubbling up, we use _`event.stopPropagation()`_.

HTML

```html
<hr />

<div id="father" style="padding: 30px; background: #cfd8dc">
  Parent
  <button id="son" style="margin: 10px">Click Me</button>
</div>
```

JS

```js
document.getElementById('father').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('son').addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('Child clicked');
});
```

## 14. Preventing Defaults

> they are some default behavior of some HTML Element that can be undesired, like:

- _anchor_: When you click on it an has a href attribute, it will go to the corresponding web page.
- _form_: When you **submit** (submit event) the form by clicking on the submit button, it will try to execute the action and refreshing the page.

> They are some circumstance that we want to stop this behavior. This is done with the _`event.preventDefault()`_ method.

HTML

```html
<a href="https://tapasadhikary.com" id="websiteLink" target="_blank"
  >Go to Website</a
>

<hr />

<form id="loginForm">
  <input type="text" placeholder="Username" required />
  <input type="password" placeholder="Password" required />
  <button type="submit">Login</button>
</form>
```

JS

```js
document.getElementById('websiteLink').addEventListener('click', function (e) {
  console.log('Navigating to website!');
  e.preventDefault();
  console.log('Default link behavior prevented!');
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Form submission prevented!');
});
```

## 15. Custom Events

> Sometime, is needed to use custom event instead of JavaScript build in event like click event, keyup event, change event, etc.

HTML

```html
<p id="welcome">Welcome!</p>
<button onclick="loginUser('Tapas Adhiakry')">Login</button>
```

To achieve that, there are three steps to follow:

1. Create a custom event: JavaScript gives an API to create custom events called _`createCustomEvent`_:

```js
const myEvent = new CustomEvent('userLoggedIn', {
  detail: {
    username: 'tapascript',
    role: 'admin',
  },
});
```

2. Listen to the custom event:

```js
document.addEventListener('userLoggedIn', (e) => {
  console.log('User login detected:', e.detail.username);
});
```

3. Dispatching the custom event:

JS

```js
document.dispatchEvent(myEvent);
```

## 16. Projects

> The project is a FAQ that use a static structure with div that wrap question in independent inner div and answer in another independent div.

> The clicked event will be only added from the outer div and then delegate to each child items through Event Delegation. Once question is clicked, the stopPropagation is called to avoid bubling and getting _`document.addEventListener()`_ called. Otherwise, _`document.addEventListener()`_ is called and collapse all answer.

HTML

```html
<div class="faq">
  <div class="faq-item">
    <div class="question">What is JavaScript?</div>
    <div class="answer">
      JavaScript is a scripting language used to create dynamic content.
    </div>
  </div>
  <div class="faq-item">
    <div class="question">What is the DOM?</div>
    <div class="answer">
      The DOM is the Document Object Model representing the page structure.
    </div>
  </div>
  <div class="faq-item">
    <div class="question">What is a Closure?</div>
    <div class="answer">
      Is a kind of function that hold values even if it execution is over.
    </div>
  </div>
  <div class="faq-item">
    <div class="question">What is 40 Days of JavaScript?</div>
    <div class="answer">
      It is an initiative by tapaScript Family to win over JavaScript with
      fundamentals and code.
    </div>
  </div>
</div>
```

JS

```js
const faq = document.querySelector('.faq');
faq.addEventListener('click', function (e) {
  if (e.target.classList.contains('question')) {
    e.stopPropagation();
    const currentItem = e.target.parentElement;
    const currentAnswer = currentItem.querySelector('.answer');

    currentAnswer.classList.toggle('show');
  }
});

document.addEventListener('click', function () {
  const allAnswers = document.querySelectorAll('.answer.show');
  allAnswers.forEach((answer) => answer.classList.remove('show'));
});
```

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-19]](https://youtu.be/ybgI5vVE668 'Video')

# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Create a Dynamic Tabbed Interface

Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

### Functional Requirements

- ✅ Clicking a tab title shows the corresponding content.
- ✅ Only one tab content is visible at a time.
- ✅ The active tab should have a visual highlight.
- ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

  Example:

  ```js
  document.addEventListener('keydown', (e) => {
    if (e.key === '1') switchToTab(1);
    if (e.key === '2') switchToTab(2);
    if (e.key === '3') switchToTab(3);
  });
  ```

- ✅ Use event delegation to handle tab clicks.
- ✅ Use classList to manage active state.
- ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).
- ✅ Use stopPropagation() if needed during advanced control.

### Basic HTML Structure

```html
<div class="tabs">
  <div class="tab-headers">
    <button class="tab active" data-tab="1">Home</button>
    <button class="tab" data-tab="2">About</button>
    <button class="tab" data-tab="3">Contact</button>
  </div>
  <div class="tab-contents">
    <div class="content active" data-tab="1">Welcome to Home</div>
    <div class="content" data-tab="2">About us page here.</div>
    <div class="content" data-tab="3">Contact info displayed here.</div>
  </div>
</div>
```
