"use strict";

const isEven = (num) => num % 2 === 0;
const isOdd = (num) => num % 2 !== 0;

const handleEven = () => {
  console.log("Number is even");
};

const handleOdd = () => {
  console.log("Number is odd");
};

const handleNum = (num, isEven, isOdd) => {
  //isOdd is unreadable, but I can rebuild code according to HW
  isEven(num) ? handleEven() : handleOdd();
};

handleNum(10, isEven, isOdd);
handleNum(5, isEven, isOdd);
