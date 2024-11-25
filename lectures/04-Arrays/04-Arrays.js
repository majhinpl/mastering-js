// Arrays in JS
// A collections of items

let marks = [98, 85, 72, 65, 40];

let sum = 0;

for (let val of marks) {
  sum += val;
}

console.log(sum);

let avg = sum / marks.length;
console.log(`marks of avg = ${avg}`);

// Array indeces

// Qs For a given array with prices of 5 items -> [250, 645, 300, 900, 50] all items have an offer of 10% OFF on them. change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];

for (let idx = 0; idx < prices.length; idx++) {
  let offer = prices[idx] / 10;

  prices[idx] -= offer;
}
console.log(prices);

// Array methods
// push() add to end

let foodItems = ["apple", "potato", "choumin", "momo"];
console.log(foodItems);

foodItems.push("Thukpa");
console.log(foodItems);

foodItems.push("sekuwa", "fish");
console.log(foodItems);

// pop() : delete from end & return

let deletedItem = foodItems.pop();
console.log(foodItems);

console.log("deleted item = ", deletedItem);

// toString() : convers array to string

console.log(foodItems);
console.log(foodItems.toString());

// concat() : joins multiple arrays & returs result

let marvelHeroes = ["thor", "spiderman", "ironman"];

let dcHeroes = ["superman", "batman"];
console.log("arrays concat method", marvelHeroes.concat(dcHeroes));

// unshift() : add to start

marvelHeroes.unshift("added heroes with unshift");
console.log(marvelHeroes);

// shift() : delete from start & return
let deletedHeroes = marvelHeroes.shift();
console.log("deleted with shift = ", deletedHeroes);

// slice() : returns a piece of the array
console.log("slice method", marvelHeroes.slice(1, 3));

// splice() : change original array (add, remove, replace)

let arr = [1, 2, 3, 4, 5, 6, 7];

// add element
arr.splice(2, 2, 101, 102);
console.log("add element", arr);

// delete element
arr.splice(3, 1);
console.log("delete element", arr);

// replace element
arr.splice(3, 1, 101);
console.log("replace element", arr);

// Looping over an array
for (let idx = 0; idx < marks.length; idx++) {
  console.log("for loop", marks[idx]);
}

let average = sum / marks.length;
console.log(`average marks of the students is ${average}`);

// Practice

// Qs. create an array to store companies -> "Bloombert", "Mircrisoft", "uber", "Google", "IBM", "Netflix"

let companies = ["Bloombert", "Mircrisoft", "uber", "Google", "IBM", "Netflix"];

console.log(companies);

// Remove the first company from the array

console.log(companies.shift());

// Remove Uber & Add ola in its place

companies.splice(2, 1, "ola");

// Add amazon at the end

// Basic Array Creation: Qs1. Create an array that contains the names of three of your favorite fruits.

const fruits = ["mango", "orange", "watermelon"];

console.log(fruits);
console.log(fruits.length);

// Qs2. Accessing Elements: If you have an array
let colors = ["red", "blue", "green"];
// , how would you access the second color?

console.log(colors[1]);

// Qs3. Updating Elements: In the colors array above, how would you change 'green' to 'yellow'?
colors[2] = "yellow";
console.log(colors);

// Qs.4 Adding Elements: How would you add 'purple' to the end of the colors array?

colors.push("purple");

console.log(colors);

// Qs.5 Removing Elements: How would you remove the first color from the colors array?
colors.shift();
console.log(colors);

// Qs.6 Array Length: What will colors.length return if the array contains ['red', 'blue', 'green']?
console.log(colors.length); // 3

// Qs.7 Iterating Through an Array: Given an array let numbers = [1, 2, 3, 4, 5];, write a loop that prints each number in the array to the console.

let numbers = [1, 2, 3, 4, 5];

for (num of numbers) {
  console.log(num);
}

// Qs.8 Sum of Array Elements: Using the same numbers array, calculate the sum of all the elements in the array.
let sumNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
  sumNumbers += numbers[i];
}
console.log(sumNumbers);

// Qs.9 Check for an Element: How would you check if the number 3 exists in the numbers array? Write the code for it.

if (numbers.includes(3)) {
  console.log("Yes! number 3 is included");
} else {
  console.log("NO! number 3 is not included");
}

// Qs. 10 Array Transformation: Create a new array from numbers where each element is multiplied by 2. For example, [2, 4, 6, 8, 10].

let numbersMul = 1;

for (let i = 0; i < numbers.length; i++) {
  numbersMul *= numbers[i];
}

console.log(numbersMul);

/* Qs. 11 Reversing an Array: 
Reverse the numbers array so that it becomes [5, 4, 3, 2, 1].
*/
console.log(numbers.reverse());

/* Qs. 12 Joining an Array: 
If you have an array let words = ['Hello', 'world'];, 
how would you combine the elements into a single string separated by a space? 
(Hint: Use .join())
*/

let words = ["Hello", "world"];
console.log(words.join(" "));
