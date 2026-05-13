import { lessons } from "../data/lessons";
import { lesson1 } from "./Lesson1";
import { lesson2 } from "./Lesson2";
import { lesson3 } from "./Lesson3";
import { lesson4 } from "./Lesson4";
import { lesson5 } from "./Lesson5";

export const traineeExercises = {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
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
