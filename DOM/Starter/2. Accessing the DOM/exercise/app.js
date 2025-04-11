// 1. Select element h4 which holds text of "Red" by using getElementsByTagName

const h4 = document.getElementsByTagName("h4");
console.log(h4);

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName

const greenDiv = document.getElementsByClassName("green");
console.log(greenDiv);



// 3. Select div with the ID of blue which holds the text "Blue" by using getElementById

const blue = document.getElementById("blue");
console.log(blue);

// 4. Select div which has the class & Id of "yellow" by using querySelector()
const yellowClass = document.querySelector(".yellow");
console.log(yellowClass);

const yellowId = document.querySelector("#yellow");
console.log(yellowId);

// 5. Select all the elements which has the class of "teal" by using querySelectorAll

const allTeal = document.querySelectorAll(".teal");
console.log(allTeal);