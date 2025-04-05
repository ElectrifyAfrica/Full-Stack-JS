// for in loop

// Iterate over object & log the property and the value of that object using for in loop.

/*
const object = { a: 1, b: 2, c: 3 };

for (const properties in object) {
	console.log(`${properties}: ${object[properties]}`);
} 
*/

// ****for of loop***

/*

const array1 = ["apple", "banana", "cherry"];

for (const elements of array1) {
	console.log(elements);
}

*/

/*
const colors = ["teal", "blue", "red", "green"];

colors.forEach(color => console.log(color));
*/



/*
const myNum = [4, 7, 16, 3, 35, 98, 237, 12, 5, 9786, 4274, 43];

const sumMyNum = myNum.reduce((acc, num) => acc + num, 0);

console.log(sumMyNum);
*/




// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of   number & add that with the sum.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. print the sum variable.


/*
let myNum = [4, 7, 16, 3, 35];

let sum = 0;

function adder(number) {
	sum = sum + number;
}

myNum.forEach(adder);
console.log(sum);
*/

/*
const numbers = [10, 3, 5, 8, 20];

let compounding = numbers.map(num => num * 10);

console.log (compounding);
*/

/*
const numbers1 = [10, 3, 5, 8, 20];

function myFunction(num) {
	return num * 100; 
}

const newArr = numbers1.map(myFunction)
console.log(newArr);
*/

/*
//****array filter ****

// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 17, 40];

greaterAges = ages.filter(age => age > 18);

console.log(greaterAges);


//sol 2

const ages1 = [37, 50, 16, 22, 4, 12, 40];

function checkAdult(age) {
  return age >= 18;
}

const res = ages1.filter(checkAdult);
console.log(res);



// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

words.forEach((word) => {
	console.log(word.length)
});

//console.log(words.filter(word1 => word1.length > 6));

const result = words.filter(word => word.length > 6);
console.log(result);

*/

/*
let products1 = [
	{ name: "Checkers", category: "Toys" },
	{ name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const productsRes1 = products1.filter(product1 => product1.category === "Books");

console.log(productsRes1);
*/

//***find method***

// -------------------------------
// 1. Iterate over "ages" array
// 2. Print only those ages which is greater then 18

/*
const ages = [3, 10, 18, 23, 24];

const agesRes = ages.find(age => age > 18);

console.log(agesRes);


//2nd solution

const age1 = [3, 10, 18, 20, 67];

function checkAge(age) {
	return age > 18;
}

const res = age1.find(checkAge);

console.log(res);
*/

// -------------------------------
// BONUS => REFACTOR
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

/*
let products = [
	{ name: "Checkers", category: "Toys" },
	{ name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const productsRes = products.find(product => product.category === "Books");

console.log(productsRes);
*/

// *****every and some helper****
/*
// REFACTOR -> USE EVERY & SOME HELPERS
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

let allProductsBooks = true;
let someProductsBooks = false;

for (let i = 0; i < products.length; i++) {
  if (products[i].category != "Books") {
    allProductsBooks = false;
  } else {
    someProductsBooks = true;
  }
}
console.log(allProductsBooks);
console.log(someProductsBooks);


//my solution

let products1 = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const everyPrdRes = products1.every(product => product.category === "Books");
const somePrdRes = products1.some(product => product.category === "Books");

console.log(everyPrdRes);
console.log(somePrdRes);
*/

// their solution

/*
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];


// do all products have a category of Books
let allProductsBooks = products.every(function (product) {
  return product.category === "Books";
});

// do any products have a category of Books
let someProductsBooks = products.some(function (product) {
  return product.category === "Books";
});

console.log(allProductsBooks);
console.log(someProductsBooks);

*/