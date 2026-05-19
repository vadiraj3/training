/**
 * LESSON 30: Array Average Calculator
 *
 * Processing arrays to compute a statistical summary.
 *
 * WHAT TO DO:
 * Create a function 'calculateAverage' that takes an array of numbers 'ratings'.
 * It should calculate and return the average value of all numbers in the array.
 * If the array is empty or not an array, return 0.
 *
 * IMPORTANT: Call 'calculateAverage' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateAverage(ratings) {
  if (!Array.isArray(ratings) || ratings.length === 0) return 0;
  const total = ratings.reduce((sum, current) => sum + current, 0);
  return total / ratings.length;
}

// Export for validation
export const lesson30 = {
  calculateAverage: typeof calculateAverage !== "undefined" ? calculateAverage : null,
};
