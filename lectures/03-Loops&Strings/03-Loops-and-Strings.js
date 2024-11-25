// Loops in JS
// Loops are used to execute a piece of code again & again

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 !== 0) {
//     console.log("result=", i);
//   }
// }

// Infinite loop : A loop that never ends

// while loop

/* while(condition) {
// do some work
}
*/

// do-while loop

/*
do {
    // do some work
    1++
}  while (i < 10)

*/

// for-of Loop

/*
for(let val of strVar) {
    // do some work
}



let yourName = "Nepal";

for (let i of yourName) {
    console.log("i=", i);
}
*/
// for-in Loop

/*
for(let key in objVar) {
    //do some work
}
*/
/*
let student = {
  name: "Nepal majhi",
  age: 31,
  cgpa: 7.5,
  isPass: true,
};

for (let key in student) {
    console.log("key", key, "value", student[key]);
}
*/

// Practice
// Qs1. Print all even numbers from 0 to 100.

/*

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("result", i);
  }
}

*/

//Qs2. Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

/*
let gameNum = 25;

let userNum = prompt("Guess the game num : ");

while (userNum != gameNum) {
  userNum = prompt("You enter the wrong num!, guss again");
}
console.log("Congratulations!, You enter the right number");

*/

// Strings in JS
// String is a sequence of characters used to represent text

let str = "hello world";

// console.log("str", str);
console.log("str", str[1]);

// Template Literals in JS
// A way to have embedded expressions in strings

let sentence = `This is a template literal`;
console.log(typeof sentence);

// String interpolation
// To create strings by doing substitution of placeholders

// String Methods in JS
// These are built-in function to manipulate a string

sentence.toLowerCase();
sentence.toUpperCase();
sentence.trim();

console.log(sentence);

let toNewStr = sentence.toLocaleUpperCase();

console.log(toNewStr);

toNewStr = "   to trim method   ";

toNewStr = toNewStr.trim();
console.log(toNewStr);

toNewStr = "to slice method";

console.log(toNewStr);

console.log(toNewStr.slice(0, 5));

// concatenation

let concatStr1 = "nepal";
let concatStr2 = "majhi";

let concatStr = concatStr1.concat(concatStr2);
console.log(concatStr);

// Replace
let replaceStr = "Hello";

console.log(replaceStr.replace("H", "Y"));

// Practice
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

const userFullName = prompt("Enter your full name:");
const cleanName = userFullName.replace(/\s+/g, "");
const username = "@" + cleanName + cleanName.length;
console.log(username);
