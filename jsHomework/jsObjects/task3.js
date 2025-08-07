"use strict";

const car1 = {
  brand: "Toyota",
  model: "Unknown_model",
  year: 1487,
};

const car2 = {
  brand: "BMW",
  model: "New_old_model",
  owner: "not_me",
};

const car3 = {
  ...car1,
  ...car2,
};

console.log(car3);
