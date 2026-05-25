/**
 * LESSON 38: Apply Tax & Bounded Budget Limit
 *
 * This exercise works with basic math operations and boundary containment (clamping).
 *
 * WHAT TO DO:
 * Create a function 'calculateBoundedTotal' that takes three parameters:
 * 1. 'price' (number) - base cost of the transaction
 * 2. 'taxRate' (number) - tax rate as a decimal (e.g. 0.15 for 15% tax)
 * 3. 'maxBudget' (number) - the maximum budget limit
 *
 * The function should:
 * - Calculate the total cost including tax: base price + (price * taxRate)
 * - Compare the total cost with 'maxBudget'.
 * - If the total cost exceeds 'maxBudget', return the 'maxBudget' value.
 * - Otherwise, return the calculated total cost.
 *
 * HINT:
 * const total = price * (1 + taxRate);
 * return total > maxBudget ? ...
 *
 * IMPORTANT: Call 'calculateBoundedTotal' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateBoundedTotal(price, taxRate, maxBudget) {
  // TODO: Implement this function
}

// Export for validation
export const lesson38 = {
  calculateBoundedTotal: typeof calculateBoundedTotal !== "undefined" ? calculateBoundedTotal : null,
};
