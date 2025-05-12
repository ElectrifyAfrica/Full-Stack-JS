/*
let Daniel = {
  firstName: "Oseyemen Daniel",
  lastName: "Aikhonmu",
  fullName: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love God`);
  },
};

Daniel.fullName();





let Zalika = {
  firstName: "Aisha Zalika",
  lastName: "Ruddock-scott",
  fullName: function () {
    console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love God`);
  },
};

Zalika.fullName();

*/



//----------------Factory function-----------

function createPerson(firstName, lastName, pl) {
  return {
    firstName: firstName,
    lastName: lastName,
    pl: pl,
    intro: function () {
      console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`);
    },
  };
};

const Daniel = createPerson("Oseyemen Daniel", "Aikhonmu", "JavaScript");
const Zalika = createPerson("Aisha Zalika", "Ruddock-Scott", "GOlang");

console.log(Daniel);
Daniel.intro();
Zalika.intro();

//--- Same as above but using enhanced object literal

function createPerson1(firstName, lastName, pl) {
  return {
    firstName,
    lastName,
    pl,
    intro: function () {
      console.log(`Hello my name is ${this.firstName} ${this.lastName} & I love ${this.pl}`);
    },
  };
};

const Ehito = createPerson1("Ehito", "Oaikhena", "Python");
Ehito.intro();