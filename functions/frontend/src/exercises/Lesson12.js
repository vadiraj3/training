/**
 * LESSON 12: Tip Calculator
 * 
 * Functions can handle multiple pieces of information (parameters).
 * 
 * WHAT TO DO:
 * 1. Create a function named 'calculateTip'.
 * 2. It should take two inputs: the bill amount and the tip percentage.
 * 3. Calculate the tip (bill * percent / 100).
 * 4. Return the calculated tip.
 * 
 * IMPORTANT: Call your function with 100 and 15, and store the result 
 * in a variable named 'tipAmount'.
 */

// YOUR CODE HERE



// Export for validation
export const lesson12 = {
  calculateTip: typeof calculateTip !== 'undefined' ? calculateTip : null,
  tipAmount: typeof tipAmount !== 'undefined' ? tipAmount : undefined,
};
