"use strict";

let averageGrade = 59;

switch (true) {
  case averageGrade < 60:
    console.log("Nezadovilno");
    break;
  case averageGrade >= 60 && averageGrade <= 70:
    console.log("Zadovilno");
    break;
  case averageGrade >= 71 && averageGrade <= 80:
    console.log("Dobre");
    break;
  case averageGrade >= 81 && averageGrade <= 90:
    console.log("Dyzhe dobre");
    break;
  case averageGrade >= 91 && averageGrade <= 100:
    console.log("Vidminno");
    break;
}
