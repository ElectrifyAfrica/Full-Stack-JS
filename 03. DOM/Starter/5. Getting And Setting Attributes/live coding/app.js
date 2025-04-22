const a = document.querySelector("a");
console.log(a);
console.log(a.href);
// href
console.log(a.href);
// value
const input = document.querySelector("input");
console.log(input.value);
// type
console.log(input.type);




// settting attributes

a.href = "https://www.youtube.com/@electrifyafrica";

console.log(a.href);

//console.log(input.value="Bye");
//console.log(input.type="password");
//console.log(input.placeholder="please provide a strong password");

// getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

// setAttribute(attrName, value)
input.setAttribute("placeholder", "Password");
input.setAttribute("type", "password");

console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));


