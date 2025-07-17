"use strict";

let averageGrade = 90;

if (averageGrade < 60) {
  console.log("Nezadovilno");
} else if (averageGrade >= 60 && averageGrade <= 70) {
  console.log("Zadovilno");
} else if (averageGrade >= 71 && averageGrade <= 80) {
  console.log("Dobre");
} else if (averageGrade >= 81 && averageGrade <= 90) {
  console.log("Dyzhe dobre");
} else if (averageGrade >= 91 && averageGrade <= 100) {
  console.log("Vidminno");
}
