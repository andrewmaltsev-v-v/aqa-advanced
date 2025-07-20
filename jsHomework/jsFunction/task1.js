"use strict";

function getAreaRect1(width, height) {
  return width * height;
}

const getAreaRect2 = function (width, height) {
  return width * height;
};

const getAreaRect3 = (width, height) => width * height;

console.log(getAreaRect1(5, 10));
console.log(getAreaRect2(5, 10));
console.log(getAreaRect3(5, 10));
