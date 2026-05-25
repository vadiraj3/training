/**
 * LESSON 39: Immutable Object Updates
 *
 * Immutability is a core concept in functional programming and state management frameworks (like React/Redux).
 * Instead of modifying an object's nested properties directly (which mutates the original reference),
 * we create new objects using the spread operator ('...').
 *
 * WHAT TO DO:
 * Create a function 'updateUserCity' that takes two parameters:
 * 1. 'user' - an object of shape { name: '...', address: { city: '...', country: '...' } }
 * 2. 'newCity' - a string representing the new city name
 *
 * The function should return a NEW copy of the 'user' object with the 'address.city' updated to 'newCity'.
 * It MUST NOT mutate the original 'user' object or the nested 'user.address' object.
 *
 * HINT:
 * return {
 *   ...user,
 *   address: {
 *     ...user.address,
 *     city: newCity
 *   }
 * };
 *
 * IMPORTANT: Call 'updateUserCity' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function updateUserCity(user, newCity) {
  // TODO: Implement this function
}

// Export for validation
export const lesson39 = {
  updateUserCity: typeof updateUserCity !== "undefined" ? updateUserCity : null,
};
