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
let numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach(function(number) {
  console.log(number * 2);
});
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

/*
let numbers = [1, 2, 3, 4, 5, 6];

let double = numbers.map(num => num * 2);

console.log(double);
*/

/*
let peoples = [
	{firstName: "Daniel", lastName: "Aikhonmu"},
	{firstName: "Tobi", lastName: "Ogunyele"},
	{firstName: "Zalika", lastName: "Scott"}
];

const results = peoples.map(person => {
	return [person.firstName, person.lastName]
})

console.log(results);
*/


/*
// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

// We take an element from our source array & we pass it into our iterator function
// --> that iterator function has to return either a truthy or falsy value
// --> if it returns truthy value it will be included in a result array
// --> if it returns falsy value however, this new value will not be included in the new array

console.log(songs.filter(songs => songs.duration > 3));


const computers = [
	{ ram:4, hdd: 100 },
	{ ram:8, hdd: 100 },
	{ ram:16, hdd: 100 },
	{ ram:32, hdd: 100 },
	{ ram:64, hdd: 100 },
];

console.log(computers.filter(comp => comp.ram <= 16));
*/


/*
// The find() method is another built-in array helper in JavaScript that allows you to find the first element in an array that matches a specific condition. It returns the value of the first element that satisfies the given testing function, or undefined if no element is found.

// ------------------------------

const peoples = [
  { name: "huxn", age: 17 },
  { name: "john", age: 18 },
  { name: "alex", age: 20 },
  { name: "jimmy", age: 30 },
  { name: "alex", age: 30 },
];


const res = peoples.find(person => person.name === "alex");
console.log(res);


// 2nd example

const posts = [
  { id: 1, content: "Good Post" },
  { id: 2, content: "Funny Post" },
  { id: 3, content: "Sad Post" },
	{ id: 4, content: "Funny Post" },
];

const postRes = posts.find(post => post.content === "Funny Post");
console.log(postRes); 
*/


// *****every and some helper****
//////////////////////////////////////////
// The every() and some() are two built-in array methods in JavaScript that allow you to check the elements of an array based on a given condition. Both methods take a callback function as an argument, which is applied to each element of the array.

// The every() method tests whether all elements in the array pass the condition specified by the provided callback function. It returns true if the callback function returns true for every element, and false if any element fails the condition.

// The some() method tests whether at least one element in the array passes the condition specified by the provided callback function. It returns true if the callback function returns true for at least one element, and false if no element passes the condition.

//////////////////////////////////////////

/*
const peoples = ["huxn", "jordan", "alex"];

const res = peoples.every(people => people.length === 4);
const res1 = peoples.some(people => people.length === 4);


console.log(res);
console.log(res1);

console.log("");

const songs = [
  { name: "Lucky You", duration: 4.34 },
  { name: "Just Like You", duration: 3.23 },
  { name: "The Search", duration: 2.33 },
  { name: "Old Town Road", duration: 1.43 },
  { name: "The Box", duration: 5.23 },
];

const everyRes = songs.every(song => song.duration > 3);
const someRes = songs.some(song => song.duration > 3);
const everyRes1 = songs.every(song => song.duration > 1);


console.log(everyRes);
console.log(someRes);
console.log(everyRes1);
*/
