"use strict";

const convertSLS = (a, b) => {
  if (a.length < b.length) {
    return a + b + a;
  } else if (a.length > b.length) {
    return b + a + b;
  }
};

console.log(convertSLS("1", "72"));
console.log(convertSLS("72", "1"));
console.log(convertSLS("752", "1"));
