'use strict';
console.log('Day 17 Task of 40 days of JavaScript.');

/*
  1. Find the Most Frequent Word in a Paragraph

  Consider the follwoing HTML:

  <div id="text">This is a test. This test is only a test.</div>

  Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

  Hints:

  - Use document.querySelector() or getElementById() to select the paragraph.
  - Convert the text into an array of words.
  - Use querySelector() to display the most frequent word along with the count inside another `<div>`.
*/
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

/*
  2. Create a zebra pattern

  Consider the following HTML:

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

  Now put alternate colors and background colors to each of the list tags. for example,

- If tne BMW is in white color text, the background should be in black color.
- Then for the next car it will be reversed, the color is black and the background is white.
- Then again the next one is white color and background black
- So on.
*/

const carsElm = document.querySelectorAll('#cars > li');
carsElm.forEach((element, index) => {
  if (index % 2 === 0) {
    // Even li
    element.style.backgroundColor = 'gray'; // black hidden the text content. Gray to allow to view text content.
  } else {
    element.style.backgroundColor === 'white';
  }
});

// 3. Write different ways we can access DOM and what they returns
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

/*
  4. Find and Replace Text Inside a Page

  Write a script that finds all occurrences of a word inside a `<p>` tag and replaces them with another word dynamically.
*/

/*
  5. Extract and Count Unique Links from a Page

  Count all the unique hyperlinks (`<a>`) in a page and display their count.
*/
