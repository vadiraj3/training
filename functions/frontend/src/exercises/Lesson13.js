/**
 * LESSON 13: The Discount Applicator
 * 
 * Functions can handle complex pricing logic using multiple parameters.
 * 
 * WHAT TO DO:
 * 1. Create a function 'calculatePrice'.
 * 2. It should take three inputs: 'basePrice', 'discountAmount', and 'isMember'.
 * 3. Logic:
 *    - If 'isMember' is true, return the 'basePrice' minus 'discountAmount'.
 *    - Otherwise, just return the 'basePrice'.
 * 
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE



// Export for validation
export const lesson13 = {
  calculatePrice: typeof calculatePrice !== 'undefined' ? calculatePrice : null,
};
