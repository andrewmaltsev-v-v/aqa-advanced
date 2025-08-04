"use strict";

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];
const array1 = [1, 10, 14, 2, 4, 5, 43, 34];

array1.sort(function (a, b) {
  return a - b;
});

console.log(numbersList);
console.log(array1);
