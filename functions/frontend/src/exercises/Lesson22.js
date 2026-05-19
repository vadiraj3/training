/**
 * LESSON 22: Practical Composition - Tax & Total
 *
 * Final review of combining multiple helper functions to solve a real task.
 *
 * WHAT TO DO:
 * 1. Create a helper 'calculateTax(price)' that returns price * 0.18.
 * 2. Create 'finalInvoice(price)' that calls 'calculateTax'.
 * 3. Add the result of 'calculateTax' to the original price and return the sum.
 *
 * IMPORTANT: Call 'finalInvoice' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateTax(price) {
  return price * 0.18;
}

function finalInvoice(price) {
  const sum = price + calculateTax(price);
  return sum;
}

// Export for validation
export const lesson22 = {
  calculateTax: typeof calculateTax !== "undefined" ? calculateTax : null,
  finalInvoice: typeof finalInvoice !== "undefined" ? finalInvoice : null,
};
