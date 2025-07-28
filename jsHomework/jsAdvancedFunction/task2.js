"use strict";

const someFunction = (num) => {
  if (num <= 0) {
    return;
  } else {
    console.log(num);
    return someFunction(num - 1);
  }
};
someFunction(5);
