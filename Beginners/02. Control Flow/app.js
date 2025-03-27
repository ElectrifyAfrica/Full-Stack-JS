//import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

/*
// 1. Conditional Statement

let a = 10;
let b = 20;

if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}
*/

/*
let time = 10;
let greetings;

if (time < 10) {
  greetings = "Good Morning";
  console.log(greetings)
} else if (time < 20) {
  greetings = "Good Day";
  console.log(greetings);
} else {
  greetings = "Good Evening";
  console.log(greetings);
}
*/


// 2. switch (expression) {
  //case X:
    // print
    //break;
  //case y:
    //print
    //break;
//}

/*
let x = 0;
let bulb;

switch (x) {
  case 0:
    bulb = "off";
    console.log(bulb);
    break;
  case 1:
    bulb = "On";
    console.log(bulb);
    break;
  default:
    bulb = "no value found";
    console.log(bulb);
}
*/

/*
let day = 'friday';

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Dont know the day of the week");
}
*/

/*
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
*/

/*

// for loop
for (let i = 0; i <= 10; i++) {
  console.log("-- Outer Loop --" , i);
  //nested loop
  for(let j = 1; j <= 2; j++ ) {
    console.log("--- Inner Loop ---", j);
  }
}
*/
/*
let i = 10;

while (i <= 100) {
  console.log('Hello World', i);
  i++;
}*/

/*
let i = 1;

do {
  console.log("Hello World", i);
  i++;
} while (i <= 5);
*/

/*
//1. Logical AND (&&)
// --> True if both the operands/boolean values are true, else evaluates to False

const a = true;
const b = false;
const c = 4;

// console.log(a && b);
// console.log(c > 2 && c < 2); // false

// 2. --> Logical OR (||)
// --> True if either of the operands/boolean values are true, evaluates to false if both are false.

//console.log(a || b);
//console.log(b || b);
//console.log(c > 2 || c < 2);

// 3. --> Logical NOT (!)
// --> True if the operands is false and vice-versa
console.log(!a);
console.log(!b);
*/

//array
/*
const numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray);

const stringArray = ['eat', 'sleep', 'code', 'repeat'];
console.log(stringArray);

//Accessing items from arrays
console.log(stringArray[0]);
console.log(stringArray[1]);
console.log(stringArray[2]);
console.log(stringArray[3]);

// Two Dimension || Nested Array
const nestArr = ["one", ["two", "three"], 1, true, false];
console.log(nestArr[1][1]);

const myLetters = ["h","e","f","g","i","k"];
console.log(myLetters);
*/

/*
const fruits = [
  "apples",
  "pomegranate",
  "mango",
  "strawberries",
  "pineapple",
  "grapefruit"
];

console.log(fruits);
console.log(fruits.length);
fruits.push("Banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("orange");
console.log(fruits);
*/

/*
const fruits =["apples", "pomegranate", "mango"];
const moreFruits = ["strawberries", "pineapple", "grapefruit"];
const totalFruits = fruits.concat(moreFruits);

console.log(totalFruits);
*/

/*
const pl =["JavaScript", "Golang", "Python", "PHP"];
const numbers = [3, 5, 2, 4, 1];

console.log(pl.includes("Golang"));
console.log(pl);
//console.log(pl.join("-"));
//console.log(pl.reverse());
console.log(pl.slice(0, 3));
console.log(numbers);
console.log(numbers.sort());
*/

/*
// objects
const person = {
  firstName: "Daniel",
  lastName: "webDev",
  age: 19,
  24: "twenty-four",
  location: ['Planet', "Earth"],
  isProgrammer: true
};

// Accessing Items from our object
//console.log(person);
//console.log(person["age"]);
//console.log(person["24"]);
//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.age);
//console.log(person.location);
//console.log(person.isProgrammer);

person.tubby = "world";
person.gender = "Male";
person.maritalStatus = "Married"

console.log(person);

//delete person["24"];
//delete person["lastName"];
//delete person.location;
console.log(person);
*/

/*
// function Decleration
function greet() {
  console.log("Hello from a function");
}

greet();
greet();

function sayHello(name) {
  console.log(`Hello ${name}`);
}

sayHello("Daniel");
sayHello("Alex");

function add(x, y) {
  return x + y;
}

//console.log(add(10, 20));

const res1 = add(100, 200);
const res2 = add(1050, 7000);

console.log(res1);
console.log(res2);
*/

/*
function myFunction(p1, p2, p3) {
  return (p1 * p2) + p3;
}

let x = myFunction(4, 3, 50);
console.log(x);

//Function Declaration
sayHello("Daniel");

function sayHello(username) {
  console.log(`Hello ${username}`);
}


//Function Expression

const greetings = function (user) {
  console.log(`Hello ${user}`);
};

greetings("John");
*/

// callback function
// When we provide a function as an (argument) to other function that function is known as a callback function.

/*
function showCallFunc(fn) {
  const value = 10;
  fn(value)
}

showCallFunc(function (value) {
console.log(value);
});
*/

/*
function greet(name, cb) {
  console.log(`Hello ${name}`)
  cb();
}

function cb() {
  console.log(`I am a callback function`);
}

greet("Danny", cb);
*/

//object
/*
function greet() {
  return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
}

const person = {
  name: "John",
  age: 30,
  greet,
};

console.log(person.greet());
*/

/*
const person = {
  name: "Daniel",
  age: 32,
  greet: function () {
    return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
  },
};
console.log(person.greet());
*/

/*
const person = {
  "name": "Oseyemen Daniel",
  "age": 20,
  "email": "danielose2009@yahoo.com",
  "isSubscribed": true,
  "hobbies": ["Reading", "Running", "Cooking"],
  "address": {
    "province": "Ontario",
    "city": "Vaughan",
  },
};

// JSON.stringify()
const jsonString = JSON.stringify(person);
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
*/

/*
const currentDate = new Date();
console.log(currentDate);
*/
/*
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const milliseconds = date.getMilliseconds();

console.log(`Full-Date: ${date}`);
console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Milliseconds: ${milliseconds}`);
console.log("");
*/

/*
console.log(dayjs().format());
console.log(dayjs().format('dddd, MMMM, D YYYY, hh:mm:ss A '));
console.log(dayjs().format('YYYY-MM-DD HH:mm:ss')); 
console.log(dayjs().format('MMMM'));
console.log(dayjs().month() + 1);
console.log(dayjs().date());
console.log(dayjs().day());
console.log(dayjs().year());

console.log("");
*/
/*
const date = new Date();

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
//date.setDate(date.getDate() + 1);

console.log(date);
*/

//setInterval

/*
setInterval(
  () => console.log(`This function will be executed every 10 second.
    `),
  10000
);

setTimeout(function () {
  console.log(`This function will be executed after 11 seconds`);
}, 11000);
*/

const intervalId = setInterval(function () {
  console.log(`This function is being executed at the interval`);
}, 2000);

//console.log(intervalId);

// Stop the interval after 10 seconds
setTimeout(function () {
  clearInterval(intervalId);
  console.log(`Interval Stopped`);
}, 10000);

