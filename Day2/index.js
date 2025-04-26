let firstName = 'Eva';
const age = 30;
const isStudent = true;
const programmingLanguage = 'JavaScript';
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
