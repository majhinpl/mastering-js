// Function in js

function myFunction() {
  console.log("i am learning JS");
}
myFunction();

// parameter -> input

function paraFunc(msg) {
  // parameter -> input
  console.log(msg);
}
paraFunc("para function"); // argument

// Function -> 2 number, sum

function sum(x, y) {
  s = x + 7;
  return s;
}

let val = sum(3, 4);
console.log(val);

// Arrow functions -> Compact way of writing a function

const arrowSum = (a, b) => {
  console.log(a + b);
};

const arrowMul = (a, b) => {
  return a * b;
};

// Practice
// Qs. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the string.

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("nepal"));

// Qs. 2 Create an arrow function to perform the same task.

const countVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

// forEach loop in arrays
// takes a 3 values value, index, array
// arr.forEach((value, index, array) => {})

let cities = ["ktm", "solu", "khotang"];

cities.forEach((val, idx, arr) => {
  console.log(val.toUpperCase(), idx, arr);
});

/*
 Higher order function/methods

 takes function paramiter / return function
*/

let arr = [1, 2, 3, 4, 5];
arr.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

let arr1 = ["ktm", "pokhara", "solu"];

arr1.forEach((val, idx, arr) => {
  console.log(val, idx, arr);
});

arr1.push("new city");
console.log(arr1);

// questions
// For a given array of numbers, print the square of each value using the forEach loop.

let numArr = [1, 2, 3, 4, 5, 6, 45, 48];

numArr.forEach((num) => {
  const sqr = num * num;
  console.log(`sqr of ${num}`, sqr);
});

// 2nd type
let calNums = (num) => {
  console.log(num * num);
};

numArr.forEach(calNums);

// Array methods
// map -> creates a new array with the result of some operations.

numArr.map((val) => {
  console.log(val);
});

const newArr = numArr.map((val) => {
  return val * val;
});

console.log("map method", newArr);

// filter -> creates a new array with the result of filtered operations/ conditions.

let arrFilter = [1, 2, 3, 4, 5, 101, 6, 7, 8, 9];

const evenArr = arrFilter.filter((val) => {
  return val % 2 === 0;
});

console.log("Filter method", evenArr);

// reduce -> performs a some operations and reduce the array to a single value.

const output = arrFilter.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Reduce method", output);

const largestNum = arrFilter.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log("Reduce method large number = ", largestNum);

// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [85, 90, 93, 99, 80, 95];
let highMarks = marks.filter((val) => {
  return val > 90;
});
console.log(highMarks);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

/*
const n = prompt("Input your number from 1 - 9");

let newArr1 = [];

for (let i = 1; i <= n; i++) {
  newArr1[i - 1] = i;
}
console.log(newArr1);

const arrSum = newArr1.reduce((prev, curr) => {
  return prev + curr;
});

console.log("sum = ", arrSum);

const factorial = newArr1.reduce((prev, curr) => {
  return prev * curr;
});

console.log("factorial = ", factorial);
*/

// practice with chatGpt
// Basic Functions

// Write a function greet that takes a name as a parameter and returns a greeting message.

function greet(msg) {
  return (msg = "Greetings");
}

// Create a function add that takes two numbers and returns their sum.
function add(a, b) {
  return a + b;
}

// Write a function isEven that checks if a given number is even.
function isEven(num) {
  if (num % 2 === 0) {
    console.log(`Your number ${num} is even`);
  } else {
    console.log(`Your number ${num} is odd`);
  }
  return num;
}

// Function Expressions
// Rewrite the greet function as a function expression.

const greetExpression = function (msg) {
  return (msg = "Greetings");
};
greetExpression();

// Create a function expression to calculate the factorial of a number.

/*
let factorialNum = prompt(
  "Input the number you want to get the factorial of a number. num 1 - 10"
);
*/

let factorialNumNew = [];

const factorial = function (num) {
  for (let i = 0; i <= factorialNumNew; i++) {
    factorialNumNew[1 - 1] = i;
  }
};

// Qs.2 Arrow Functions
// Rewrite the add function using an arrow function.

const addArrow = (a, b) => {
  return a + b;
};

// Create an arrow function findSquare that returns the square of a number.

const findSquare = (sqr) => {
  return sqr ** sqr;
};

// Qs.4 Methods
// Write a method inside an object that returns the sum of all numbers in an array stored in the object.

const methodInsideObject = {
  numbers: [1, 2, 3, 4, 5],
  sum: function () {
    return this.numbers.reduce((prev, curr) => prev + curr, 0);
  },
};

console.log(methodInsideObject.sum());

const newmethodInsideObject = {
  numbers: [1, 2, 3, 4, 5],
  sum: function () {
    let total = 0;
    for (let i = 0; i < this.numbers.length; i++) {
      total += this.numbers[i];
    }
    return total;
  },
};

console.log(newmethodInsideObject.sum());

// Create an object with a method reverseString that reverses a given string

const strManipulator = {
  reverseString: function (str) {
    return str.split("").reverse().join("");
  },
};

const originalStr = "hello";
const reverseStr = strManipulator.reverseString(originalStr);

console.log("original", originalStr);
console.log("recese", reverseStr);

// Qs.5 Advanced Functions
// Write a function calculateArea that takes the shape (circle, rectangle) and dimensions, and returns the area based on the shape.

function calculateArea(shape, dimensions) {
  if (shape === "circle") {
    const { radius } = dimensions;

    if (!radius || radius <= 0) {
      throw new Error("Please provide a valid radius.");
    }
    return Math.PI * radius * radius; // Area of a circle
  } else if (shape === "rectangle") {
    const { length, width } = dimensions;

    if (!length || !width || length <= 0 || width <= 0) {
      throw new Error("Please provide valid length and width.");
    }
    return length * width; // Area of a rectangle
  } else {
    throw new Error("Unsupported shape. Use 'circle' or 'rectangle'.");
  }
}

// Circle

try {
  const circleArea = calculateArea("circle", { radius: 5 });
  console.log("Circle Area:", circleArea);
} catch (error) {
  4;
  console.error(error.message);
}

// Rectangle

try {
  const rectangleArea = calculateArea("rectangle", { length: 10, width: 5 });
  console.log("Rectangle Area:", rectangleArea);
} catch (error) {
  console.error(error.message);
}
