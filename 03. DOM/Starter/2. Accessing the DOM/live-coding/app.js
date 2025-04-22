// ************ DOM SELECTORS ************
// 1. getElementsByTagName
//console.log(document.getElementsByTagName("h1"));
//console.log(document.getElementsByTagName("h1").length);


// 2. getElementById
//console.log(document.getElementById("main"));
//console.log(document.getElementById("id-1"));

// 3. getElementsByClassName
//console.log(document.getElementsByClassName(""));
//console.log(document.getElementsByClassName("cls"));
//console.log(document.getElementsByClassName("cls-1"));


// 4. querySelector
//console.log(document.querySelector("h1")); // by tag name
//console.log(document.querySelector(".cls")); //by class name
//console.log(document.querySelector(".danny")); //null
//console.log(document.querySelector("cls")); //null
//console.log(document.querySelector("#id-1")); // by Id
//console.log(document.querySelector("li"));


// 5. querySelectorAll
//console.log(document.querySelectorAll(".cls"));
//console.log(document.querySelectorAll(".cls").length);
//console.log(document.querySelectorAll("li"));

// ---------------------------------------
// Storing data in variables
const h1 = document.querySelector("h1");
console.log(h1);

const li = document.querySelectorAll("li");
console.log(li);
