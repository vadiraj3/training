import { lesson1 } from "./Lesson1";
import { lesson2 } from "./Lesson2";
import { lesson3 } from "./Lesson3";
import { lesson4 } from "./Lesson4";
import { lesson5 } from "./Lesson5";
import { lesson6 } from "./Lesson6";
import { lesson7 } from "./Lesson7";
import { lesson8 } from "./Lesson8";
import { lesson9 } from "./Lesson9";
import { lesson10 } from "./Lesson10";
import { lesson11 } from "./Lesson11";
import { lesson12 } from "./Lesson12";

export const traineeExercises = {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
};

lesson1.welcomeTrainee();
lesson1.welcomeTraineeArrow();

lesson2.calculateSquare(7);
lesson2.calculateSquareArrow(9);

lesson3.handleButtonClick();

lesson4.introduceUser("Veeru", "Student");

const add = lesson5.getRectangleArea(4, 4);
console.log(add);
const result = lesson5.getRectangleAreaArrow(7, 7);
console.log(result);
