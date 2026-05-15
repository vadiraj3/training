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

lesson2.calculateSquare(2);
lesson2.calculateSquareArrow(4);

lesson3.handleButtonClick();
lesson4.introduceUser("Venu", "Student");

const add = lesson5.getRectangleArea(5, 3);
console.log(add);
const result = lesson5.getRectangleArea(9, 7);
console.log(result);

const score = lesson7.evaluateScore(80, 50);
console.log(score);

const fullName = lesson8.greetUser("John", "Doe");
console.log(fullName);

const Totalresult = lesson9.sumOfSquares(15, 10);
console.log(Totalresult);

const sum = lesson10.sumArray([1, 3, 5, 7, 9]);
console.log(sum);

const UserCard = lesson11.formatUserCard({
  username: "jsmith",
  email: "j@s.com",
});
console.log(UserCard);
