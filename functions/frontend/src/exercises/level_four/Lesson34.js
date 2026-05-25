/**
 * LESSON 34: Method Chaining (Fluent Interface)
 *
 * Method chaining allows you to call multiple methods on the same object in a single line.
 * This is achieved by returning the object itself ('this') from each modifying method.
 *
 * WHAT TO DO:
 * Create a function 'createChainableCalc' that takes an 'initialValue' (number).
 * It should return an object that maintains a running total and provides three methods:
 * 1. 'add(val)' - adds val to the total and returns 'this'
 * 2. 'subtract(val)' - subtracts val from the total and returns 'this'
 * 3. 'getResult()' - returns the final total number
 *
 * IMPORTANT: Call 'createChainableCalc' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function createChainableCalc(initialValue) {
  // TODO: Implement this function
}

// Export for validation
export const lesson34 = {
  createChainableCalc: typeof createChainableCalc !== "undefined" ? createChainableCalc : null,
};
