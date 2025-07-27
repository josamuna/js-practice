# js-practice

## **🎯 Goal of This Lesson**

- What is Variable?
- How to visualize variables?
- How Variables get stored?
- JavaScript Data Types
- How JavaScript sees code?

## **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-02]](https://youtu.be/tVqy4Tw0i64 'Video')

- ✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

  ```js
  let firstName = 'Eva';
  const age = 30;
  const isStudent = true;
  const programmingLanguage = 'JavaScript';
  ```

- ✅ Task 2: Print the values to the console.

```js
console.log(
  'Name = ',
  firstName,
  ', Age = ',
  age,
  ', Student Status = ',
  isStudent,
  ', Programming Language = ',
  programmingLanguage
);
```

- ✅ Task 3: Try reassigning values to let and const variables and observe errors.
- ✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

  ```js
  let personIdentity = {
    firstName: firstName,
    age: age,
    studentStatus: isStudent,
    programming: programmingLanguage,
  };

  console.log(personIdentity);

  personIdentity = { lastName: 'Cobra', gender: 'F' };
  console.log(personIdentity);

  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers);

  numbers = [1, 2, 3, 4, 5];
  console.log(numbers);

  age = 25; // Should rise an error
  ```

### Screenshot

![Image](https://github.com/user-attachments/assets/70006efc-48be-4bb6-b6f7-fa2052b8ac93)
