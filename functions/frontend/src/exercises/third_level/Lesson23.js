/**
 * LESSON 23: User Profile Destructuring & Defaulting
 *
 * Extracting nested properties with default values.
 *
 * WHAT TO DO:
 * Create a function 'formatProfile' that destructures '{ username, role = "Guest" }'
 * from its parameter object, and returns a formatted string: "User: [username], Role: [role]".
 *
 * IMPORTANT: Call 'formatProfile' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function formatProfile({ username, role = "Guest" } = {}) {
  return `User: ${username}, Role: ${role}`;
}

// Export for validation
export const lesson23 = {
  formatProfile: typeof formatProfile !== "undefined" ? formatProfile : null,
};
