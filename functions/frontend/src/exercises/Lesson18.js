/**
 * LESSON 18: Composition - Math Chain
 * 
 * Composition is when one function calls another function to do part of the work.
 * 
 * WHAT TO DO:
 * 1. Create a function 'square(n)' that returns n * n.
 * 2. Create a function 'squareAndDouble(n)' that calls 'square' first, 
 *    then doubles that result, and returns it.
 * 
 * IMPORTANT: Call 'squareAndDouble' with 3 and store the result 
 * in a variable named 'mathResult'.
 */

// YOUR CODE HERE



// Export for validation
export const lesson18 = {
  square: typeof square !== 'undefined' ? square : null,
  squareAndDouble: typeof squareAndDouble !== 'undefined' ? squareAndDouble : null,
  mathResult: typeof mathResult !== 'undefined' ? mathResult : undefined,
};
