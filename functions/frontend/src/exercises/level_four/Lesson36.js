/**
 * LESSON 36: Tag Cleanup & Array Mapping
 *
 * This exercise works with string transformations and array conversion.
 *
 * WHAT TO DO:
 * Create a function 'sanitizeTags' that takes a single string of comma-separated hashtag tags,
 * for example: "   #React, #javascript,  #HTML5   "
 *
 * The function should:
 * 1. Trim outer whitespace of the main string.
 * 2. Split the string by commas (',').
 * 3. For each tag:
 *    - Trim outer whitespace.
 *    - Remove the leading '#' character (if present).
 *    - Convert it to lowercase.
 * 4. Return an array of clean tag strings: ["react", "javascript", "html5"]
 *
 * HINT:
 * Use .split(',') to break it into an array, and then use .map() to clean each item using string methods
 * like .trim(), .toLowerCase(), and .replace('#', '').
 *
 * IMPORTANT: Call 'sanitizeTags' in index.js to see it marked as completed!
 */

// YOUR CODE HERE
function sanitizeTags(tagStr) {
  // TODO: Implement this function
}

// Export for validation
export const lesson36 = {
  sanitizeTags: typeof sanitizeTags !== "undefined" ? sanitizeTags : null,
};
