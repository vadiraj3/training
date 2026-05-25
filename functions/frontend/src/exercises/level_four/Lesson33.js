/**
 * LESSON 33: Product Detail Formatter
 *
 * This exercise works with nested object extraction and string construction.
 *
 * WHAT TO DO:
 * Create a function 'formatProductDetail' that takes a single product object:
 * {
 *   brand: "Nike",
 *   details: {
 *     name: "Air Max",
 *     price: 120,
 *     releaseYear: 2024
 *   }
 * }
 *
 * The function should return a formatted string:
 * "Nike Air Max ($120) - Released in 2024"
 *
 * If any nested detail is missing (e.g. details, name, price, releaseYear, or brand),
 * it should use the following defaults:
 * - brand: "Generic"
 * - name: "Product"
 * - price: 0
 * - releaseYear: "Unknown"
 *
 * HINT:
 * Check if product.brand exists, else use "Generic".
 * Check if product.details exists before accessing product.details.price, etc.
 *
 * IMPORTANT: Call 'formatProductDetail' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function formatProductDetail(product) {
  // TODO: Implement this function
}

// Export for validation
export const lesson33 = {
  formatProductDetail: typeof formatProductDetail !== "undefined" ? formatProductDetail : null,
};
