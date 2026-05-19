/**
 * LESSON 25: Safe Nested Property Access
 *
 * Safely accessing deep properties in objects using optional chaining.
 *
 * WHAT TO DO:
 * Create a function 'getStreetName' that takes a 'user' object parameter.
 * It should safely retrieve 'user.address.street' using optional chaining.
 * If 'street' is not found (null or undefined), it should return the string "Street Not Found".
 *
 * IMPORTANT: Call 'getStreetName' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function getStreetName(user) {
  return user?.address?.street ?? "Street Not Found";
}

// Export for validation
export const lesson25 = {
  getStreetName: typeof getStreetName !== "undefined" ? getStreetName : null,
};
