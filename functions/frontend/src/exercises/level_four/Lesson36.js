/**
 * LESSON 36: Rest Parameters (...args)
 *
 * Rest parameters allow a function to accept an indefinite number of arguments as an array.
 * This is useful when you don't know beforehand how many parameters the user will pass.
 *
 * WHAT TO DO:
 * Create a function 'sumAll' that takes a rest parameter 'numbers' (representing all passed arguments).
 * The function should sum all these numbers and return the total sum.
 * If no numbers are passed, the function should return 0.
 *
 * HINT:
 * function sumAll(...numbers) {
 *   return numbers.reduce((sum, n) => sum + n, 0);
 * }
 *
 * IMPORTANT: Call 'sumAll' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function sumAll(...numbers) {
  // TODO: Implement this function
}

// Export for validation
export const lesson36 = {
  sumAll: typeof sumAll !== "undefined" ? sumAll : null,
};
