// Variables
// fullName = "nepal majhi";
// age = 31;
// price = 99.94;
// r = 14;
// x = null;
// y = undefined;

// isYello = true;

// console.log(fullName);
// console.log(age);
// console.log(price);
// console.log(radius);
// console.log(x);
// console.log(y);
// console.log(isYello);

// Variable Rules

// Variable names are case sensitive; “a” & “A” is different.

// Variable names are case sensitive; “a” & “A” is different.

// Only a letter, underscore( _ ) or $ should be 1st character.

// Reserved words cannot be variable names.

// let, const & var

// let yourName = "Nepal majhi";

// yourName = "neps";

// console.log(yourName);

// block
{
  //   let a = 5;
  //   console.log(a);
}

// Data Types in js

// Primitive (7)
// number, string, boolean, undefined, null, bigInt, symbol

let age = 24;
let price = 99.24;

console.log(typeof age);

// Non-primitive
// objects - A collection of value

const student = {
  fullName: "Super Hero",
  age: 24,
  marks: 86,
  isPass: true,
};

console.log(student);

student.age += 1;

console.log(student.fullName);
console.log(student["fullName"]);

console.log(student);

// Practice questions
// Qs1.  Create a const object called product to store information shown in the picture

const product = {
  productName: "ball pen",
  rating: 4,
  price: 1400,
  offer: 5,
};

console.log(product);

// Qs2.  Create a const object called profile to store information shown in the picture

const profile = {
  profieName: "Nepa Majhi",
  username: "@majhinpl",
  topSkills: "project coordination",
  connection: 112,
  location: "Jubail, Eastern, Saudi Arabia",
};

console.log(profile);
console.log(tytypeof, profile[username]);
