// Getting elements from the DOM
let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value){
	// Creating New Elements
	let todo = document.createElement("div");
	let textEL = document.createElement("span");


	//Setting values & styles
	textEL.innerHTML=value;

	//Append our element to the DOM
	todo.appendChild(textEL);

	let closeEL = document.createElement('span');
	closeEL.innerHTML = "&times;"
	closeEL.classList.add("delete");

	//Attach Events
	closeEL.addEventListener('click', function(e){
		todos.removeChild(todo)
	})
		todo.appendChild(closeEL);
		todo.classList.add("todo");
		return todo;
}

form.addEventListener("submit", e => {
	e.preventDefault()
	let value = input.value;
	if(!value.trim())return;
	todos.appendChild(getTodo(value))
	input.value = "";
});