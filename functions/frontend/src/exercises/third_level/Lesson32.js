"use strict";

/**
 *
 * LESSON 32: Nested Destructuring & Total Calculation
 *
 * Deeply destructuring parameters to perform calculations.
 *
 * WHAT TO DO:
 * Create a function 'calculateOrderTotal' that takes a single object parameter and deeply destructures it to extract
 * '{ order: { price, taxRate } }'.
 * It should return the total price including tax (price + (price * taxRate)).
 *
 * IMPORTANT: Call 'calculateOrderTotal' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateOrderTotal(order) {
  const { price, taxRate } = order;
  console.log(price, taxRate);
  const Totaltax = price * taxRate;
  const TotalPrice = price + Totaltax;
  return TotalPrice;
}

// Export for validation
export const lesson32 = {
  calculateOrderTotal:
    typeof calculateOrderTotal !== "undefined" ? calculateOrderTotal : null,
};
