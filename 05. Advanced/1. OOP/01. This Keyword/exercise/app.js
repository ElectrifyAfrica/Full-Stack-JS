const person = {

  Name: "Oseyemen Daniel",

  Age: "32 years",

  greetRegular: function () {
    return `Hello, my name is ${this.Name} & I'm ${this.Age} years old.`;
  },

  greetArrow: () => {
    return `Hello, my name is ${this.Name} & I'm ${this.Age} years old.`;
  },
};

const res = person.greetRegular();
const res2 = person.greetArrow();

console.log(res);
console.log(res2);