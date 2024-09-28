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

// forEach function
// takes a 3 values value, index, array
// arr.forEach((value, index, array) => {})

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
  console.log(sqr);
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

console.log(newArr);

// filter -> creates a new array with the result of filtered operations/ conditions.

let arrFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenArr = arrFilter.filter((val) => {
  return val % 2 === 0;
});

console.log(evenArr);

// reduce -> performs a some operations and reduce the array to a single value.

const output = arrFilter.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);

// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.

let marks = [85, 90, 93, 99, 80, 95];
let highMarks = marks.filter((val) => {
  return val > 90;
});
console.log(highMarks);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array.

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
