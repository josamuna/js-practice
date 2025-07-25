# js-practice

## **🎯 Goal of This Lesson**

## 📚 Course Flow

- ✅ Introduction
- ✅ What is an Array in JavaScript?
- ✅ How to Create an Array in JavaScript?
- ✅ How to Get Elements from an Array in JS?
- ✅ How to Add Elements to an Array in JS?
- ✅ How to Remove Elements from an Array in JS?
- ✅ How to Copy and Clone an Array in JS?
- ✅ How to Determine if a Value is an Array in JS?
- ✅ Array Destructuring in JavaScript
  - ✅ How to Assign a Default Value to a Variable?
  - ✅ How to Skip a Value in an Array?
  - ✅ Nested Array Destructuring in JS
- ✅ How to Use the Rest Parameter in JS?
- ✅ How to Use the Spread Operator in JS?
- ✅ Destructuring Use Cases in JavaScript
  - ✅ How to Swap Values with Destructuring?
  - ✅ How to Merge Arrays?
- ✅ The length property
- ✅ JavaScript Array Methods
  - ✅ How to Create, Remove, Update, and Access Arrays in JavaScript?
    - ✅ The concat() array method
    - ✅ The join() array method
    - ✅ The fill() array method
    - ✅ The includes() array method
    - ✅ The indexOf() array method
    - ✅ The reverse() array method
    - ✅ The sort() array method
    - ✅ The splice() array method
    - ✅ The at() Method
    - ✅ The copyWithin() Method
    - ✅ The flat() Method
    - ✅ Grouping elements in Array
  - ✅ Static Array Methods in JavaScript
    - ✅ The Array-Like
    - ✅ The Array.from() array method
    - ✅ The Array.fromAsync() array method
    - ✅ The Array.of() array method
  - ✅ Array Iterator Methods in JavaScript
    - ✅ The filter() array method
    - ✅ The map() array method
    - ✅ The reduce() array method
    - ✅ The reduceRight() array method
    - ✅ The some() array method
    - ✅ The every() array method
    - ✅ The find() array method
    - ✅ The findIndex() array method
    - ✅ The findLast() array method
    - ✅ The findLastIndex() array method
    - ✅ Array method Chaining
    - ✅ The forEach() array method
    - ✅ The entries() method
    - ✅ The values() method
    - ✅ The flatMap() array method
  - ✅ Immutability
    - ✅ The toReversed() method
    - ✅ The toSorted() method
    - ✅ The toSpliced() method
    - ✅ The with() method
- ✅ Tasks and Quizzes With Interview Questions

## Array Method Mutability and Immutability Table

| Method                       | Mutates Original Array? | Description                                                            |
| ---------------------------- | ----------------------- | ---------------------------------------------------------------------- |
| **Mutating Methods**         |                         |                                                                        |
| `push()`                     | ✅ Yes                  | Adds elements to the end of an array                                   |
| `pop()`                      | ✅ Yes                  | Removes the last element of an array                                   |
| `shift()`                    | ✅ Yes                  | Removes the first element of an array                                  |
| `unshift()`                  | ✅ Yes                  | Adds elements to the beginning of an array                             |
| `splice()`                   | ✅ Yes                  | Adds/removes elements at a specific index                              |
| `sort()`                     | ✅ Yes                  | Sorts elements in place (alters order)                                 |
| `reverse()`                  | ✅ Yes                  | Reverses the order of elements                                         |
| `fill()`                     | ✅ Yes                  | Modifies all or some elements with a static value                      |
| `copyWithin()`               | ✅ Yes                  | Copies part of an array within itself                                  |
| **Non-Mutating Methods**     |                         |                                                                        |
| `map()`                      | ❌ No                   | Creates a new array by applying a function to each element             |
| `filter()`                   | ❌ No                   | Creates a new array with elements that pass a condition                |
| `slice()`                    | ❌ No                   | Returns a new array containing a portion of the original array         |
| `concat()`                   | ❌ No                   | Merges arrays and returns a new array                                  |
| `flat()`                     | ❌ No                   | Flattens nested arrays into a new array                                |
| `flatMap()`                  | ❌ No                   | Maps and flattens the result into a new array                          |
| `reduce()`                   | ❌ No                   | Reduces array elements into a single value                             |
| `reduceRight()`              | ❌ No                   | Like `reduce()`, but iterates from right to left                       |
| `join()`                     | ❌ No                   | Converts elements into a string                                        |
| `toSorted()` _(ES2023)_      | ❌ No                   | Returns a new sorted array (non-mutating alternative to `sort()`)      |
| `toReversed()` _(ES2023)_    | ❌ No                   | Returns a new reversed array (non-mutating alternative to `reverse()`) |
| `toSpliced()` _(ES2023)_     | ❌ No                   | Returns a new array with spliced elements (non-mutating `splice()`)    |
| `find()`                     | ❌ No                   | Returns the first matching element (does not modify array)             |
| `findIndex()`                | ❌ No                   | Returns index of first matching element (does not modify array)        |
| `findLast()` _(ES2023)_      | ❌ No                   | Returns last matching element (does not modify array)                  |
| `findLastIndex()` _(ES2023)_ | ❌ No                   | Returns index of last matching element                                 |
| `every()`                    | ❌ No                   | Checks if all elements meet a condition                                |
| `some()`                     | ❌ No                   | Checks if at least one element meets a condition                       |
| `includes()`                 | ❌ No                   | Checks if an element exists in the array                               |
| `indexOf()`                  | ❌ No                   | Finds the first index of a given element                               |
| `lastIndexOf()`              | ❌ No                   | Finds the last index of a given element                                |
| `at()` _(ES2022)_            | ❌ No                   | Returns the element at a given index (supports negative indexes)       |
| `with()` _(ES2023)_          | ❌ No                   | Returns a new array with an element replaced at a specific index       |

---

# Keys Points of the video

Array plays a great role in data structure. Array is represented as a pair of brackets `[]` and is a collection of element of any type `(boolean, number, string, object, array or function)`.

```js
/*
  Index representes the position of an element in the array and starts from 0
  Index ends with length -1
*/
const mixedArray = [
  100,
  true,
  'tapaScript',
  { name: 'josue', age: 29 },
  [7],
  function sendMessage() {
    console.log('New message');
  },
];
console.log(mixedArray);
```

## 1. Array creation

### 1.1. Array litteral

> Created by assigning litteral values (commonly as string) to an array.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
console.log(salad);
```

### 1.2. Constructor function

> This is used by the help of _`Array constructor`_ with the `new keyword`.

```js
const anotherSalad = new Array('🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️');
console.log(anotherSalad);

// Creating empty array of 2 elements of length.
const EmptyArrayTwo = new Array(2);
console.log(EmptyArrayTwo);

// Creating array with two elements.
const arrayTwo = new Array(1, 2);
console.log(arrayTwo);
```

## 2. Accessing array elements

> The two main way to access array element in JavaScript are _`by its index`_ or _`with a for loop`_.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
console.log(salad[0]); // Print tomato
console.log(salad[4]); // Print Concumber
console.log(salad[5]); // Print Carot
```

Knowing the array index can be tricky, that why the loop help to go through array elements and access them.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
for (let i = 0; i < salad.length; i++) {
  console.log(`Element at index ${i} is ${salad[i]}`);
}
```

## 3. Add element to an array

### 3.1. Using push method

> `push` adds an element at the end of an array and return the current number of elements in the array.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const totalSaladElement = salad.push('🍄');
console.log(totalSaladElement);
console.log(salad);
```

### 3.2. Using unshift method

> `unshift` adds an element at the begining of an array and return the current number of elements in the array.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const totalSaladElement = salad.unshift('🥒');
console.log(totalSaladElement);
console.log(salad);
```

## 4. Remove element from an array

### 4.1. Using pop method

> `pop` removes an element at the end of an array and return the removed element from the array.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const popReturn = salad.pop();
console.log(popReturn);
console.log(salad);
```

### 4.2. Using shift method

> `shift` removes an element at the begining of an array and return to the removed element from the array.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const shiftReturn = salad.shift();
console.log(shiftReturn);
console.log(salad);
```

## 5. Clone or Copy array to a new one

> `slice` copy an array to another. The `slice` return a new copy of the array. It takes two arguments. The `first tells the start index` to start the copy and `the second is the length till to go` (The copy go to the end of arraym when it is not provided).

```js
console.log('Day 15 Task of 40 days of JavaScript.');
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const newSalad = salad.slice();
console.log(newSalad);
console.log(salad);
console.log(
  'newSalad and salad arrays are different even if they hold the same values : ',
  salad === newSalad
);
```

## 6. Check whether an element is a array or not

> This is done with the static method of an `Array` called \_`isArray()` which return tru in case the passed argument is an array or false otherwise.

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
console.log(Array.isArray(salad)); // true
console.log(Array.isArray('🍄')); // false
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray([])); // true. Empty array is an array
console.log(Array.isArray({ user: 'sam' })); // false. An object is not an array
```

## 7. Array destructuring

> _`Array destructuring`_ saves time for writing code and make it more easy to understand. Its help extracting more element from an array.

### 7.1. Assigning multiple variables from an array

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
// Instead of writing this code
// const tomato = salad[0];
// const mushroom = salad[1];
// const carrot= salad[5];

// Better way write
const [tomato, mushroom, carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, mushroom, carrot);
```

### 7.1. Assign default value to variable

```js
const [tomato, mushroom = '🍄'] = ['🍅'];
console.log(tomato, mushroom);
```

### 7.2. How to skip value in an array

```js
const [tomato, , carrot] = ['🍅', '🍄', '🥕'];
console.log(tomato, carrot);
```

### 7.3. Nested array destructuring

> _`Nested array`_ is when array is placed inside another one.

```js
const nestedArr = [1, 2, [4, [6, 7, 8, [9]]]];
console.log(nestedArr);
let fruits = ['🍊', '🍏', '🍋', ['🍅', '🍄', '🥕']];
const vege = fruits[3];
const carrot1 = vege[2];
console.log(carrot1);

const carrot2 = fruits[3][2]; // Proper way to get element inside a nested array in this scenario
let [, , , , , [, , carrot3]] = ['🍊', '🍏', '🍋', ['🍅', '🍄', '🥕']]; // More complicated with array destructuring
console.log(carrot3);
```

## 7. Rest parameter

> _`Rest parameter`_ or **...** is used on the **left side of the assignment operator** in destructuring.

```js
const [tomato, mushroom, ...rest] = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️']; // ['🥦', '🍀', '🥒', '🥕', '🌶️']
console.log(rest);
```

## 8. Spread operator

> _`Spread operator`_ or **...** is used on the **right side of the assignment operator** in destructuring. This allows also to clone or create array copy.

### 8.1. Copy or clone array with spead operator

```js
const salad = ['🍅', '🍄', '🥦', '🍀', '🥒', '🥕', '🌶️'];
const saladCopy = [...salad];
console.log('Array befor copy : ', salad);
console.log('Array after copy :', saladCopy);
console.log(
  'saladCopy and salad arrays are different even if they hold the same values : ',
  salad === saladCopy
); // false
```

### 8.2. Swap array values with spead operator

```js
let first = '😔';
let second = '🤩';
[first, second] = [second, first];
console.log(first, second); // '🤩', '😔'
```

### 8.3. Merge array values with spead operator

```js
const emotions = ['😅', '🤭', '😕', '😨'];
const veggies = ['🍀', '🥒', '🥕', '🌶️'];
const emotionalVeggies = [...emotions, ...veggies];
console.log(emotionalVeggies);
```

## 9. The length property

> _`length`_ is a property that get the **size** of an array.

```js
const arr1 = [1, 2, 3];
const arr2 = new Array(7);
console.log(arr1.length); // 3
console.log(arr2.length); // 7

// Max size of an array is 2 ** 32 - 1 = 4 294 967 295.
arr1.length = 2; // Remove the last element from arr .
console.log(arr1); // [1,2]
arr1.length = 0; // Empty the array arr1.
console.log(arr1); // []
arr1.lenght = 9; // Fill the rest of values inside the array with empty value.
console.log(arr1);
```

## 10. JavaScript array Methods

> Useful method when dealing with arrays in JS.

### 10.1. concat

> _`concat`_ merges one or more arrays and returns the merged array. There is no limit of the number of arrays to merge together.

```js
const first = [1, 2, 3];
const second = [4, 5, 6];
const merged = first.concat(second);
console.log(merged);

const third = [7, 8, 9];
const fourth = [10, 11, 12];
const fifth = [13, 14, 15];
const completeMerge = first.concat(second, third, fourth, fifth);
console.log(completeMerge);
```

### 10.2. join

> _`join`_ joins elements of an array togeher using a separtor (_`comma`_ as the default), and returns a string.

```js
const emotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨'];
const joignedEmotions = emotions.join();
console.log(joignedEmotions);
const newJoinedEmotions = emotions.join('<=>');
console.log(newJoinedEmotions);
const emptyString = [].join();
console.log('An empty array produce an empty string : ', emptyString);
```

### 10.3. fill

> _`fill`_ fills an array with static values or select a few elements of an array and change them with anothers values. This method takes two arguments, the start index (**zero based**) and the length till to go.

```js
const colors = ['red', 'blue', 'green'];
// colors.fill('pink');
// console.log(colors);
colors.fill('pink', 1, 2); // Only second item.
console.log(colors);
```

### 10.4. includes

> _`includes`_ determines the presence of an element in an array. If yes, it returns **true** or **false** otherwise.

```js
const names = ['tom', 'alex', 'bob', 'john'];
console.log(names.includes('sam')); // false, sam is not in the array.
console.log(names.includes('bob')); // true.
```

### 10.5. indexOf

> _`indexOf`_ is a most used method of an array, and it is used when we need to know the **index position of an array element**. It's returns always **the first position index of the element** in the array when found, otherwise **-1**.

```js
const names = ['tom', 'alex', 'bob', 'john'];
const alexIndex = names.indexOf('alex');
console.log(alexIndex); // 1
const bobIndex = names.indexOf('bob');
console.log(bobIndex); // 2
```

### 10.6. lastIndexOf

> _`lastIndexOf`_ tells index of **the last occurence of an element** in the array, otherwirse return **-1** if not found.

```js
const firstTomIndex = names.indexOf('tom');
console.log(firstTomIndex); // 0
const lastTomIndex = names.lastIndexOf('tom');
console.log(lastTomIndex); // 4
const lastAliceIndex = names.lastIndexOf('alice');
console.log(lastAliceIndex); // -1
```

### 10.7. reverse

> _`reverse`_ reverses the elements position in the array.

```js
const names = ['tom', 'alex', 'bob', 'john', 'tom'];
const reversedName = names.reverse();
console.log(reversedName);
```

### 10.8. sort

> _`sort`_ sorts array element in **ascending order** by default by converting them to string before sorting (`This produce a wreid result when sorting numbers`).
> To change the default behavior, we have to build a `Comparator` (which takes two parameters `a` and `b`) and pass it to the sort method.

```js
const names = ['tom', 'alex', 'bob', 'john', 'alice'];
console.log(names.sort());
console.log(names);

const artists = [
  'John Whrite Abbott',
  'Leonardo da Vinci',
  'Charles Aubry',
  'Anna Atkins',
  'Barent Avercamp',
];
console.log(artists.sort());

// Sorting descending with comparator.
/*
    If the two values to compare are same, do nothing
    If a > b, then reverse values to sort descending
    otherwise, the order is correct and no need to do something.
*/
console.log(
  artists.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  })
);
console.log(artists);

let ages = [2, 1000, 10, 3, 23, 12, 30, 21];
console.log('Default sorting : ', ages.sort()); // [10, 1000, 12, 2, 21, 23, 3, 30]
console.log(
  'Correct Ascending sorting : ',
  ages.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  })
);
console.log(
  'Correct Descending sorting : ',
  ages.sort(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  })
);
```

### 10.9. splice

> _`splice`_ **delete**, **add** or **modify** an element in a array. `It's always returns the array containing the deleted items`.
> It takes three parameters :

```js
/*
  - start : The index to start change the array. It's zero based index.
  - deleteCount : How many elements to delete starting from start position.
  - items1, items2, etc.: Items to add from start position.
*/
splice(start, deleteCount, item1, item2, item3);
```

```js
let names = ['tom', 'alex', 'bob', 'john', 'alice'];
const removedName1 = names.splice(0, 1); // Remove one element from position (index) zero 'tom' => Remove 'tom'
console.log(names); // ['alex', 'bob', 'john', 'alice']
console.log(removedName1); // ['tom'];

names = ['tom', 'alex', 'bob', 'john', 'alice'];
const removedName2 = names.splice(0, 1, 'John'); // Remove one element from position (index) zero 'tom' and add 'john' from index 0
console.log(names);
console.log(removedName2); // ['tom'];

names = ['tom', 'alex', 'bob', 'john', 'alice'];
const removedName3 = names.splice(2, 1, 'zack'); // Starting from index 2 ('bob), remove one element and add zack.
console.log(names); // ['tom', 'alex', 'zack', 'john', 'alice'];
console.log(removedName3); // ['bob'];

names = ['tom', 'alex', 'bob', 'john', 'alice'];
const removedName4 = names.splice(3, 0, 'zack'); // Starting from index 3 ('bob), remove zero element and add zack from this index.
console.log(names); // ['tom', 'alex', 'bob', 'zack', 'john', 'alice']
console.log(removedName4); // [];
```

### 10.10. at

> _`at`_ helps to retreive values in both positive or negatives index.

```js
const junkFoodILove = ['🧀', '🌭', '🍔', '🍕', '🍦', '🍰', '🍟'];
console.log(junkFoodILove.at(0)); // First element : 🧀
console.log(junkFoodILove.at(3)); // Fourth element : 🍕
console.log(junkFoodILove.at(-1)); // Last element : 🍟
console.log(junkFoodILove.at(-5)); // Fifth element from the last : 🍔
console.log(junkFoodILove.at(10)); // undefined
```

### 10.11. copyWithin

> _`copyWithin`_ is not so much used and copy elements from one position to another in the same array.

```js
/*
  - target : Index at which copyWithin will start copy. It is zero based index.
  - start : Copy from start.
  - end : Optional parameter. Where will be ending the copy.
*/
copyWithin(target, start, end);
```

```js
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.copyWithin(0, 3, 6)); // From position or index 0 (1), copy the element from index 3 (4) to the array length 6 [4, 5, 6, 4, 5, 6, 7]
array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.copyWithin(0, 4)); // From zero index (1), copy starting from index 4 (5) until the end of array [5, 6, 7, 4, 5, 6, 7]
```

### 10.12. flat

> _`flat`_ flat an array by default on the first level. To flat the array at any deep, the argument **Infinity** should be passed to the flat method.

```js
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat()); // Remove the array at first level [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log('First level Flating : ', arr2.flat()); // Flat only at first level [0, 1, 2, [3, [4, 5]]]
console.log('Second level Flating : ', arr2.flat(2)); // Flat at the second level [0, 1, 2, 3, [4, 5]]
console.log('Third level Flating : ', arr2.flat(3)); // Flat at the third level [0, 1, 2, 3, 4, 5]
console.log('Flat at any level : ', arr2.flat(Infinity)); // Flat at any level [0, 1, 2, 3, 4]
```

### 10.13. groupBy

> _`groupBy`_ is a recent functionality that group using a criteria. It is a static method of Object. It group using a **key**.

```js
const employees = [
  { nane: 'Bob', dept: 'Engineering', salary: 5000 },
  { nane: 'Alex', dept: 'HR', salary: 3000 },
  { nane: 'Ravi', dept: 'Engineering', salary: 7000 },
  { nane: 'John', dept: 'Engineering', salary: 10000 },
  { nane: 'Tom', dept: 'Sales', salary: 6000 },
];

// Group by Department
const groupedByDept = Object.groupBy(employees, ({ dept }) => dept);
console.log(groupedByDept);

// Group by Salary
const groupedByByMoreThan5000 = Object.groupBy(employees, ({ salary }) => {
  return salary >= 5000 ? 'More than 5K.' : 'Less than 5K.';
});
console.log(groupedByByMoreThan5000);
```

### 10.14. Immutable version of method reverse, sort, splice and with

> _`Immutability`_ is required to avoid changing data (data structure) to be able to track what has been changed or not. This helps for the debugging purpose.

- `reverse()` is replaced by `toReversed()`.
- `sort()` is replaced by `toSorted()`.
- `splice()` is replaced by `toSpliced()`.
- `with` method is an addition that allows to change a specific array index's value without mutate the array.

```js
/*
  index is the array index (positive or negative).
  value is the value to replace.
*/
with ((index, value));
```

```js
// toReversed()
const items = [1, 2, 3];
const reversedItems = items.toReversed();
console.log('Initial array : ', items);
console.log('Reversed array', reversedItems);

// toSorted()
let months = ['January', 'March', 'December', 'February'];
const sortedMonthsAsc = months.toSorted();
console.log('Initial array : ', months);
console.log('Sorted array Ascending : ', sortedMonthsAsc);

months = ['January', 'March', 'December', 'February'];
const sortedMonthDesc = months.toSorted((a, b) => {
  return a === b ? 0 : a > b ? -1 : 1;
});
console.log('Initial array : ', months);
console.log('Sorted array Descending : ', sortedMonthDesc);

// toSpliced()
const monthsShort = ['Jan', 'Mar', 'Apr', 'May'];
const splicedMonth = monthsShort.toSpliced(1, 0, 'Feb'); // From index 1 ('March'), remove zero item and add from this index 'Feb' ['Jan', 'Feb', 'Mar', 'Apr', 'May']
console.log('Initial array : ', monthsShort);
console.log('Spliced array : ', splicedMonth);

// with
let numbers = [1, 2, 3, 4, 5];
console.log('Array before change : ', numbers); // [1, 2, 3, 4, 5]
numbers[2] = 6; // Changes the value 3 with 6 but by mutating the array.
console.log('Array after change : ', numbers); // [1, 2, 6, 4, 5]

numbers = [1, 2, 3, 4, 5];
const newArray = numbers.with(2, 6); // Replace the value at index 2 with the value 6
console.log('Initial array : ', numbers);
console.log('Spliced array : ', newArray);

const newArray2 = numbers.with(-2, 8); // Replace the second element from the right to left (4) of array with 8.
console.log(numbers);
console.log(newArray2); // [1, 2, 3, 8, 5]
```

## 11. Static Array methods in JavaScript : Array-like

> _`Array-like`_ is an object and has few similarity with array, but is not an array. Has a property `length` and elements are `indexed`, but can not be manipulated as an array.

> The below code shows that the `array_like` variable behave as an array, but it is not because the `Array.isArray() return false`.

```js
const array_like = { 0: 'I', 1: 'am', 2: 'array-like', length: 3 };
console.log(array_like);
console.log(array_like[2]); // array-like
console.log(array_like.length); // 3
console.log('Is array_like is an array? ', Array.isArray(array_like)); // false
console.log('Is array_like is an object? ', array_like instanceof Object); // true
```

> Object that has `elements indexed` and `length property` are _`Array-like`_.

> To deal with array-like, we have to convert it as an array and work on it. This can be done with :

1. `Spread operator`.
2. `Array.from()` method.
3. `Array.fromAsync()` method.
4. `Array.of()` method.

### 11.1. Convert to array with spread operator

```js
function checkArgs() {
  console.log('Array-like arguments : ', arguments);
  const argArr = [...arguments];
  console.log('Converted Array : ', argArr);
  argArr.forEach((el) => console.log(el));
}

checkArgs(1, 45);
```

### 11.2. Convert to array with Array.from() method

```js
console.log(
  'HTML Collection as Array-like',
  document.getElementsByTagName('li')
);
const collectionArr = Array.from(document.getElementsByTagName('li'));
console.log('ConvertedArray : ', collectionArr);
```

### 11.3. Convert to array with Array.fromAsync() method

> Instead of an array, _`Array.fromAsync()`_ method creates a new array as a `promise`, and works as `async iterable object`. It should be used to iterate through `asynchronous object`.

```js
const collectionPromise = Array.fromAsync(document.getElementsByTagName('li'));
console.log('Converted Array', collectionPromise);

// Handle Promise
collectionPromise
  .then((value) => console.log(value))
  .catch((error) =>
    console.log(
      `Error occurs : ${error.error} : ${error.message}\n${error.stack}`
    )
  );

const returnResult = Array.fromAsync({
  0: Promise.resolve('tapasCript'),
  1: Promise.resolve('Google'),
  2: Promise.resolve('Apple'),
  length: 3,
})
  .then((value) => console.log(value))
  .catch((error) =>
    console.log(
      `Error occurs : ${error.error}:${error.message}\n${error.stack}`
    )
  );
console.log('Return result', returnResult);
```

### 11.4. Convert to array with Array.of() method

> `Array.of()` method helps to create a new array instance from any number of elements.

```js
const arr = Array.of(2, true, 'test', { name: 'Alex' }, [1, 2, 3]);
console.log(arr);
```

## 12. Array Iterator method in JavaScript

> These methods helps iterate through array in JavaScript.

```js
/*
  Template data to be used for all Array Iterator methods.
*/
let customers = [
  {
    id: 1,
    f_name: 'Abby',
    l_name: 'Thomas',
    gender: 'M',
    married: true,
    age: 32,
    expense: 500,
    purchased: ['Shampoo', 'Toys', 'Book'],
  },
  {
    id: 2,
    f_name: 'Jerry',
    l_name: 'Tom',
    gender: 'M',
    married: true,
    age: 64,
    expense: 100,
    purchased: ['Stick', 'Blade'],
  },
  {
    id: 3,
    f_name: 'Dianna',
    l_name: 'Cherry',
    gender: 'F',
    married: true,
    age: 22,
    expense: 1500,
    purchased: ['Lipstik', 'Nail Polish', 'Bag', 'Book'],
  },
  {
    id: 4,
    f_name: 'Dev',
    l_name: 'Currian',
    gender: 'F',
    married: true,
    age: 82,
    expense: 90,
    purchased: ['Book'],
  },
  {
    id: 5,
    f_name: 'Maria',
    l_name: 'Gomes',
    gender: 'F',
    married: false,
    age: 7,
    expense: 300,
    purchased: ['Toys'],
  },
];
```

### 12.1. filter

> _`filter`_ apply a test criteria on each element of an array and return those who satisfy to it. If `true`, the element will be part of the return array and won't be part if `false`.

```js
/*
  filter takes a callback function which is a test function with these possible parameters. Only the first one is mandatory. :
  element : Actuel element from the array on which the test function is applied to.
  index : Current element index from the array.
  array : The source array itself (where the filtering is applied to). Can be useful for some raisons.
*/
const newArray = arr.filter((element, index, array) => {
  // ...........
});
```

```js
// Get 'Senior Citizens' by filtering out other customers.
const seniorCustomers = customers.filter((customer) => {
  return customer.age >= 60;
});

console.log(seniorCustomers);
```

### 12.2. map

> _`map`_ creates also a new array but, instead of filter, it takes a **transformation function** (according to your business logic) applied on each element of the provided array.

```js
/*
  map takes a callback function which is a transformation function with these possible parameters. Only the first one is mandatory. :
  currentValue : Actuel element from the array on which the transformation function is applied to.
  index : Current element index from the array.
  array : the source array itself (where the maping is applied to). Can be useful for some raisons.
*/
const newArray = arr.map((currentValue, index, array) => {
  // ...........
});
```

```js
// Transform the customers to add a title and a full name
const customerWithFullName = customers.map((customer) => {
  let title = '';
  if (customer.gender === 'M') {
    title = 'Mr.';
  } else if (customer.gender === 'F' && customer.married) {
    title = 'Mrs.';
  } else {
    title = 'Miss.';
  }
  customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});

console.log('Customer after adding full_name : ', customerWithFullName);
```

### 12.3. reduce

> _`reduce`_ reduces the array in a _`single value`_.

```js
/*
  reduce takes a callback function which is a reducer function and an initialValue.
  The callback function takes these possible parameters. Only the two first are most used :
  accumulator : Accumulate reducer returned value.
  currentValue : Current element from the array.
  index : Current element index from the array.
  array : the source array itself (where the maping is applied to). Can be useful for some raisons.
  initialValue : The initial value that initialize accumulator value.
*/
const newArray = arr.reduce(
  reducer(
    accumulator,
    currentValue,
    index,
    array) => {
  // ...........
}, initialValue);
```

```js
// The average age of the customers who have purchased the item 'Book'.
let count = 0;
const totalAge = customers.reduce((accu, customer) => {
  if (customer.purchased.includes('Book')) {
    accu += customer.age;
    count++;
  }
  return accu;
}, 0);

console.log(`Average expense is ${Math.floor(totalAge / count)}`);
```

### 12.4. reduceRight

> _`reduceRight`_ works the same as `reduce`, but applied the reducer **from right to left** instead of left to right as the `reduce` method.

```js
const numbers = [100, 40, 15];
const subsResult = numbers.reduce((accu, current) => {
  return accu - current;
});
const subsRightResult = numbers.reduceRight((accu, current) => {
  return accu - current;
});
console.log('Normal reduce : ', subsResult); // 45
console.log('Reduce right: ', subsRightResult); // -125

const exponent = [2, 4, 6];
const power1 = exponent.reduce((acc, current) => {
  return acc ** current;
}); // 2^4^6 = 16 777 216
console.log(power1);

const power2 = exponent.reduceRight((accu, current) => {
  return accu ** current;
}); // 6^4^2 = 1 679 616
console.log(power2);
```

### 12.5. some

> _`some`_ checks if a condition is satisfied for at least one element in the array. In this case, its returns `true`, or `false` if no element satisfy the criteria.

```js
/*
  element : The current element in the array.
  index : The current element index in the array.
  array : The array itself.
  Only the first parameter is mandatory.
*/
arr.some((element, index, array) => {
  // .................
});
```

```js
// Do we have a young customer (with age less than 10 years).
const hasYoungCustomer = customers.some((customer) => {
  return customer.age < 10;
});
console.log('Has young customer (age < 10)? ', hasYoungCustomer); // true

// Do we have children
const hasChildren = customers.some((customer) => {
  return customer.age < 7;
});
console.log('Has children customer (age < 7)? ', hasChildren); // false
```

### 12.6. every

> _`every`_ takes a test criteria to be applied on each element of the array. Return `true` if **all elements** satisfy the criteria, and `false` otherwise.

```js
/*
  currentElement : The current element in the array.
  currentIndex : The current element index in the array.
  array : The array itself.
  Only the first parameter is mandatory.
*/
arr.every((currentElement, currentIndex, array) => {
  // .................
});
```

```js
// Every married customer
const isAllMarried = customers.every((customer) => {
  return customer.married;
});

console.log('All customer married? ', isAllMarried); // false
```

### 12.7. find

> _`find`_ finds a value that satisfy a specific criteria. This method returns the element value instead of a boolean like `some`. When the criteria does not matched, find return `undefined`.

```js
// Find the youngest customer
const foundYoungCustomer = customers.find((customer) => {
  return customer.age < 10;
});
console.log('Found young customer(age < 10) : ', foundYoungCustomer); // true
```

### 12.8. findIndex

> _`findIndex`_ retreives **the index of the first occurence** from left side of the array instead of finding element. If not found, it returns `-1`.

```js
// Find the youngest customer position
const foundYoungCustomerPosition = customers.findIndex((customer) => {
  return customer.age < 10;
});
console.log(
  'Found young customer(age < 10) position : ',
  foundYoungCustomerPosition
); // 4
```

### 12.9. findLastIndex

> _`findLastIndex`_ finds the last index from **right side of the array**. Gives the last matching element index. If not found, it returns `-1`.

```js
// Find the last old customer position
const foundLastOldCustomerPosition = customers.findLastIndex((customer) => {
  return customer.age > 60;
});
console.log(
  'Found the last old customer(age > 60) position : ',
  foundLastOldCustomerPosition
); // 3
```

### 12.10. findLast

> _`findLast`_ find the **last occurence** of an array element from **right the left side**. If more than one customer are married, this method will find the last one only. This method returns the element value and not a boolean. When the criteria does not matched, findLast returns `undefined`.

```js
// Find the last married customer position
const foundLastMarriedCustomer = customers.findLast((customer) => {
  return customer.married;
});
console.log('Found the last married customer : ', foundLastMarriedCustomer); // Dev
```

### 12.11. Chaining with map, filter and reduce

> _`Chaining`_ helps combining the use of `map`, `filter` and `reduce` in a single instruction to build a more powerfull logic for to have a certain result.
> This can be done by using these methods separately, but the best way is to _**chaining them**_.

```js
// Get the total amount spent by Married customers
// Step 1 : filter - Find all the married customer
const marriedCustomer = customers.filter((customer) => {
  return customer.married;
});
console.log(marriedCustomer);

// Step 2 : map - Get the total expense of each married customer
const marriedExpenseCustomer = marriedCustomer.map((customer) => {
  return customer.expense;
});
console.log(marriedExpenseCustomer);

// Step 3 : reduce - Get the total amount spent
const totalSpentByMarriedCustomer = marriedExpenseCustomer.reduce(
  (accu, current) => {
    return accu + current;
  },
  0
);

console.log(
  'Total expense spent by married customer is USD : ',
  totalSpentByMarriedCustomer
);

// ============================

// Get the total amount spent by Married customers
// Instead of doing the calculation separately, we can chain them => filter() => map() => reduce() commonly.
const totalSpentByMarriedCustomer = customers
  .filter((customer) => {
    return customer.married;
  })
  .map((customer) => {
    return customer.expense;
  })
  .reduce((accu, current) => {
    return accu + current;
  }, 0);

console.log(
  'Total expense spent by married customer is USD :',
  totalSpentByMarriedCustomer
);
```

### 12.12. forEach

> _`forEach`_ iterating on each array element and executes a particular function passed as the callback function. `forEach` does not return any value and, needs extra work to deal with data instead of **map** (Return an tansformed array), **reduce** (Return a single value) and **filter** (Return an array that match a criteria).

```js
const arr = [1, 2, 3, 4, 5];
arr.forEach((el) => console.log(el));

let sum = 0;
arr.forEach((el) => {
  sum += el;
});
console.log('Sum using forEach : ', sum);
```

### 12.13. entries

> _`entries`_ return an _`array iterator`_. It is the `Array.prototype.entries()`.

```js
const arr = [1, 2, 3, 4, 5];
const arrItr1 = arr.entries();
console.log('Array Iterator : ', arrItr1); // Array Iterator
console.log('Array Iterator value : ', arrItr1.next().value); // index and value

// Better way to access elements
for (let [index, element] of arrItr1) {
  console.log(index, element);
}
```

### 12.14. values

> The difference between _`values`_ and _`entries`_ is that **entries** returns `index` and `values` but, **values** returns only `values`. Both methods are returning _`Array Iterator`_. It is the `Array.prototype.values()`.

```js
const arrItr2 = arr.values();
console.log('Array Iterator : ', arrItr2); // Array Iterator
console.log('Array Iterator value : ', arrItr2.next().value); // Only values

// Better way to access values
for (let values of arrItr2) {
  console.log(values);
}
```

### 12.15. flatMap

> _`flatMap`_ do both `flat` and `map` at the same time.

```js
const arr = [1, 2, 3, 4, 5];
console.log(
  'Simple Map : ',
  arr.map((item) => item * 2)
); // [2, 4, 6, 8, 10]
console.log(
  'Simple flatMap : ',
  arr.flatMap((item) => item * 2)
); // [2, 4, 6, 8, 10]

console.log(
  'Complex Map : ',
  arr.map((item) => [item * 2])
); // [[2], [4],[6], [8], [10]]
console.log(
  'Complex flatMap : ',
  arr.flatMap((item) => [item * 2])
); // [2, 4, 6, 8, 10] : First level of flattening.

console.log(
  'To complex Map : ',
  arr.map((item) => [[item * 2]])
); // [[[2]], [[4]],[[6]], [[8]], [[10]]]
console.log(
  'To complex flatMap : ',
  arr.flatMap((item) => [[item * 2]])
); // [[2], [4], [6], [8], [10]] : second level of flattening.
```

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-15]](https://youtu.be/t05NguKFKo0 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## Questions

> Please Note: These tasks are for your practice. If you are stuck, go back to the videos and get the clarifications. If you are still stuck, feel free to start a conversation on [tapaScript Discord](https://discord.gg/HHwdF8r28m).

- [x] **T-001**: Create an array of 5 elements using the Array Constructor.

  ```js
  const arrayConstructor = new Array(
    10,
    true,
    'Array Constructor',
    { name: 'Josue', age: 25 },
    [10, 2]
  );
  console.log(arrayConstructor);
  ```

- [x] **T-002**: Create an array of 3 empty slots.

  ```js
  const emptyArray = new Array(3);
  console.log(emptyArray);
  ```

- [x] **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.

  ```js
  const fruits = ['🍊', '🍏', '🍋', '🥑', '🍉', '🍓'];
  const avocado = fruits[3]; // The fourth element is located at the index 3 (zero based).
  console.log('The fourth element is : ', avocado);
  ```

- [x] **T-004**: Use the `for` loop on the above array to print elements in the odd index.

  ```js
  for (let fruitIndex in fruits) {
    if (fruitIndex % 2 !== 0) {
      // Odd index found
      console.log(fruits[fruitIndex]);
    }
  }
  // Same result
  for (let [index, fruit] of fruits.entries()) {
    if (index % 2 !== 0) {
      // Odd index found
      console.log(fruit);
    }
  }
  ```

- [x] **T-005**: Add one element at the front and the end of an array.

  ```js
  let salad = ['🍄', '🥦', '🍀', '🥒', '🌶️'];
  console.log('Salad before adding : ', salad);
  salad.unshift('🍅'); // Add tomato at the front
  console.log('Salad with tomato at the front : ', salad);
  salad.push('🥕'); // Adding carot at the end.
  console.log('Salad with carot at the end : ', salad);
  ```

- [x] **T-006**: Remove an element from the front and the end of an array.

  ```js
  salad = ['🍄', '🥦', '🍀', '🥒', '🌶️'];
  console.log('Salad before removing : ', salad);
  salad.shift(); // Remove the first element at the front.
  console.log('Salad without the front element ', salad);
  salad.pop(); // Remove salad element at the end.
  console.log('Salade witout the end element : ', salad);
  ```

- [x] **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.

  ```js
  const favoriteFood = [
    '🍕',
    '🌭',
    '🧀',
    '🍔',
    '🍦',
    '🍝',
    '🍿',
    '🥓',
    '🥪',
    '🥩',
  ];

  const [pizza, hotDog, cheese, burger, , pasta, , , , steak] = [
    '🍕',
    '🌭',
    '🧀',
    '🍔',
    '🍦',
    '🍝',
    '🍿',
    '🥓',
    '🥪',
    '🥩',
  ];

  console.log('My sixth food : ', pizza, hotDog, cheese, burger, pasta, steak);
  ```

- [x] **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

  ```js
  const [, , ...rest] = favoriteFood;
  console.log('Last eight food : ', rest);
  ```

- [x] **T-009**: Clone an Array(Shallow cloning)

  ```js
  let foodCopy = favoriteFood.slice();
  console.log(foodCopy);
  ```

- [x] **T-010**: Empty an array using its length property

  ```js
  foodCopy.length = 0;
  console.log('Empty the array with its length property : ', foodCopy);
  ```

- [x] **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.

  ```js
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i of numbers) {
    if (i === 5) {
      numbers.length = 6;
      break;
    }
  }
  console.log('Resized array from 10 to 6 elements : ', numbers);
  ```

- [x] **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.

  ```js
  const emotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
  console.log('Emotions before empty the array : ', emotions);
  emotions.splice(0, 10);
  console.log('Emotions after emoty the array : ', emotions);
  ```

- [x] **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?

```js
// The most efficient is the using of length property, because it is not iterate through the array.
let newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with length property.
newEmotions.length = 0;
console.log('Empty array using length property : ', newEmotions);
newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with pop method
const emotion2Length = 10;
for (let i = 0; i < emotion2Length; i++) {
  newEmotions.pop();
}
console.log('Empty array using pop() method : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with shift method
for (let i = 0; i < emotion2Length; i++) {
  newEmotions.shift();
}
console.log('Empty array using shift() method : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with []
newEmotions = [];
console.log('Empty array using [] : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with slice
newEmotions.splice(0, newEmotions.length);
console.log('Empty array using slice method() : ', newEmotions);

// **T-014**: What happens when you concatenate two empty arrays?
// When two empty array are concatenate, it return an new empty array
const arr3 = [];
const arr4 = [];
const emptyArrConcatenated1 = arr3.concat(arr4);
const emptyArrConcatenated2 = [...arr3, ...arr4];
console.log('Empty array with concat method() : ', emptyArrConcatenated1);
console.log('Empty array with spread operator : ', emptyArrConcatenated2);
```

- [x] **T-014**: What happens when you concatenate two empty arrays?

```js
// When two empty array are concatenate, it return an new empty array
const arr3 = [];
const arr4 = [];
const emptyArrConcatenated1 = arr3.concat(arr4);
const emptyArrConcatenated2 = [...arr3, ...arr4];
console.log('Empty array with concat method() : ', emptyArrConcatenated1);
console.log('Empty array with spread operator : ', emptyArrConcatenated2);
```

- [x] **T-015**: How can you check if a value is partially matching with any of the elements of an Array?

```js
// By using the includes() method
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
console.log('Looking for July from moths array : ', months.includes('July')); // false
console.log('Looking for Feb from moths array : ', months.includes('Feb')); // true
```

- [x] **T-016**: What is the difference between the slice() and splice() methods?

```js
/*
    slice() is used to copy or clone an array. It does not mutate or alter the source array. 
    splice() is used to modify, delete, or add elements in an array. It mutates or changes the source array.
*/
```

- [x] **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.

  ```js
  const alphanumericArray = [
    'Franklin10',
    'John Santos1',
    'Helenna Zourgui70',
    'Darius Toronto28',
    'Patricia Write35',
  ];
  console.log('source array before ascending sorting : ', alphanumericArray);
  const sortAlphanumericArrayAsc = alphanumericArray.toSorted(); // Sort Ascending by default
  console.log('Array sorted ascending : ', sortAlphanumericArrayAsc);
  console.log('source array after ascending sorting : ', alphanumericArray); // Not mutated or changed

  console.log('source array before descending sorting : ', alphanumericArray);
  const sortAlphanumericArrayDesc = alphanumericArray.toSorted(function (a, b) {
    return a === b ? 0 : a > b ? -1 : 1;
  }); // Sort Descending using comparator callback function
  console.log('Array sorted descending : ', sortAlphanumericArrayDesc);
  console.log('source array after descending sorting : ', alphanumericArray); // Not mutated or changed
  ```

- [x] **T-018**: Can you give examples of sparse and dense arrays?

  ```js
  // Sparse array is an array in which the element are not sequential, and don't always start at 0.
  // They are essentially Array with holes or gaps in the sequence of its indexes.
  const sparseArray = [];
  sparseArray[10] = 5;
  console.log(
    'Saparse array : ',
    sparseArray,
    ' With length : ',
    sparseArray.length
  ); // Array has only one element but, has a size of 11.

  // Dense array is an array where the elements are all sequential starting at index 0.
  // The length property specify the number of elements.
  const denseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(
    'Dense Array : ',
    denseArray,
    ' With length : ',
    denseArray.length
  );
  ```

- [x] **T-019**: Give a practical usages of the .fill() method

  ```js
  // **T-019**: Give a practical usages of the .fill() method
  let colorsArray = ['Yellow', 'Green', 'Blue', 'Pink', 'Magenta'];
  colorsArray.fill('Gray', 2, 3); // From array indes 2 (Blue), fil array value with 'Gray' until the array length 3 (Blue). That means, Blue will be replaced with Gray.
  console.log('Array with fill method applied : ', colorsArray);
  ```

- [x] **T-020**: How to convert an array to a string?

  ```js
  const colorsArrayToString = colorsArray.join('=>'); // Join with string '=>'
  console.log('Converting color array to String', colorsArrayToString);
  ```

> Consider these input arrays for question **T-21** to **T-48**

- `employees array`: An array of emplyees working in a department.

  ```js
  const employees = [
    { id: 1, name: 'Alice', departmentId: 1, salary: 5000 },
    { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
    { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
    { id: 4, name: 'Diana', departmentId: 1, salary: 5500 },
    { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
    { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
    { id: 7, name: 'George', departmentId: 3, salary: 5200 },
    { id: 8, name: 'Helen', departmentId: 4, salary: 7200 },
    { id: 9, name: 'Ian', departmentId: 2, salary: 4800 },
    { id: 10, name: 'Jane', departmentId: 1, salary: 5100 },
  ];
  ```

- `departments array`: An array of departments where emplyees work.

  ```js
  const departments = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Engineering' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Sales' },
  ];
  ```

- [x] **T-021**: Can you filter employees who work in the "Engineering" department?

  ```js
  const engineeringDepartment = departments.filter((department) => {
    return department.name === 'Engineering';
  });

  const employeesInEngineeringDept = employees.filter((employee) => {
    return employee.departmentId === engineeringDepartment[0].id;
  });
  console.log(
    'Employees in the Engineering departement : ',
    employeesInEngineeringDept
  );
  ```

- [x] **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".

  ```js
  const employeesDepartment = employees.map((employee) => {
    // Filter department to find the array of object corresponding to the current department ID.
    let depart = departments.filter((departement) => {
      return departement.id === employee.departmentId;
    });

    // Concatenate employee name with department name (from department array object).
    let formatedEmployee = `${employee.name} (${depart[0].name})`;
    return formatedEmployee;
  });
  console.log('Employee with respective department : ', employeesDepartment);
  ```

- [x] **T-023**: Find the highest salary among employees.

  ```js
  // Get all employee salary
  const salaries = employees.map((employee) => {
    return employee.salary;
  });

  // Get the max Salary from employees array.
  const highestEmployeeSalary = Math.max(...salaries);
  console.log('The employee with highest salary is : ', highestEmployeeSalary);
  ```

- [x] **T-024**: Check if there is at least one employee in the "Sales" department.

  ```js
  const salesDepartment = departments.filter((department) => {
    return department.name === 'Sales';
  });

  const employeeInSalesDepartment = employees.some((employee) => {
    return employee.departmentId === salesDepartment[0].id;
  });
  console.log('Is there employees in Sales? ', employeeInSalesDepartment);
  ```

- [x] **T-025**: Write a function to filter employees earning more than 6000.

  ```js
  const employeeWithMore6000 = employees.filter((employee) => {
    return employee.salary > 6000;
  });
  console.log('Employees who earn more than 6000 USD : ', employeeWithMore6000);
  ```

- [x] **T-026**: Create an array of employee names only.

  ```js
  const employeeNames = employees.map((employee) => {
    return employee.name;
  });
  console.log('All the employee names : ', employeeNames);
  ```

- [x] **T-027**: Calculate the total salary of all employees using reduce method.

  ```js
  const totalEmployeeSalary = employees
    .map((employee) => {
      return employee.salary;
    })
    .reduce((accu, employee) => {
      return accu + employee;
    }, 0);
  console.log('The total salary of all employee is : ', totalEmployeeSalary);
  ```

- [x] **T-028**: Is there any employee earning less than 5000?

  ```js
  const employeeWithLess5000 = employees.some((employee) => {
    return employee.salary < 5000;
  });
  console.log(
    'Is there any employee earning less than 5000?',
    employeeWithLess5000
  );
  ```

- [x] **T-029**: Find the first employee who earns exactly 5100.

  ```js
  // Filter returns the exact matched object instead of filter, which will return an array of objects.
  const firstEmployeeEarn5100 = employees.find((employee) => {
    return employee.salary === 5100;
  });
  console.log(
    'The first employee who earns exactly 5100 is : ',
    firstEmployeeEarn5100
  );
  ```

- [x] **T-030**: Find the last employee in the "HR" department.

  ```js
  const HRDepartment = departments.filter((department) => {
    return department.name === 'HR';
  });
  const lastEmployeeInHRDepart = employees.findLast((employee) => {
    return employee.departmentId === HRDepartment[0].id;
  });

  console.log(
    'The last employee in the "HR" department is : ',
    lastEmployeeInHRDepart
  );
  ```

- [x] **T-031**: Find the first employee in the "Marketing" department.

  ```js
  const marketingDepartment = departments.filter((department) => {
    return department.name === 'Marketing';
  });
  const firstEmployeeInMarketingDepart = employees.find((employee) => {
    return employee.departmentId === marketingDepartment[0].id;
  });

  console.log(
    'The first employee in the "Marketing" department is : ',
    firstEmployeeInMarketingDepart
  );
  ```

- [x] **T-032**: Check if all employees earn more than 4000.

  ```js
  const isThereAllEmployeeEarnMore4000 = employees.every((employee) => {
    return employee.salary > 4000;
  });
  console.log(
    'Is there all employees earn more than 4000 USD : ',
    isThereAllEmployeeEarnMore4000
  );
  ```

- [x] **T-033**: Find the first employee in the "Sales" and "HR" department.

```js
const firstEmployeeInSaleAndHRDepart = employees.find((employee) => {
  return (
    employee.id === salesDepartment[0].id || employee.id === HRDepartment[0].id
  );
});
console.log(
  'The first employee in the "Sales" and "HR" department is : ',
  firstEmployeeInSaleAndHRDepart
);
```

- [x] **T-034**: Verify if all employees belong to a department listed in the departments array.

  ```js
  // Get all departmentId only
  const departmentId = departments.map((department) => {
    return department.id;
  });
  // Check if all employee has an departmentId match the one in the previous departmetId array
  const isThereAllEmployeeBelongsToDepartmentArray = employees.every(
    (employee) => {
      return departmentId.includes(employee.departmentId);
    }
  );

  console.log(
    'Is there all employees belong to a department in departments array : ',
    isThereAllEmployeeBelongsToDepartmentArray
  );
  ```

- [x] **T-035**: Log each employee's name and department name to the console.

  ```js
  console.log('Show all employees name and department : ');
  employees.forEach((employee) => {
    let department = departments.filter((department) => {
      return employee.departmentId === department.id;
    });
    console.log(`${employee.name} works at ${department[0].name} department.`);
  });
  ```

- [x] **T-036**: Extract all employee names into a single array.

  ```js
  const employeeNamesArray = employees.map((employee) => {
    return employee.name;
  });
  console.log('Employee names into a single array : ', employeeNamesArray);
  ```

- [x] **T-037**: Increment each employee's salary by 10%

  ```js
  const employeeAdd10PercentSalary = employees.map((employee) => {
    return employee.salary + employee.salary * 0.1;
  });
  console.log(
    'Employees Salaries increased by 10% : ',
    employeeAdd10PercentSalary
  );
  ```

- [x] **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

  ```js
  const employees2 = [
    {
      id: 1,
      name: 'Alice',
      departmentId: 1,
      skills: [['Excel'], ['Management']],
      salary: 5000,
    },
    {
      id: 2,
      name: 'Bob',
      departmentId: 2,
      skills: [['Network'], ['DevOps', 'Software Testing']],
      salary: 7000,
    },
    {
      id: 3,
      name: 'Charlie',
      departmentId: 3,
      skills: [['Project management'], ['Management']],
      salary: 4500,
    },
    {
      id: 4,
      name: 'Diana',
      departmentId: 1,
      skills: [['Work planning'], ['Workshop planning']],
      salary: 5500,
    },
    {
      id: 5,
      name: 'Edward',
      departmentId: 2,
      skills: [['C++ Programming'], ['Gaming', 'IA']],
      salary: 8000,
    },
    {
      id: 6,
      name: 'Fiona',
      departmentId: 4,
      skills: [['Transport'], ['Booking']],
      salary: 6000,
    },
    {
      id: 7,
      name: 'George',
      departmentId: 3,
      skills: ['Teams builder', ['Clients negociation']],
      salary: 5200,
    },
    {
      id: 8,
      name: 'Helen',
      departmentId: 4,
      skills: ['Strategic plannig', ['Sales optimization']],
      salary: 7200,
    },
    {
      id: 9,
      name: 'Ian',
      departmentId: 2,
      skills: [['Frontend developer'], 'Designer'],
      salary: 4800,
    },
    {
      id: 10,
      name: 'Jane',
      departmentId: 1,
      skills: ['Counceling'],
      salary: 5100,
    },
  ];

  const employeeWithSkills = employees2.map((employee) => {
    let skills = employee.skills.flat(); // Flat skills array
    employee['skills'] = skills; // Update the array skills with flattened

    return employee;
  });
  console.log("Employes with skills' array flattened", employeeWithSkills);
  ```

- [x] **T-039**: Find the total salary of all employees working in the "Engineering" department.

  ```js
  // Get Engineering department from departments array.
  engineeringDepartment = departments.filter((department) => {
    return department.name === 'Engineering';
  });
  const totalSalaryofEngineeringEmployee = employees
    .filter((employee) => {
      // Filtering employee by Engineering department.
      return employee.departmentId === engineeringDepartment[0].id;
    })
    .map((employee) => {
      // Picking up only employee salary.
      return employee.salary;
    })
    .reduce((accu, current) => {
      // Sum of all employee salary.
      return accu + current;
    });

  console.log(
    'Total salary of all employees working in the Engineering department : ',
    totalSalaryofEngineeringEmployee
  );
  ```

- [ ] **T-040**: Check if there is any department where all employees earn more than 5000.
- [ ] **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
      Find the total number of unique projects being handled across all employees.
- [x] **T-042**: For each employee, find their department name and return an array of employee names with their department names.

  ```js
  const employeeWithDepartment = employees.map((employee) => {
    // Get employee department name as array of Object
    let employeeDepartment = departments.filter((department) => {
      return department.id === employee.departmentId;
    });

    return `${employee.name} - ${employeeDepartment[0].name}`;
  });

  console.log(
    'Employees name with his respective department : ',
    employeeWithDepartment
  );
  ```

- [x] **T-043**: Get a list of names of employees earning more than 6000.

  ```js
  const employeeEarningMore6000 = employees.filter((employee) => {
    return employee.salary > 6000;
  });

  console.log(
    'Employees who earn more than 6000 USD : ',
    employeeEarningMore6000
  );
  ```

- [x] **T-044**: Write a for-of loop to print the names of all employees from the employees array.

  ```js
  console.log('Print employees name usinf for-of loop : ');
  for (let employee of employees) {
    console.log(employee.name);
  }
  ```

- [x] **T-045**: Using a for-of loop, print the names of employees earning more than 5000.

  ```js
  console.log(
    'Print employees name who earning more than 5000 USD using for-of loop : '
  );

  for (let employee of employees) {
    if (employee.salary > 5000) {
      console.log(employee.name);
    }
  }
  ```

- [x] **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.

  ```js
  console.log('Print employee name and salary using for-loop');
  for (let employee of employees) {
    let { name, salary } = employee; // Destructuring employee object
    console.log(`Employee name : ${name} and Salary : ${salary}`);
  }
  ```

- [x] **T-047**: Write a for-of loop to match employees with their departments and print the results.

  ```js
  console.log(
    'Print employees name with its respective department using for-of loop : '
  );
  for (const employee of employees) {
    let departmentName = '';
    for (const department of departments) {
      if (employee.departmentId === department.id) {
        departmentName = department.name;
        break;
      }
    }
    console.log(`${employee.name} - ${departmentName}`);
  }
  ```

- [x] **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.

  ```js
  console.log('Print employees details using Array.prototype.entries() : ');
  const iterator = employees.entries();
  for (let [employeeIndex, employeeValue] of iterator) {
    console.log(employeeIndex, employeeValue.name);
  }
  ```

- [x] **T-049**: Given the array-like object below, access the second element and log it:

  ```js
  const arrayLike = { 0: 'First', 1: 'Second', length: 2 };
  ```

  ```js
  const secondElement = Array.from(arrayLike);
  console.log('Second element of an array-like : ', secondElement[1]);
  ```

- [x] **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.

  ```js
  function checkArgs() {
    console.log(arguments);
    const arr = Array.from(arguments); // Convert array-like to a regular array.
    return arr;
  }

  const arrayFromArrayLike = checkArgs(10, 40, 'a', true);
  console.log(
    'Array from array-like : ',
    Array.isArray(arrayFromArrayLike),
    arrayFromArrayLike
  );
  ```

- [x] **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.

  ```js
  const allDiv = document.querySelectorAll('div');
  console.log(allDiv);
  const nodeListToArray = Array.from(allDiv);
  console.log(
    'Convert NodeList to a regular array : ',
    Array.isArray(nodeListToArray),
    nodeListToArray
  );
  ```

- [x] **T-052**: Merge these two arrays into a single array:

  ```js
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  ```

  ```js
  const arr1_arr2 = arr1.concat(arr2);
  console.log('First array : ', arr1);
  console.log('Second array : ', arr2);
  console.log('Merged array : ', arr1_arr2);
  ```

- [x] **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]

  ```js
  const arrA = ['A', 'A', 'A', 'A', 'A'];
  const arrWithA = Array.from(arrA);
  console.log('Array with duplicate values : ', arrWithA);
  ```

- [x] **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.

  ```js
  const string_like = 'Hello';
  const arrayLikeFromString = Array.from(string_like);
  console.log(
    'Array-like from a string : ',
    Array.isArray(arrayLikeFromString),
    arrayLikeFromString
  );
  ```

- [x] **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().

  ```js
  const myFruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
  const fruitGroupByFirstLetter = Object.groupBy(
    myFruits,
    (firstLetter) => firstLetter[0]
  );
  console.log('Fruits grouped by the first letter : ', fruitGroupByFirstLetter);
  ```

- [ ] **T-056**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.

```js

```

- [x] **T-057**: Find the median of [5, 2, 9, 1, 3, 6, 8].

  ```js
  const arr6 = [5, 2, 9, 1, 3, 6, 8];
  // Sort ASC
  const sortedArr = arr6.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  const median = arr6[Math.floor(arr6.length / 2)];
  console.log('The median value of the array ', arr6, ' is : ', median);
  ```

- [x] **T-058**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).

  ```js
  const arr7 = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  let objArray = {};
  for (let value of arr7.values()) {
    objArray[value[0]] = value[1];
  }
  console.log('Object from the array values is : ', objArray);
  ```

- [x] **T-059**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

  ```js
  const arr8 = [
    ['a', 'b'],
    ['c', 'd'],
  ];
  const arrFlattenAndUppercased = arr8
    .flatMap((arrValue) => {
      return arrValue;
    })
    .map((arrValue) => {
      return arrValue.toUpperCase();
    });

  console.log(
    'Array flatten with uppercased values is : ',
    arrFlattenAndUppercased
  );
  ```

- [x] **T-060**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']

  ```js
  const myFavoriteFruit = [
    'apple',
    'banana',
    'apple',
    'mango',
    'banana',
    'banana',
  ];

  const fruitByName = Object.groupBy(myFavoriteFruit, (fruit) => fruit);
  // Using key to count the number of occurence.
  for (const key in fruitByName) {
    console.log(key, ' has ', fruitByName[key].length, ' occurrences.');
  }
  ```

- [x] **T-061**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']

  ```js
  const arrayLetters = ['a', 'b', 'c', 'd', 'e'];
  const newArrayLetters = arrayLetters.slice(1, 4);
  console.log('Extracted array with slice() is : ', newArrayLetters);
  ```

- [x] **T-062**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()

  ```js
  const arrNumbers = [9, 3, 1, 6, 8];
  const sortedArrNumbers = arrNumbers.toSorted((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  });
  console.log('Array before sorting : ', arrNumbers);
  console.log('Array sorted Ascending : ', sortedArrNumbers);
  console.log('Array after sorting : ', arrNumbers); // Same array, not mutate
  ```

- [x] **T-063**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()

  ```js
  const numbersValues = [1, 2, 3, 4, 5];
  console.log('Array before toReversed() : ', numbersValues);
  const arrWithToReversed = numbersValues.toReversed();
  console.log('Array with toReversed() applied : ', arrWithToReversed);
  console.log('Array after toReversed() : ', numbersValues); // Same array, not mutate

  console.log('Array before reverse() : ', numbersValues);
  const arrWithReversed = numbersValues.reverse();
  console.log('Array with reverse() applied : ', arrWithReversed);
  console.log('Array after reverse() : ', numbersValues); // Not same array because it has mutated
  ```

- [x] **T-064**: Group the follwing array elements based on age(Adult vs Non-Adult):

```js
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
```

```js
const usersGroupedByAge = Object.groupBy(users, ({ age }) => {
  return age >= 18 ? 'Adult' : 'Not-Adult';
});

console.log(
  'Users grouped based on thier age (Adult or Non-Adult) : ',
  usersGroupedByAge
);
```

- [x] **T-065**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".

  ```js
  const sentence =
    '40 Days of JavaScript by tapaScript is a powerful initiative';
  // Create an array by new space found
  const arrayFromSentence = sentence.split(' ');
  // Create a new array with word length
  const arrayWithWordLength = arrayFromSentence.map((word) => {
    return word.length;
  });
  // Find the maximun word length
  const maxWordLength = Math.max(...arrayWithWordLength);
  // Filter the array with to the maximum word length
  const theLongestWord = arrayFromSentence.filter((word) => {
    return word.length === maxWordLength;
  });
  // Show the maximum word (single or multiple ones)
  console.log(
    theLongestWord.length > 1
      ? `The longest words are ${theLongestWord}`
      : `The longest word is ${theLongestWord}`
  );
  ```

- [x] **T-066**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]

  ```js
  const num1 = [1, 2, 3, 4];
  const num2 = [3, 4, 5, 6];

  let commonElements = [];
  num1.forEach((num) => {
    if (num2.includes(num)) {
      // If a common element is found, then add it in the array
      commonElements.push(num);
    }
  });

  console.log(
    commonElements.length > 1
      ? 'The common values are : ' + commonElements
      : 'The common value is : ' + commonElements
  );
  ```

## Screenshots

![Image]()

![Image]()
