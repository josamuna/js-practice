'use strict';
// console.log('Day 19 Task of 40 days of JavaScript.');

const checkedDOMContentLoaded = function () {
  console.log('DOM Content Loaded...');
};

document.addEventListener('DOMContentLoaded', checkedDOMContentLoaded);

const searchElm = document.getElementById('search-id');

function handleChange(event) {
  console.log(event);
  console.log('Target: ', event.target); // Where event happening: HTML Element
  console.log('Target Name: ', event.target.name); // The name of target Element
  console.log('Target Value: ', event.target.value); // The value inside target Element
  console.log('Event Type: ', event.type); // Change
  console.log('Current Target: ', event.currentTarget); // Element that trigger the event, Is the Element that eventListener is attached to
  console.log(this);
}

searchElm.addEventListener('change', handleChange);

// function handleClick(e) {
//   console.log(e);
//   console.log(this);
// }
// const btn = document
//   .getElementById('test')
//   .addEventListener('click', handleClick);
