//console.log('hello');
/*
// Backticks



const firstName = "Oseyemen";
const lastName = "Aikhonmu";

console.log("My Name is: " + firstName + " " + lastName);

console.log(`My Name is: ${firstName} ${lastName}`);

//console.log(`${["one", "two", "three"]}`);

function info() {
  return `My name is Daniel webdev & I'm 32 years old.`;
}

console.log(`${info()}`);
*/

//function greet(username) {
//  return `Hello ${username}`;
//}

/*
greet = username => 
 `Hello ${username}`;

console.log(greet("Daniel"));


const greet1 = (username1, username2) => {
  return `Hello ${username1}
Mr. ${username2}`;
}

console.log(greet1("Oseyemen", "Aikhonmu"));

//function double(number) {
//  return number * 2;
//}

const double = number => number * 2;
console.log(double(10));
*/

/*
function user(name, age, work) {
  return {
    name,
    age,
    work,
    intro: () => {
      console.log(`My name is ${name} & I'm ${age} years old and I'm a/an ${work}`);
    },
  };
};

const Daniel = user("Daniel", 32, "Engineer");
const Zalika = user("Zalika", 26, "Doctor");
console.log(Daniel);
console.log(Zalika.intro());
*/

/*
function countTo5(count = true) {
  if (count == true) {
    for (let i = 1; i <= 5; i++) {
      console.log(`count: ${i}`);
    };
  };
};

countTo5();
*/
/*
function ratings(rate = 0) {
  if (rate === 5) {
    console.log(`High Ratings :)`);
  } else if (rate === 0) {
    console.log(`Low Ratings :(`);
  }
}

ratings(5);
*/

// Spread Operators
/*
function giveMe4(a,b,c,d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ['red', 'green', 'blue', 'teal'];

giveMe4(...colors);
*/

/*
const strNums = ['one', 'two', 'three'];
const moreStrNums = ['four', 'five', 'six'];
const concat = [...strNums, ...moreStrNums];

console.log(concat);
*/

/*
let peoples = ['Daniel', 'alex', 'jordan'];
const allPeps = ["Kumar", ...peoples, "John"];
console.log(allPeps);
*/

/*
const obj1 = {x: 1, y: 2};
const obj2 = {z: 3};
const obj3 = {...obj1, ...obj2};

console.log(obj3);

let person = {
  name: "Daniel",
  age: 32,
  gender: 'male'
};

const clone = { ...person, work: "programmer", location: "Ontario" };
console.log(clone);
console.log(person);
*/

  // Rest Operator

  /*
function user(...userData) {
  console.log(userData);
}

user("Daniel", 32, "automation", "football");


function user1(typical, ...userData1) {
  console.log(typical);
  console.log(userData1);
}

user1("Daniel", 32, "automation", "football");
*/

/*
function person(firstName, lastName, ...hobbies) {
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  console.log('hobbies:', hobbies);
}

person("Oseyemen", "Aikhonmu", 'Engineer', 'Programming', 'Driving', 'automation');
*/

// Destructuring
/*
const foo = ["one", 'two', "three", 'four'];

const [one, two, three] = foo;
//const one = foo[0];

console.log(one);
console.log(two);
console.log(three);
*/

/*
const foo = ["one", 'two', "three", 'four'];

const [red, yellow, green, blue, brown] = foo;


console.log(red);
console.log(yellow);
console.log(green);
*/
/*
let a, b;

[a = 5, b = 8] = ["one", "new value"];
console.log(a);
console.log(b);
*/

/*
function f() {
  return [1, 2];
}

let a, b; 
[a, b] = f();
console.log(a);
console.log(b);
*/
/*
function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a);
console.log(b);
*/
// Assigning the rest of an array to a variable

/*
const [a, ...b] = ["one", "two", "three", true, 12, ["seven"]];
console.log(a);
console.log(b);
*/

/*

*/

// In object destructuring order doesn't matter but the name does matter

/*
const student = { nametag: "Daniel", position: "First", rollNo: 27 };
const { nametag, position, rollNo } = student;

console.log(nametag);
console.log(position);
console.log(rollNo);
*/
/*
const num = { x: 100, y: 200 };
const {x, y} = num
console.log(x);
console.log(y);
*/

/*
const num = { x: 100, y: 200 };
const { x: new1, y: new2 } = num;

console.log(new1);
console.log(new2);
*/

//object destructuring and rest operator

/*
let{a, b, ...rest} = { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(rest);
*/
/*

// this code below can also be written by destructuring
const person = {
  name: "John Doe",
  age: 20,
  country: "USA"
};

function printPersonInfo(person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  console.log(`Country: ${person.country}`);
}

printPersonInfo(person);
  */

// destrucutured code using functions 

/*
const person = {
  name: "John Doe",
  age: 20,
  country: "USA",
};

function printPersonInfo({ name, age, country }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Country: ${country}`);
}

printPersonInfo(person);
*/
/*
let options = {
  title: "My menu",
  items: ['item1', 'item2'],
};

function showMenu({
  title = "Untitled", 
  width: w = 100, 
  height: h = 200, 
  items: [item1, item2],
}) {
  console.log(`${title} ${w} ${h}`);
  console.log(item1);
  console.log(item2);
}

showMenu(options);
*/

/*
const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just like you", singer: "NF", duration: 3.23 },
  { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold SHolder", singer: "Central Cee", duration: 5.23 },
];

const[, , {singer}] = songs;
console.log(singer);
*/

/*
const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just like you", singer: "NF", duration: 3.23 },
  { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold SHolder", singer: "Central Cee", duration: 5.23 },
];

const[, , { singer: s }, {singer}] = songs;
console.log(s);
console.log(singer)
*/

/*
const data = {
  user: {
    id: 123,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Painting", "Cooking"],
    scores: {
      math: 95,
      science: 88,
      history: 75,
    },
  },
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Tablet", price: 500 },
  ],
  settings: {
    darkMode: true,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    language: "English",
  },
};

// Extracting data using object destructuring
const {
  user: {
    name,
    age,
    address: { city, country },
    hobbies,
    scores: { math, science, history },
    email,
  },
  products: [product1, product2, product3],
  settings: {
    darkMode,
    notifications: {
      email: emailNotifications,
      sms: smsNotifications,
      push: pushNotifications,
    },
    language,
  },
} = data;

// Logging the extracted data using template literals
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city}, ${country}`);
console.log(`Hobbies: ${hobbies.join(", ")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Product 1: ${product1.name} - $${product1.price}`);
console.log(`Product 2: ${product2.name} - $${product2.price}`);
console.log(`Product 3: ${product3.name} - $${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);
console.log(`Email Notifications: ${emailNotifications}`);
console.log(`SMS Notifications: ${smsNotifications}`);
console.log(`Push Notifications: ${pushNotifications}`);
console.log(`Language: ${language}`);
*/

