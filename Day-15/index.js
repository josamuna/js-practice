'use strict';
console.log('Day 15 Task of 40 days of JavaScript.');
// const symbole = ['✅', '✔️'];

// **T-001**: Create an array of 5 elements using the Array Constructor.
// Array constructor uses tne new kewword with the Array constructor.
const arrayConstructor = new Array(
  10,
  true,
  'Array Constructor',
  { name: 'Josue', age: 25 },
  [10, 2]
);
console.log(arrayConstructor);

// **T-002**: Create an array of 3 empty slots.
const emptyArray = new Array(3);
console.log(emptyArray);

// **T-003**: Create an array of 6 elements using the Array literals and access the fourth element in the array using its `length` property.
const fruits = ['🍊', '🍏', '🍋', '🥑', '🍉', '🍓'];
const avocado = fruits[3]; // The fourth element is located at the index 3 (zero based).
console.log('The fourth element is : ', avocado);

// **T-004**: Use the `for` loop on the above array to print elements in the odd index.
for (let fruitIndex in fruits) {
  if (fruitIndex % 2 !== 0) {
    // Odd index found
    console.log(fruits[fruitIndex]);
  }
}
// Same result.
for (let [index, fruit] of fruits.entries()) {
  if (index % 2 !== 0) {
    // Odd index found.
    console.log(fruit);
  }
}

// **T-005**: Add one element at the front and the end of an array.
let salad = ['🍄', '🥦', '🍀', '🥒', '🌶️'];
console.log('Salad before adding : ', salad);
salad.unshift('🍅'); // Add tomato at the front
console.log('Salad with tomato at the front : ', salad);
salad.push('🥕'); // Adding carot at the end.
console.log('Salad with carot at the end : ', salad);

// **T-006**: Remove an element from the front and the end of an array.
salad = ['🍄', '🥦', '🍀', '🥒', '🌶️'];
console.log('Salad before removing : ', salad);
salad.shift(); // Remove the first element at the front.
console.log('Salad without the front element ', salad);
salad.pop(); // Remove salad element at the end.
console.log('Salade witout the end element : ', salad);

// **T-007**: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
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

// **T-008**: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
const [, , ...rest] = favoriteFood;
console.log('Last eight food : ', rest);

// **T-009**: Clone an Array(Shallow cloning).
let foodCopy = favoriteFood.slice();
console.log(foodCopy);

// **T-010**: Empty an array using its length property.
foodCopy.length = 0;
console.log('Empty the array with its length property : ', foodCopy);

// **T-011**: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use `for-loop`.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i of numbers) {
  if (i === 5) {
    numbers.length = 6;
    break;
  }
}
console.log('Resized array from 10 to 6 elements : ', numbers);

// **T-012**: Create an Array of 10 elements. Use the `splice()` method to empty the array.
const emotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
console.log('Emotions before empty the array : ', emotions);
emotions.splice(0, 10);
console.log('Emotions after emoty the array : ', emotions);

// **T-013**: Create an Array of 10 elements. You can empty the array in multiple ways: using the `length` property, using the `pop()` method, using the `shift()` method, setting the array with `[]`, or the `splice()` method. Which among these methods are most efficient and why?
// The most efficient is the using of length property, because it is not iterate through the array.
let newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with length property.
newEmotions.length = 0;
console.log('Empty array using length property : ', newEmotions);
newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with pop method.
const emotion2Length = 10;
for (let i = 0; i < emotion2Length; i++) {
  newEmotions.pop();
}
console.log('Empty array using pop() method : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with shift method.
for (let i = 0; i < emotion2Length; i++) {
  newEmotions.shift();
}
console.log('Empty array using shift() method : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with [].
newEmotions = [];
console.log('Empty array using [] : ', newEmotions);

newEmotions = ['😅', '🤭', '😇', '😔', '😕', '😣', '🤩', '🤗', '😨', '😔'];
// Empty array with slice.
newEmotions.splice(0, newEmotions.length);
console.log('Empty array using slice method() : ', newEmotions);

// **T-014**: What happens when you concatenate two empty arrays?
// When two empty array are concatenate, it return an new empty array.
const arr3 = [];
const arr4 = [];
const emptyArrConcatenated1 = arr3.concat(arr4);
const emptyArrConcatenated2 = [...arr3, ...arr4];
console.log('Empty array with concat method() : ', emptyArrConcatenated1);
console.log('Empty array with spread operator : ', emptyArrConcatenated2);

// **T-015**: How can you check if a value is partially matching with any of the elements of an Array?
// By using the includes() method
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
console.log('Looking for July from moths array : ', months.includes('July')); // false.
console.log('Looking for Feb from moths array : ', months.includes('Feb')); // true.

// **T-016**: What is the difference between the slice() and splice() methods?
/*
    slice() is used to copy or clone an array. It does not mutate or alter the source array.
    splice() is used to modify, delete, or add elements in an array. It mutates or changes the source array.
*/

// **T-017**: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
const alphanumericArray = [
  'Franklin10',
  'John Santos1',
  'Helenna Zourgui70',
  'Darius Toronto28',
  'Patricia Write35',
];
console.log('source array before ascending sorting : ', alphanumericArray);
const sortAlphanumericArrayAsc = alphanumericArray.toSorted(); // Sort Ascending by default.
console.log('Array sorted ascending : ', sortAlphanumericArrayAsc);
console.log('source array after ascending sorting : ', alphanumericArray); // Not mutated or changed.

console.log('source array before descending sorting : ', alphanumericArray);
const sortAlphanumericArrayDesc = alphanumericArray.toSorted(function (a, b) {
  return a === b ? 0 : a > b ? -1 : 1;
}); // Sort Descending using comparator callback function.
console.log('Array sorted descending : ', sortAlphanumericArrayDesc);
console.log('source array after descending sorting : ', alphanumericArray); // Not mutated or changed.

// **T-018**: Can you give examples of sparse and dense arrays?
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
console.log('Dense Array : ', denseArray, ' With length : ', denseArray.length);

// **T-019**: Give a practical usages of the .fill() method.
let colorsArray = ['Yellow', 'Green', 'Blue', 'Pink', 'Magenta'];
colorsArray.fill('Gray', 2, 3); // From array indes 2 (Blue), fil array value with 'Gray' until the array length 3 (Blue). That means, Blue will be replaced with Gray.
console.log('Array with fill method applied : ', colorsArray);

// **T-020**: How to convert an array to a string?
const colorsArrayToString = colorsArray.join('=>'); // Join with string '=>'
console.log('Converting color array to String', colorsArrayToString);

/*
  // Consider these input arrays for question **T-21** to **T-48**.
 */
// `employees array`: An array of employees working in a department.

const employees = [
  { id: 1, name: 'Alice', departmentId: 1, salary: 5000 },
  { id: 2, name: 'Bob', departmentId: 2, salary: 7000 },
  { id: 3, name: 'Charlie', departmentId: 3, salary: 4500 },
  { id: 4, name: 'Diana', departmentId: 1, salary: 5500 },
  { id: 5, name: 'Edward', departmentId: 2, salary: 8000 },
  { id: 6, name: 'Fiona', departmentId: 4, salary: 6000 },
  { id: 7, name: 'George', departmentId: 3, salary: 5200 },
  { id: 8, name: 'Helen', departmentId: 4, salary: 7200 },
  { id: 9, name: 'Ian', departmentId: 2, salary: 9800 },
  { id: 10, name: 'Jane', departmentId: 1, salary: 5100 },
];

// `departments array`: An array of departments where employees work.

const departments = [
  { id: 1, name: 'HR' },
  { id: 2, name: 'Engineering' },
  { id: 3, name: 'Marketing' },
  { id: 4, name: 'Sales' },
];

// **T-021**: Can you filter employees who work in the "Engineering" department?
let engineeringDepartment = departments.filter((department) => {
  return department.name === 'Engineering';
});

const employeesInEngineeringDept = employees.filter((employee) => {
  return employee.departmentId === engineeringDepartment[0].id;
});
console.log(
  'Employees in the Engineering departement : ',
  employeesInEngineeringDept
);

// **T-022**: Create a new array that combines employee names and department names in the format: "Alice (HR)".
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

// **T-023**: Find the highest salary among employees.
// Get all employee salary
const highestEmployeeSalary = employees
  .map((employee) => {
    return employee.salary;
  }) // Get the max Salary from employees array using reduce.
  .reduce((accu, currentSalary) => {
    return Math.max(accu, currentSalary);
  }, 0);

console.log('The employee with highest salary is : ', highestEmployeeSalary);

// **T-024**: Check if there is at least one employee in the "Sales" department.
// Filter only Sales department from departments array
const salesDepartment = departments.filter((department) => {
  return department.name === 'Sales';
});

const employeeInSalesDepartment = employees.some((employee) => {
  return employee.departmentId === salesDepartment[0].id;
});
console.log('Is there employees in Sales? ', employeeInSalesDepartment);

// **T-025**: Write a function to filter employees earning more than 6000.
const employeeWithMore6000 = employees.filter((employee) => {
  return employee.salary > 6000;
});
console.log('Employees who earn more than 6000 USD : ', employeeWithMore6000);

// **T-026**: Create an array of employee names only.
const employeeNames = employees.map((employee) => {
  return employee.name;
});
console.log('All the employee names : ', employeeNames);

// **T-027**: Calculate the total salary of all employees using reduce method.
const totalEmployeeSalary = employees
  .map((employee) => {
    return employee.salary;
  })
  .reduce((accu, employee) => {
    return accu + employee;
  }, 0);
console.log('The total salary of all employee is : ', totalEmployeeSalary);

// **T-028**: Is there any employee earning less than 5000?
const employeeWithLess5000 = employees.some((employee) => {
  return employee.salary < 5000;
});
console.log(
  'Is there any employee earning less than 5000?',
  employeeWithLess5000
);

// **T-029**: Find the first employee who earns exactly 5100.
// Filter returns the exact matched object instead of filter, which will return an array of objects.
const firstEmployeeEarn5100 = employees.find((employee) => {
  return employee.salary === 5100;
});
console.log(
  'The first employee who earns exactly 5100 is : ',
  firstEmployeeEarn5100
);

// **T-030**: Find the last employee in the "HR" department.
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

// **T-031**: Find the first employee in the "Marketing" department.
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

// **T-032**: Check if all employees earn more than 4000.
const isThereAllEmployeeEarnMore4000 = employees.every((employee) => {
  return employee.salary > 4000;
});
console.log(
  'Is there all employees earn more than 4000 USD : ',
  isThereAllEmployeeEarnMore4000
);

// **T-033**: Find the first employee in the "Sales" and "HR" department.
const firstEmployeeInSaleAndHRDepart = employees.find((employee) => {
  return (
    employee.id === salesDepartment[0].id || employee.id === HRDepartment[0].id
  );
});
console.log(
  'The first employee in the "Sales" and "HR" department is : ',
  firstEmployeeInSaleAndHRDepart
);

// **T-034**: Verify if all employees belong to a department listed in the departments array.
// Get all departmentId only
const departmentId = departments.map((department) => {
  return department.id;
});
// Check if all employee has an departmentId match the one in the previous departmetId array.
const isThereAllEmployeeBelongsToDepartmentArray = employees.every(
  (employee) => {
    return departmentId.includes(employee.departmentId);
  }
);

console.log(
  'Is there all employees belong to a department in departments array : ',
  isThereAllEmployeeBelongsToDepartmentArray
);

// **T-035**: Log each employee's name and department name to the console.
console.log('Show all employees name and department : ');
employees.forEach((employee) => {
  let department = departments.filter((department) => {
    return employee.departmentId === department.id;
  });
  console.log(`${employee.name} works at ${department[0].name} department.`);
});

// **T-036**: Extract all employee names into a single array.
const employeeNamesArray = employees.map((employee) => {
  return employee.name;
});
console.log('Employee names into a single array : ', employeeNamesArray);

// **T-037**: Increment each employee's salary by 10%.
const employeeAdd10PercentSalary = employees.map((employee) => {
  return employee.salary + employee.salary * 0.1;
});
console.log(
  'Employees Salaries increased by 10% : ',
  employeeAdd10PercentSalary
);

// **T-038**: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].
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
  let skills = employee.skills.flat(); // Flat skills array.
  employee['skills'] = skills; // Update the array skills with flattened.

  return employee;
});
console.log("Employes with skills' array flattened", employeeWithSkills);

// **T-039**: Find the total salary of all employees working in the "Engineering" department.
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

// **T-040**: Check if there is any department where all employees earn more than 5000.

// First map departments array to loop through each one.
let isThereDepartmentWithEmployeesEarningMore5000 = departments
  .map((department) => {
    // filter to get all employee working in the current selected department.
    let employeeOfDepartment = employees
      .filter((employee) => {
        return employee.departmentId === department.id;
      }) // Check whether all employee from this department earn more than 5000.
      .every((employee) => {
        return employee.salary > 5000;
      });

    return employeeOfDepartment;
  }) // From boolean array, check if at least one department (index) has employee which earn more than 5000 (Means true).
  .some((empMoreThan5000) => {
    return empMoreThan5000;
  });

// If the last value is true, then the answer is true and false otherwirse.
console.log(
  'Is there any department where employees earn more than 5000 USD : ',
  isThereDepartmentWithEmployeesEarningMore5000 ? 'YES' : 'NO'
);

// **T-041**: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }).
//       Find the total number of unique projects being handled across all employees.
const employeesProject = [
  {
    id: 1,
    name: 'Alice',
    departmentId: 1,
    projects: ['Project A', 'Project B'],
    salary: 5000,
  },
  {
    id: 2,
    name: 'Bob',
    departmentId: 2,
    projects: ['Project A', 'Project B', 'Project C'],
    salary: 7000,
  },
  {
    id: 3,
    name: 'Charlie',
    departmentId: 3,
    projects: ['Project E', 'Project F'],
    salary: 4500,
  },
  {
    id: 4,
    name: 'Diana',
    departmentId: 1,
    projects: ['Project G', 'Project H', 'Project I'],
    salary: 5500,
  },
  {
    id: 5,
    name: 'Edward',
    departmentId: 2,
    projects: ['Project B', 'Project D'],
    salary: 8000,
  },
  {
    id: 6,
    name: 'Fiona',
    departmentId: 4,
    projects: ['Project J', 'Project D'],
    salary: 6000,
  },
  {
    id: 7,
    name: 'George',
    departmentId: 3,
    projects: ['Project K', 'Project L'],
    salary: 5200,
  },
  {
    id: 8,
    name: 'Helen',
    departmentId: 4,
    projects: ['Project M'],
    salary: 7200,
  },
  {
    id: 9,
    name: 'Ian',
    departmentId: 2,
    projects: ['Project N'],
    salary: 4800,
  },
  {
    id: 10,
    name: 'Jane',
    departmentId: 1,
    projects: ['Project A', 'Project B', 'Project O', 'Project P'],
    salary: 5100,
  },
];

// Get all employee project with map.
const allEmployeeProjects = employeesProject
  .map((employee) => {
    return employee.projects;
  }) // Then reduce the previous array to have only one project's array.
  .reduce((project, currentProject) => {
    return project.concat(currentProject);
  }, []); // To return an array, we initialize the reduce with an empty array.

// Reduce the projects' array to found only unique ones.
const totalUniqueProject = allEmployeeProjects.reduce(
  (projectAccu, currentProject, index, allProjects) => {
    let countProjectNumber = 0;
    // Loop from all projects' array and when a project is repeated more than one,
    // It should not be added to the final array (totalUniqueProject).
    allProjects.forEach((project) => {
      if (project === currentProject) {
        countProjectNumber++;
      }
    });
    // Once a project is reapeted more than once, the accumulator is returned,
    // otherwise, we concatenate array with the new unique project found.

    return countProjectNumber > 1
      ? projectAccu
      : projectAccu.concat(currentProject);
  },
  [] // To return an array, we initialize the reduce with an empty array.
);

console.log(
  'Total unique projects handled across all employees is : ',
  totalUniqueProject.length,
  ' And their detail is : ',
  totalUniqueProject
);

// **T-042**: For each employee, find their department name and return an array of employee names with their department names.
const employeeWithDepartment = employees.map((employee) => {
  // Get employee department name as array of Object.
  let employeeDepartment = departments.filter((department) => {
    return department.id === employee.departmentId;
  });

  return `${employee.name} - ${employeeDepartment[0].name}`;
});

console.log(
  'Employees name with his respective department : ',
  employeeWithDepartment
);

// **T-043**: Get a list of names of employees earning more than 6000.
const employeeEarningMore6000 = employees.filter((employee) => {
  return employee.salary > 6000;
});

console.log(
  'Employees who earn more than 6000 USD : ',
  employeeEarningMore6000
);

// **T-044**: Write a for-of loop to print the names of all employees from the employees array.
console.log('Print employees name using for-of loop : ');
for (let employee of employees) {
  console.log(employee.name);
}

// **T-045**: Using a for-of loop, print the names of employees earning more than 5000.
console.log(
  'Print employees name who earning more than 5000 USD using for-of loop : '
);

for (let employee of employees) {
  if (employee.salary > 5000) {
    console.log(employee.name);
  }
}

// **T-046**: Modify the for-of loop to destructure each employee object and log their name and salary.
console.log('Print employee name and salary using for-loop');
for (let employee of employees) {
  let { name, salary } = employee; // Destructuring employee object.
  console.log(`Employee name : ${name} and Salary : ${salary}`);
}

// **T-047**: Write a for-of loop to match employees with their departments and print the results.
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

// **T-048**: Use Array.prototype.entries() with a for-of loop to print the index and name of each employee.
console.log('Print employees details using Array.prototype.entries() : ');
const iterator = employees.entries();
for (let [employeeIndex, employeeValue] of iterator) {
  console.log(employeeIndex, employeeValue.name);
}

// **T-049**: Given the array-like object below, access the second element and log it:
const arrayLike = { 0: 'First', 1: 'Second', length: 2 };

const secondElement = Array.from(arrayLike);
console.log('Second element of an array-like : ', secondElement[1]);

// **T-050**: Write a function that takes a variable number of arguments and converts the arguments object into a real array using Array.from.
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

// **T-051**: Write a snippet to select all div elements on a webpage (using document.querySelectorAll) and convert the resulting NodeList into an array.
const allDiv = document.querySelectorAll('div');
console.log(allDiv);
const nodeListToArray = Array.from(allDiv);
console.log(
  'Convert NodeList to a regular array : ',
  Array.isArray(nodeListToArray),
  nodeListToArray
);

// **T-052**: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];

const arr1_arr2 = arr1.concat(arr2);
console.log('First array : ', arr1);
console.log('Second array : ', arr2);
console.log('Merged array : ', arr1_arr2);

// **T-053**: Create an array of n duplicate values using Array.from. Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"].
const arrA = ['A', 'A', 'A', 'A', 'A'];
const arrWithA = Array.from(arrA);
console.log('Array with duplicate values : ', arrWithA);

// **T-054**: Use Array.from to convert a string like "Hello" into an array of characters.
const string_like = 'Hello';
const arrayLikeFromString = Array.from(string_like);
console.log(
  'Array-like from a string : ',
  Array.isArray(arrayLikeFromString),
  arrayLikeFromString
);

// **T-055**: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'], group words by their first letter using group().
const myFruits = ['apple', 'banana', 'apricot', 'mango', 'blueberry'];
const fruitGroupByFirstLetter = Object.groupBy(
  myFruits,
  (firstLetter) => firstLetter[0]
);
console.log('Fruits grouped by the first letter : ', fruitGroupByFirstLetter);

// **T-056**: From this array [3, 7, 3, 2, 3, 8, 7, 7], find the most repeated number. Hint: Use array method.
// const arr5 = [
//   3, 0, 1, 4, 0, 3, 4, 2, 3, 3, 1, 0, 4, 4, 1, 1, 0, 8, 4, 3, 3, 4, 7, 0, 7, 8,
//   8, 4, 0, 7, 3, 0, 4,
// ];

// Some improvement should be done for this exercise because sometine it is not working properly.

const arr5 = [3, 7, 3, 2, 3, 8, 7, 7];
const groupedNumbers = Object.groupBy(arr5, (number) => number); // First group each number and match by their occurence.
let highestLength = 0; // Will hold the highest length fr the grouped numbers.
// Convert grouped object to array.
const highestObjArray = Object.entries(groupedNumbers)
  .filter((number, index, arr) => {
    // Filter the array to match only those with the highest length.
    if (highestLength < number[1].length) {
      highestLength = number[1].length;
    }

    return number[1].length === highestLength;
  })
  .flat();

// Finally formatting the view.
// When more than one values matched the result, loop through then and print values (Only on even index are numbers).
console.log(
  highestObjArray.length > 2
    ? ` ${highestObjArray.forEach((number, index) => {
        if (index % 2 === 0) {
          console.log('The most repeated values : ', number);
        }
      })} and ${highestLength} times each of them.`
    : `The most repeated value is ${highestObjArray[0]} and ${highestLength} times`
);

// **T-057**: Find the median of [5, 2, 9, 1, 3, 6, 8].
const arr6 = [5, 2, 9, 1, 3, 6, 8];
// Sort ASC
const sortedArr = arr6.sort((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});

const median = arr6[Math.floor(arr6.length / 2)];
console.log('The median value of the array ', arr6, ' is : ', median);

// **T-058**: Convert this array [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 } using array method(s).
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

// **T-059**: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].
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

// **T-060**: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'].
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

// **T-061**: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e'].
const arrayLetters = ['a', 'b', 'c', 'd', 'e'];
const newArrayLetters = arrayLetters.slice(1, 4);
console.log('Extracted array with slice() is : ', newArrayLetters);

// **T-062**: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted().
const arrNumbers = [9, 3, 1, 6, 8];
const sortedArrNumbers = arrNumbers.toSorted((a, b) => {
  return a === b ? 0 : a > b ? 1 : -1;
});
console.log('Array before sorting : ', arrNumbers);
console.log('Array sorted Ascending : ', sortedArrNumbers);
console.log('Array after sorting : ', arrNumbers); // Same array, not mutate.

// **T-063**: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse().
const numbersValues = [1, 2, 3, 4, 5];
console.log('Array before toReversed() : ', numbersValues);
const arrWithToReversed = numbersValues.toReversed();
console.log('Array with toReversed() applied : ', arrWithToReversed);
console.log('Array after toReversed() : ', numbersValues); // Same array, not mutate.

console.log('Array before reverse() : ', numbersValues);
const arrWithReversed = numbersValues.reverse();
console.log('Array with reverse() applied : ', arrWithReversed);
console.log('Array after reverse() : ', numbersValues); // Not same array because it has mutated.

// **T-064**: Group the follwing array elements based on age(Adult vs Non-Adult):

const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];

const usersGroupedByAge = Object.groupBy(users, ({ age }) => {
  return age >= 18 ? 'Adult' : 'Not-Adult';
});

console.log(
  'Users grouped based on their age (Adult or Non-Adult) : ',
  usersGroupedByAge
);

// **T-065**: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
const sentence = '40 Days of JavaScript by tapaScript is a powerful initiative';
// Create an array by new space found.
const arrayFromSentence = sentence.split(' ');
// Create a new array with word length.
const maxWordLength = arrayFromSentence
  .map((word) => {
    return word.length;
  }) // Aplying reduce to find the maximun words length.
  .reduce((accu, curr) => {
    return Math.max(accu, curr);
  }, 0);
// Find the maximun word length.
// Filter the array with to the maximum word length.
const theLongestWord = arrayFromSentence.filter((word) => {
  return word.length === maxWordLength;
});
// Show the maximum word (single or multiple ones).
console.log(
  theLongestWord.length > 1
    ? `The longest words are ${theLongestWord}`
    : `The longest word is ${theLongestWord}`
);

// **T-066**: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6].
const num1 = [1, 2, 3, 4];
const num2 = [3, 4, 5, 6];

let commonElements = [];
num1.forEach((num) => {
  if (num2.includes(num)) {
    // If a common element is found, then add it in the array.
    commonElements.push(num);
  }
});

console.log(
  commonElements.length > 1
    ? 'The common values are : ' + commonElements
    : 'The common value is : ' + commonElements
);
