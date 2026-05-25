/**
 * LESSON 42: Invoice Total with Custom Discount
 *
 * This exercise combines loops, arithmetic calculations, and conditional object checks.
 *
 * WHAT TO DO:
 * Create a function 'calculateInvoice' that takes a single invoice object:
 * {
 *   items: [
 *     { name: "Laptop", price: 1000, qty: 1 },
 *     { name: "Mouse", price: 50, qty: 2 }
 *   ],
 *   coupon: {
 *     type: "percent", // can be "percent" or "flat"
 *     value: 0.10 // representing 10% discount for percent type, or flat dollar off
 *   }
 * }
 *
 * The function should:
 * 1. Calculate the subtotal by summing up (price * qty) for all items.
 * 2. If 'coupon' exists, calculate the discount based on coupon type:
 *    - If type is "percent", discount is subtotal * coupon.value.
 *    - If type is "flat", discount is coupon.value.
 * 3. Subtract the discount from the subtotal and return the final total.
 * 4. If no 'coupon' is present, return the calculated subtotal.
 * 5. If the items array is empty, return 0.
 *
 * HINT:
 * Calculate the initial sum using a loop or .reduce().
 * Check if invoice.coupon is defined.
 * If yes, compute the discount and subtract it.
 *
 * IMPORTANT: Call 'calculateInvoice' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function calculateInvoice(invoice) {
  // TODO: Implement this function
}

// Export for validation
export const lesson42 = {
  calculateInvoice: typeof calculateInvoice !== "undefined" ? calculateInvoice : null,
};
