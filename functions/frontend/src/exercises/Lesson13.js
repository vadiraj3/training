/**
 * LESSON 13: Greeting Logic
 * 
 * Functions often make decisions using if/else statements.
 * 
 * WHAT TO DO:
 * 1. Create a function named 'getGreeting'.
 * 2. It should take one input: 'hour' (a number from 0 to 23).
 * 3. If the hour is less than 12, return "Good Morning".
 * 4. Otherwise, return "Good Day".
 * 
 * IMPORTANT: Call your function with any hour and store the result 
 * in a variable named 'myGreeting'.
 */

// YOUR CODE HERE



// Export for validation
export const lesson13 = {
  getGreeting: typeof getGreeting !== 'undefined' ? getGreeting : null,
  myGreeting: typeof myGreeting !== 'undefined' ? myGreeting : undefined,
};
