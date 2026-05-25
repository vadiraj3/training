/**
 * LESSON 40: Higher-Order Functions (Delayed Execution)
 *
 * Higher-Order Functions are functions that accept another function as an argument,
 * or return a function, or both. We can use them to customize execution behavior,
 * such as delaying actions.
 *
 * WHAT TO DO:
 * Create a function 'delayExecution' that takes two parameters:
 * 1. 'callback' - a function to be executed
 * 2. 'delayMs' - a number representing the delay in milliseconds
 *
 * The function 'delayExecution' should return a NEW function.
 * When this returned function is called, it should schedule the 'callback' to run
 * after 'delayMs' milliseconds using 'setTimeout'.
 *
 * HINT:
 * function delayExecution(callback, delayMs) {
 *   return function() {
 *     setTimeout(callback, delayMs);
 *   }
 * }
 *
 * IMPORTANT: Call 'delayExecution' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function delayExecution(callback, delayMs) {
  return function() {
    setTimeout(callback, delayMs);
  };
}

// Export for validation
export const lesson40 = {
  delayExecution: typeof delayExecution !== "undefined" ? delayExecution : null,
};
