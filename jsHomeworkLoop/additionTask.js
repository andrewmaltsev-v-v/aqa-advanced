"use strict";

const objectForHW = {
  //randomText: "123text WitH 12 NumbErs aNd ssjnxf",
  randomText: "TEST",
  checkCaps: function () {
    if (this.randomText === this.randomText.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  },
};
console.log(objectForHW.checkCaps());
