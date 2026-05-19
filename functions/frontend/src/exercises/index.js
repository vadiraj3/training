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
// Lessons 13-22 will be imported here
import { lesson13 } from "./Lesson13";
import { lesson14 } from "./Lesson14";
import { lesson15 } from "./Lesson15";
import { lesson16 } from "./Lesson16";
import { lesson17 } from "./Lesson17";
import { lesson18 } from "./Lesson18";
import { lesson19 } from "./Lesson19";
import { lesson20 } from "./Lesson20";
import { lesson21 } from "./Lesson21";
import { lesson22 } from "./Lesson22";
// Lessons 23-32 are in third_level folder
import { lesson23 } from "./third_level/Lesson23";
import { lesson24 } from "./third_level/Lesson24";
import { lesson25 } from "./third_level/Lesson25";
import { lesson26 } from "./third_level/Lesson26";
import { lesson27 } from "./third_level/Lesson27";
import { lesson28 } from "./third_level/Lesson28";
import { lesson29 } from "./third_level/Lesson29";
import { lesson30 } from "./third_level/Lesson30";
import { lesson31 } from "./third_level/Lesson31";
import { lesson32 } from "./third_level/Lesson32";

/**
 * CALL TRACKER
 * This helper wraps your lessons so we can detect if you've called them yourself!
 */
let trackingEnabled = true;
const wrapWithTracker = (lessonObj, lessonId) => {
  if (!lessonObj) return null;
  const tracker = { __calls: 0 };
  window.__traineeCalls = window.__traineeCalls || {};
  window.__traineeCalls[lessonId] = tracker;

  return new Proxy(lessonObj, {
    get(target, prop) {
      if (prop === "__wasCalledByTrainee") return tracker.__calls > 0;
      const val = target[prop];
      if (typeof val === "function") {
        return (...args) => {
          if (trackingEnabled) tracker.__calls++;
          return val(...args);
        };
      }
      return val;
    },
  });
};

export const traineeExercises = {
  lesson1: wrapWithTracker(lesson1, 1),
  lesson2: wrapWithTracker(lesson2, 2),
  lesson3: wrapWithTracker(lesson3, 3),
  lesson4: wrapWithTracker(lesson4, 4),
  lesson5: wrapWithTracker(lesson5, 5),
  lesson6: wrapWithTracker(lesson6, 6),
  lesson7: wrapWithTracker(lesson7, 7),
  lesson8: wrapWithTracker(lesson8, 8),
  lesson9: wrapWithTracker(lesson9, 9),
  lesson10: wrapWithTracker(lesson10, 10),
  lesson11: wrapWithTracker(lesson11, 11),
  lesson12: wrapWithTracker(lesson12, 12),
  lesson13: wrapWithTracker(lesson13, 13),
  lesson14: wrapWithTracker(lesson14, 14),
  lesson15: wrapWithTracker(lesson15, 15),
  lesson16: wrapWithTracker(lesson16, 16),
  lesson17: wrapWithTracker(lesson17, 17),
  lesson18: wrapWithTracker(lesson18, 18),
  lesson19: wrapWithTracker(lesson19, 19),
  lesson20: wrapWithTracker(lesson20, 20),
  lesson21: wrapWithTracker(lesson21, 21),
  lesson22: wrapWithTracker(lesson22, 22),
  lesson23: wrapWithTracker(lesson23, 23),
  lesson24: wrapWithTracker(lesson24, 24),
  lesson25: wrapWithTracker(lesson25, 25),
  lesson26: wrapWithTracker(lesson26, 26),
  lesson27: wrapWithTracker(lesson27, 27),
  lesson28: wrapWithTracker(lesson28, 28),
  lesson29: wrapWithTracker(lesson29, 29),
  lesson30: wrapWithTracker(lesson30, 30),
  lesson31: wrapWithTracker(lesson31, 31),
  lesson32: wrapWithTracker(lesson32, 32),
};

// Disable tracking after initial execution
setTimeout(() => {
  trackingEnabled = false;
}, 0);

// --- TRAINEE CALLS START HERE ---
// Call your functions below to see them marked as "Completed" in the UI!

lesson1.welcomeTrainee();
lesson1.welcomeTraineeArrow();

lesson2.calculateSquare(7);
lesson2.calculateSquareArrow(9);

lesson3.handleButtonClick();

lesson4.introduceUser("Veeru", "Student");

lesson5.getRectangleArea(4, 4);
lesson5.getRectangleAreaArrow(7, 7);

const evaluateResult = lesson7.evaluateScore(32, 35);
console.log(evaluateResult);

const fullname = lesson8.getFullName("basava", "gopal");
console.log(fullname);

const isMember = lesson13.calculatePrice(100, 20, true);
console.log(isMember);
const NonMember = lesson13.calculatePrice(100, 20, false);
console.log(NonMember);

const ChildGroup = lesson14.getAgeGroup(12);
console.log(ChildGroup);
const Teengroup = lesson14.getAgeGroup(15);
console.log(Teengroup);
const AdultGroup = lesson14.getAgeGroup(22);
console.log(AdultGroup);

const role = lesson15.createUser("Krishna", "Admin");
console.log(role);

const Address = lesson16.formatAddress({ city: "Mangalore", zip: 123456 });
console.log(Address);

const TotalAmount = lesson17.getTotalWithTax(100, 0.1);
console.log(TotalAmount);

const FullName = lesson18.welcomeMessage("Venu", "Vadi");
console.log(FullName);

const diameter = lesson19.getCircleInfo(10);
console.log(diameter);

const ExpertPlayer = { name: "Kumar", score: 50 };
console.log(ExpertPlayer);

const obj = lesson20.addScore(ExpertPlayer, 50);
console.log(obj);

const setting = lesson21.getSettings("Suresh", "Black");
console.log(setting);

const sum = lesson22.finalInvoice(1000);
console.log(sum);
