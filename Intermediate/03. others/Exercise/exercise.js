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



let myNum = [4, 7, 16, 3, 35];

let sum = 0;

function adder(number) {
	sum = sum + number;
}

myNum.forEach(adder);
console.log(sum);




