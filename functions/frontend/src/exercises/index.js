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
