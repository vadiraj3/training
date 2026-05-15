/**
 * LESSON 11: Temperature Converter
 * 
 * In this lesson, we practice math operations and returning values.
 * 
 * WHAT TO DO:
 * 1. Create a function named 'toFahrenheit'.
 * 2. It should take one input (Celsius).
 * 3. Use the formula: (Celsius * 9/5) + 32.
 * 4. Return the result.
 * 
 * IMPORTANT: To complete the lesson, you must also CALL your function 
 * and store the result in a variable named 'currentTemp'.
 * 
 * Example:
 * toFahrenheit(0) should return 32
 */

// YOUR CODE HERE



// Export for validation
export const lesson11 = {
  toFahrenheit: typeof toFahrenheit !== 'undefined' ? toFahrenheit : null,
  currentTemp: typeof currentTemp !== 'undefined' ? currentTemp : undefined,
};
