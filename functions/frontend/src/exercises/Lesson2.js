/**
 * LESSON 2: Function Parameters
 *
 * Task:
 * 1. Define a normal function named 'calculateSquare' that takes one parameter: 'number'.
 *    It should log the result of 'number * number'.
 * 2. Define an equivalent arrow function named 'calculateSquareArrow'.
 */

// YOUR CODE HERE (Normal Function)
function calculateSquare(number) {
  const add = number * number;
  console.log(add);
}
// YOUR CODE HERE (Arrow Function)
const calculateSquareArrow = (parameter) => {
  const result = parameter * parameter;
  console.log(result);
};
// Export them
export const lesson2 = {
  calculateSquare:
    typeof calculateSquare !== "undefined" ? calculateSquare : null,
  calculateSquareArrow:
    typeof calculateSquareArrow !== "undefined" ? calculateSquareArrow : null,
};
