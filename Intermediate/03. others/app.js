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

let list = ["one", 'two', "three", 'four'];

for (let index in list) {
	console.log(`${index}: ${list[index]}`);
}

console.log("");

let number = ["ones's", "two's", "threes's", "four's"];

for (let numbers in number) {
	console.log(`${numbers}: ${number[numbers]}`);
}