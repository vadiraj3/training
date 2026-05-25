/**
 * LESSON 40: Calculate Weighted Average
 *
 * This exercise works with array iteration and mathematical calculations.
 *
 * WHAT TO DO:
 * Create a function 'calculateWeightedAverage' that takes a single parameter 'grades' (array of objects).
 * Each grade object has:
 * {
 *   score: number,
 *   weight: number (a decimal representing importance, e.g. 0.3 for 30%)
 * }
 *
 * The function should calculate and return the weighted average score.
 * A weighted average is the sum of each (score * weight).
 *
 * For example, given: [{ score: 80, weight: 0.3 }, { score: 90, weight: 0.7 }]
 * The result should be: (80 * 0.3) + (90 * 0.7) = 24 + 63 = 87.
 *
 * If the array is empty, return 0.
 *
 * HINT:
 * Initialize a running sum to 0.
 * Loop through the array (e.g. using .reduce() or .forEach()) and accumulate (grade.score * grade.weight).
 *
 * IMPORTANT: Call 'calculateWeightedAverage' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateWeightedAverage(grades) {
  // TODO: Implement this function
}

// Export for validation
export const lesson40 = {
  calculateWeightedAverage: typeof calculateWeightedAverage !== "undefined" ? calculateWeightedAverage : null,
};
