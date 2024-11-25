// operators in js

// arithmetic operators +, -, *, /

let a = 6;
let b = 5;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b; // modulus operator. It calculates the remainder of a division operation.
let h = a ** b; // Exponentiation

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// unary operators

let i = a++; // increment
let j = a--; // Decrement

let k = ++a; // post increment
let l = --a; // post decrement

console.log(i);
console.log(j);

console.log(k);
console.log(l);

// Assignment Operators - (=, +=, -=, *=, %=, **=)

a += b;
a -= b;
a *= b;
a %= b;
a **= b;

console.log(a);

// comparison operators (==, ===, !=, !==, >, >=, <, <= )

// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==

b++;

console.log("6 == 5", a == b);
console.log("6 != 6", a != b);
console.log(`6 === "6"`, a === b);

// Logical Operators

// Logical AND &&
// Logical OR ||
// Logical Not !

// Conditional Statements

let mode = "light";

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color);

// if-else statement

if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}

console.log(color);

// Ternary operators

// condition ? true output : false output

let age = 31;

age >= 18 ? console.log("adult") : console.log("not adult");

// Practice
// Qs1. Get user to input a number using prompt("Enter a number:"). chech if the number is a multiple of 5 or not.

// let num = prompt("Enter a number :");

if (num % 5 === 0) {
  console.log(num, "is a multipl of 5");
} else {
  console.log(num, "is not a multipl of 5");
}

// Qs2. Write a code which can give grades to students according to their scores:
/* 
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = prompt("Enter a students scores:");
let grade;

if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}

console.log(grade);
