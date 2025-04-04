//***** for in loop *****
/*
let person = {
	name: "Daniel",
	age: 32,
	gender: "male"
}

for (let car in person) {
	console.log(car, person[car]);
}

console.log (" ");

for (let keys in person) {
	console.log(keys);
}

console.log("");

for (let details in person) {
	console.log(person[details]);
}

*/

/*
let list = ["one", 'two', "three", 'four'];

for (let index in list) {
	console.log(`${index}: ${list[index]}`);
}

console.log("");

let number = ["ones's", "two's", "threes's", "four's"];

for (let numbers in number) {
	console.log(`${numbers}: ${number[numbers]}`);
}

*/

// *****for of loop*****

/*
let people = ["Daniel", "tobi", "Dolapo", "Maria"];

for (let person of people) {
	console.log(person);
}
*/

/*
const text = "duplicate my time"

for (const char of text) {
	console.log(char)
}
*/

// *****for each method*****

/*
const colors = ["teal", "blue", "red", "green"];

colors.forEach(color => console.log(color));
*/

/*
const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.forEach((word, index, array) => {
	array[index] = word[0].toUpperCase() + word.substring(1);
});

console.log(words);
*/

// The .forEach() method does not return a new array, meaning capWords will be undefined.

//However, since forEach() modifies the original array in place, console.log(words) 
// will still 
// print the modified array.

//.forEach(): Modifies the original array but does not return a new one.

//.map(): Creates and returns a new transformed array.

/*

const words = ["hello", "bird", "table", "football", "pipe", "code"];

const capWords = words.map(word => word[0].toUpperCase() + word.substring(1));

console.log(capWords);

*/
