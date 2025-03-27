/*
console.log(`The quick
brown fox
jumps over
the lazy dog`);

const message1 = `The quick
brown fox
jumps over
the lazy dog`;

const firstName = "Oseyemen";
const lastName = "Aikhonmu";

console.log(`${firstName} ${lastName} says ${message1}`);
*/

/*
setTimeout(() => {
  console.log("Hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("Danny");
      setTimeout(() => {
        console.log("Where are you");
        setTimeout(() => {
          console.log("Today");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);    
}, 2000);   
*/

// Refactor ES5 Code to ES6 (Enhanced Object Literals)
// ES5 code

/*
//ES5
var a = 1;
var b = 2;
var c = 3;

var obj = {
  a: a,
  b: b,
  c: c,
};

console.log(obj);
*/

/*
//ES6
const a = 1;
const b = 2;
const c = 3;

const obj = {a,b,c};

console.log(obj);
*/

//ES5 code
/*
var lib ={
  sum: function (a, b) {
    return a + b;
  },
  mult: function (a, b) {
    return a * b;
  },
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6
*/

//ES6 code

/*
const lib ={
  sum: (a, b) => a + b,

  mult: (a, b) => a * b,
};

console.log(lib.sum(2, 3)); // 5
console.log(lib.mult(2, 3)); // 6
*/

//ES5 code
/*
function getPersionES5(name, age, height) {
  return {
    name: name,
    age: age,
    height: height,
  };
}

console.log(getPersionES5("Daniel", 32, 176));
// Expected output: { name: "Daniel", age: 32, height: 176}
*/


//ES6 Code
/*
function getPersionES6( name, age, height ) {
  return { name, age, height };
}

const res = getPersionES6("Daniel", 32, 176);
console.log(res);

// Expected output: { name: "Daniel", age: 32, height: 176}
*/

//parameters

/*
function names(a, b = 1) {
  mult = a * b;
}

names(4);
console.log(mult);
*/

/*
function multi(a, b = 1) {
  return a * b;
}

//res = multi(3, 5);
res = multi(3);

console.log(res);
*/

/*
//spread operators

let arr = [1,2,3];
let arr2 = [4,5];

const arr3 = [ ...arr, ...arr2 ];


const user = {
  name: "Jen",
  age: 22,
};

const userClone = {...user};


console.log(arr3);
console.log(userClone);
*/

/*
function nolimits(...datas) {
  console.log(datas);
}

nolimits("today", "tomorrow", "next tomorrow");
*/

//Array destructuring
/*
const colors = ["red", "green", "blue", "yellow", "orange"]

const [color1, color2, color3] = colors;

console.log(color1, color2, color3);
console.log(color2);
console.log(color3);
console.log(colorsall);
*/


/*
const colors = ["red", "green", "blue", "yellow", "orange"];

const [color1, color2, color3, ...colorsall] = colors;

console.log(color1, color2, color3);
console.log(color2);
console.log(color3);
console.log(colorsall);
*/

// Object Destructuring

/*
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA"
};

const {name, age, gender, country} = person;

console.log(name);
console.log(age);
//console.log(gender);
console.log(country);
*/
/*
const person = {
  name: "John Doe",
  age: 30,
  gender: "male",
  country: "USA"
};

const{
  name: personName,
  age: personAge,
  country: personCountry
} = person;

console.log(personName);
console.log(personAge);
console.log(personCountry);
*/

