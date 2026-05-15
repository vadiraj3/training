/**
 * LESSON 12: Callback Functions (Functions as Arguments)
 *
 * In JavaScript, a function is just another piece of data. You can pass a function into ANOTHER function!
 * The function that gets passed in is called a "Callback".
 *
 * WHAT TO DO:
 * 1. Create a function 'applyOperation'.
 * 2. It takes 3 arguments: 'a' (number), 'b' (number), and 'operation' (a function).
 * 3. Inside, call 'operation(a, b)' and return whatever it gives back.
 *
 * EXAMPLE:
 * applyOperation(5, 2, (x, y) => x + y) -> returns 7
 * applyOperation(5, 2, (x, y) => x * y) -> returns 10
 */

// YOUR CODE HERE

// Export for validation
export const lesson12 = {
  applyOperation: typeof applyOperation !== "undefined" ? applyOperation : null,
};
