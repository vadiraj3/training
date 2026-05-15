/**
 * LESSON 1: Defining a Function
 *
 * Task:
 * 1. Define a normal function named 'welcomeTrainee' that logs 'Welcome to JavaScript Training!'
 * 2. Define an arrow function named 'welcomeTraineeArrow' that logs the same message.
 */

// YOUR CODE HERE (Normal Function)
function welcomeTrainee() {
  console.log("Welcome to JavaScript Training!");
}

function welcomeTraineeArrow() {
  console.log("Hello from Arrow Function!");
}
// Export them for testing in the UI
export const lesson1 = {
  welcomeTrainee: typeof welcomeTrainee !== "undefined" ? welcomeTrainee : null,
  welcomeTraineeArrow:
    typeof welcomeTraineeArrow !== "undefined" ? welcomeTraineeArrow : null,
};
