/**
 * LESSON 28: Bounded Discount Calculator
 *
 * Applying dynamic logic and limiting / capping mathematical outcomes.
 *
 * WHAT TO DO:
 * Create a function 'applyBoundedDiscount' that takes two parameters: 'price' (number) and 'discountPercent' (number).
 * First, cap the 'discountPercent' so it does not exceed 50 (i.e. maximum 50% discount).
 * Then, calculate and return the discounted price.
 * Hint: Use Math.min(discountPercent, 50).
 *
 * IMPORTANT: Call 'applyBoundedDiscount' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function applyBoundedDiscount(price, discountPercent) {
  const cappedDiscount = Math.min(discountPercent, 50);
  return price - (price * cappedDiscount / 100);
}

// Export for validation
export const lesson28 = {
  applyBoundedDiscount: typeof applyBoundedDiscount !== "undefined" ? applyBoundedDiscount : null,
};
