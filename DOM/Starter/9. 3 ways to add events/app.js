// ----------- BAD WAY-----------
/*
const secondBtn = document.querySelector(".second-btn");

// secondBtn.onclick = alert("Daniel"); 
// the above code blocks our browser from loading up

secondBtn.onclick = function() {
	console.log("Daniel WebDev");
}
*/


// ----------- GREAT WAY-----------

//const best = document.querySelector('.best');


// regular function
/*
function greetings () {
	console.log("Hello World");
}

best.addEventListener("click", greetings);
*/

// arrow function
/*
best.addEventListener("click", ()=> {
	console.log("Yellow");
});
*/

// arrow function without the curly brackets

//best.addEventListener("click", () => console.log("Yellow"));


/*
// ----------- Event (e) Object -----------
const form = document.querySelector('form');
const input = document.querySelector('input');

//form.addEventListener('submit', (event) => {
//	event.preventDefault();
	//console.log(event);

		
form.addEventListener('submit', (e) => {
	e.preventDefault();
	//console.log(e);
	console.log(input.value);
});
*/