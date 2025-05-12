//console.log(window);
//console.log(this); // window
//console.log(this === window); //true
//window.firstName = "Oseyemen";
//this.lastName = "WebDev";
//console.log(window);

//------------------
/*
function printThis() {
  return this; //window
}

const res = printThis();
console.log(res);
*/

//--------------------------

/*
const obj = {
  firstName : "Oseyemen",
  lastName: "Aikhonmu",
  fullName: function () {
    return this; // "owner" obj
  },
  fullName2: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const res = obj.fullName();
const res2 = obj.fullName2();

console.log(res);
console.log(res2);
*/

//-----------------------------


const obj = {

  firstName : "Oseyemen",

  lastName: "Aikhonmu",

  fullName: () => {
    return this; // "owner" obj
  },

  fullName2: () => {
    return `${this.firstName} ${this.lastName}`; // undefined undefined
  },

};




const res = obj.fullName();
const res2 = obj.fullName2();

console.log(res);
console.log(res2);


