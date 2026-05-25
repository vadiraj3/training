/**
 * LESSON 24: Array Element Modification
 *
 * Modifying elements in an array at a specific index.
 *
 * WHAT TO DO:
 * Create a function 'updateCartQuantity' that takes three parameters: 'cart' (an array of numbers),
 * 'index' (a number), and 'incrementBy' (a number).
 * It should add 'incrementBy' to the value at 'index' in the 'cart' array and return the updated 'cart' array.
 *
 * IMPORTANT: Call 'updateCartQuantity' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function updateCartQuantity(cart, index, incrementBy) {
  cart[index] = cart[index] + incrementBy;
  return cart;
}

// Export for validation
export const lesson24 = {
  updateCartQuantity:
    typeof updateCartQuantity !== "undefined" ? updateCartQuantity : null,
};
