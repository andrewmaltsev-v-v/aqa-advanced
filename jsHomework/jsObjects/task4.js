"use strict";

const person = {
  firstName: "Richie",
  lastName: "Harrison",
  age: 40,
};

person.email = "test@gmail.com";
delete person.age;
console.log(person);
