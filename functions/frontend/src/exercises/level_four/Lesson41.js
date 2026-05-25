/**
 * LESSON 41: Get Bottom Three Prices
 *
 * This exercise covers array sorting and subset extraction (slicing).
 *
 * WHAT TO DO:
 * Create a function 'getBottomThree' that takes a single array of price numbers:
 * [100, 50, 200, 20, 80]
 *
 * The function should:
 * - Sort the price numbers in ASCENDING order (lowest to highest).
 * - Return a new array containing the first three (lowest three) prices: [20, 50, 80]
 *
 * If the input array has less than three items, return all of them sorted in ascending order.
 * Do not modify the original array (i.e. make a copy before sorting, e.g. using the spread operator or .slice()).
 *
 * HINT:
 * Copy the array: const copy = [...prices];
 * Sort ascending: copy.sort((a, b) => a - b);
 * Slice first 3: copy.slice(0, 3);
 *
 * IMPORTANT: Call 'getBottomThree' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function getBottomThree(prices) {
  // TODO: Implement this function
}

// Export for validation
export const lesson41 = {
  getBottomThree: typeof getBottomThree !== "undefined" ? getBottomThree : null,
};
