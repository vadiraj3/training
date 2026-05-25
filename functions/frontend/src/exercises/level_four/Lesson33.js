/**
 * LESSON 33: Function Currying
 *
 * Currying is the technique of translating a function that takes multiple arguments
 * into a sequence of functions that each take a single argument.
 *
 * WHAT TO DO:
 * Create a function 'multiplyBy' that takes a single parameter 'factor' (number).
 * It should return an inner function.
 * The inner function should take a single parameter 'number' (number) and return 'number * factor'.
 *
 * HINT:
 * function multiplyBy(factor) {
 *   return function(number) {
 *     return ...
 *   }
 * }
 * Or use arrow syntax: const multiplyBy = factor => number => ...
 *
 * IMPORTANT: Call 'multiplyBy' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

// Export for validation
export const lesson33 = {
  multiplyBy: typeof multiplyBy !== "undefined" ? multiplyBy : null,
};
