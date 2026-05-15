/**
 * LESSON 21: The Settings Merger
 * 
 * Functions are often used to merge user preferences with default settings.
 * 
 * WHAT TO DO:
 * 1. Create a function 'getSettings'.
 * 2. It takes 'userName' and 'preferredTheme'.
 * 3. Return an object with these properties:
 *    - 'user': the userName.
 *    - 'theme': the preferredTheme.
 *    - 'language': always set this to "English" (default).
 * 
 * IMPORTANT: Call your function in index.js to see it marked as completed!
 */

// YOUR CODE HERE



// Export for validation
export const lesson21 = {
  getSettings: typeof getSettings !== 'undefined' ? getSettings : null,
};
