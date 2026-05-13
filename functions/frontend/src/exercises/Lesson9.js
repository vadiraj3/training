/**
 * LESSON 9: Helper Functions (Reusability)
 * 
 * A helper function is a small function that does one specific job. 
 * Other functions can "ask" for its help whenever they need that job done.
 * 
 * WHAT TO DO:
 * 1. Create a function 'square' that takes a number 'n' and returns 'n * n'.
 * 2. Create a function 'sumOfSquares' that takes two numbers 'a' and 'b'.
 * 3. Inside 'sumOfSquares', call 'square(a)' and 'square(b)'.
 * 4. Add those two results together and return the total sum.
 * 
 * EXAMPLE:
 * sumOfSquares(3, 4) -> 3*3 is 9, 4*4 is 16. Total is 25.
 */

// YOUR CODE HERE



// Export for validation
export const lesson9 = {
  square: typeof square !== 'undefined' ? square : null,
  sumOfSquares: typeof sumOfSquares !== 'undefined' ? sumOfSquares : null,
};
