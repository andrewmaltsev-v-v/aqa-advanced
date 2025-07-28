"use strict";

const divide = (numerator, denominator) => {
  try {
    if (denominator === 0) {
      throw new Error("denomnator = 0");
    } else if (typeof numerator != "number" || typeof denominator != "number") {
      throw new Error("numerator or denominator is not a number");
    } else {
      return console.log(numerator / denominator);
    }
  } catch (e) {
    console.log("Error:", e.message);
    return null;
  } finally {
    console.log("Work is done");
  }
};

divide(5, 2);
divide(4, 0);
divide(4, "n");
divide(undefined, 1);
