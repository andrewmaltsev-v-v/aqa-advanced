"use strict";

const checkRentCost = (days) => {
  const dayPrice = 40;
  if (days < 3) {
    return dayPrice * days;
  } else if (days >= 3 && days < 7) {
    return dayPrice * days - 20;
  } else if (days >= 7) {
    return dayPrice * days - 50;
  }
};
console.log(checkRentCost(2));
console.log(checkRentCost(6));
console.log(checkRentCost(10));
