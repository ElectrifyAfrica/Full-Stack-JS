// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// CONSTRUCTOR FUNCTION

function CreatePeople(firstName, lastName, pl) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.pl = pl;
};

// NEW KEYWORD:
// 1. First create empty object {}
// 2. Sets "this" to point to that object
// 3. We can omit the return statement using "new" keyword

// Creating instances using the constructor function

const Daniel = new CreatePeople("Daniel", "Aikhonmu", "JS");

console.log(Daniel);